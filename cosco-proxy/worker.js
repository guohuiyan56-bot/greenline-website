// GREENLINE · COSCO 中远海运 货物跟踪 转发 Worker
// 部署：Cloudflare Workers（免费）。密钥通过 `wrangler secret put` 注入，绝不写在前端。
//
// 职责：
//   1. 接收官网前端发来的 单号 + 类型（bl/bkg/cntr）
//   2. 用 COSCO COP 开放平台的 Hmac 体系对请求签名
//   3. 调用官方接口 https://api.lines.coscoshipping.com/service/info/tracking/{单号}?numberType=...
//   4. 把返回的轨迹归一化成干净的 JSON 回传给前端（并带 CORS 头，供静态站跨域调用）
//
// 重要：GET 请求无 body，X-Coscon-Digest 按规范取空内容的 SHA-256。
//       若上线后用真实密钥联调返回 401，优先排查 request-line 是否应包含 query 字符串
//       （本实现已包含 ?numberType=，与真实请求一致；如 COSCO 要求不含 query，去掉即可）。

import { createHmac, createHash, randomUUID } from 'node:crypto';

const COSCO_HOST = 'https://api.lines.coscoshipping.com';
const COSCO_BASE_PATH = '/service'; // 官方基址为 /service，完整请求行含此前缀

// ---- Hmac 签名（严格按 COP 文档） ----
function buildHmacHeaders(apiKey, secretKey, method, requestTarget) {
  // requestTarget 形如 /service/info/tracking/6412690220?numberType=bl
  const date = new Date().toUTCString();                 // RFC1123 / GMT，误差 < 2 分钟
  const uuid = randomUUID();
  const contentMd5 = createHash('md5').update(uuid).digest('hex'); // UUID 的 md5 十六进制
  const emptySha256 = createHash('sha256').update('').digest('base64');
  const digest = 'SHA-256=' + emptySha256;               // GET 无 body
  const requestLine = `${method} ${requestTarget} HTTP/1.1`;
  const signingString =
    `X-Coscon-Date: ${date}\n` +
    `X-Coscon-Digest: ${digest}\n` +
    `X-Coscon-Content-Md5: ${contentMd5}\n` +
    requestLine;
  const signature = createHmac('sha1', secretKey).update(signingString).digest('base64');
  const authorization =
    `hmac username="${apiKey}", algorithm="hmac-sha1", ` +
    `headers="X-Coscon-Date X-Coscon-Digest X-Coscon-Content-Md5 request-line", ` +
    `signature="${signature}"`;
  return {
    'X-Coscon-Date': date,
    'X-Coscon-Content-Md5': contentMd5,
    'X-Coscon-Digest': digest,
    'X-Coscon-Authorization': authorization,
    'X-Coscon-Hmac': contentMd5,
  };
}

// ---- 把 COSCO 原始响应归一化 ----
function normalize(raw) {
  const d = raw && raw.data;
  if (!d) return { found: false, raw };
  const content = d.content || {};
  const out = {
    type: d.type || null,
    numberType: d.numberType || null,
    found: true,
    containers: [],
    message: raw.message || null,
  };
  // 箱号查询：containers[].containerCircleStatus[] 为动态轨迹
  const containers = content.containers || [];
  for (const c of containers) {
    const events = (c.containerCircleStatus || []).map(function (e) {
      return {
        status: e.containerNumberStatus || '',
        location: e.location || '',
        time: e.timeOfIssue || '',
        mode: e.transportation || '',
      };
    });
    out.containers.push({
      number: (c.container && c.container.containerNumber) || (events[0] && events[0].containerNumber) || '',
      events: events,
    });
  }
  // 提单/订舱查询：content 可能为 trackingPath / containerStatus 等结构，原样保留供前端展示
  if (out.containers.length === 0) {
    if (content.trackingPath) out.trackingPath = content.trackingPath;
    if (content.containerStatus) out.containerStatus = content.containerStatus;
    if (content.actualShipment) out.actualShipment = content.actualShipment;
    if (content.notFound) out.notFound = content.notFound;
  }
  return out;
}

function corsHeaders() {
  return {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, OPTIONS',
    'access-control-allow-headers': 'content-type',
  };
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status,
    headers: Object.assign({
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    }, corsHeaders()),
  });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }
    if (request.method !== 'GET') {
      return json({ error: 'method not allowed' }, 405);
    }
    if (!env.COSCO_API_KEY || !env.COSCO_SECRET_KEY) {
      return json({ error: 'server not configured: missing COSCO credentials' }, 500);
    }

    const url = new URL(request.url);
    const number = (url.searchParams.get('number') || '').trim();
    let type = (url.searchParams.get('type') || 'bl').toLowerCase();
    if (!['bl', 'bkg', 'cntr', 'both', 'none'].includes(type)) type = 'bl';
    if (!number) return json({ error: 'missing number' }, 400);

    const target = `${COSCO_BASE_PATH}/info/tracking/${encodeURIComponent(number)}?numberType=${type}`;
    const headers = buildHmacHeaders(env.COSCO_API_KEY, env.COSCO_SECRET_KEY, 'GET', target);

    let raw;
    try {
      const resp = await fetch(COSCO_HOST + target, { method: 'GET', headers: headers });
      raw = await resp.json();
    } catch (e) {
      return json({ error: 'upstream error', detail: String(e) }, 502);
    }
    return json(normalize(raw), 200);
  },
};
