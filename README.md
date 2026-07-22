# GlobalTrade — 环球贸易网站

高端国际 B2B 贸易公司官网，支持中英双语切换，深色主题 + 丰富动画交互。

---

## 快速预览

```bash
# Python（推荐）
python3 -m http.server 8000

# 浏览器打开
# http://localhost:8000
```

用任何静态文件服务器都可以（Nginx / Live Server / VS Code 插件）。

---

## 文件结构

```
GlobalTrade-site/
├── index.html    ← 主页面（版式/结构）  极少改
├── data.js       ← 数据（产品/公司等）  ★ 最常改
├── i18n.js       ← UI 文案              偶尔改
├── app.js        ← 渲染引擎 & 动画      极少改
├── style.css     ← 现在已内置到 index.html <style> 中
├── assets/
│   └── img/      ← 图片丢这里
└── README.md     ← 本文件
```

> 注意：`style.css` 已经合并到 `index.html` 的 `<style>` 标签里（CSS 变量在最顶部），所以实际只需要改 `index.html` 中的 CSS 部分。如果你更喜欢分离的文件结构，可以把它抽回 `style.css`。

---

## 改动优先级

| 频率 | 改什么 | 改哪里 |
|------|--------|--------|
| **★ 最常改** | 商品、分类、公司名、联系方式、统计数据 | `data.js` |
| 偶尔改 | 按钮/标签文字、提示文案 | `i18n.js` |
| 少改 | 配色、字号、间距、圆角 | `index.html` 内 `<style>` 的 `:root` 变量 |
| 极少改 | 版式、增删区块 | `index.html` HTML 部分 |
| 极少改 | 渲染逻辑、动画效果 | `app.js` |

---

## 图片怎么放

1. 把图片文件放进 `assets/img/` 目录
2. 在 `data.js` 里找到对应产品的 `image` 字段，填上路径：

```js
// 例如：
{ id:"p01", ..., image: "assets/img/cnc-machine.jpg" }
```

3. 刷新浏览器就能看到。

如果没有图片，页面会自动显示 emoji 占位图标。

---

## 修改配色

打开 `index.html`，找到 `<style>` 标签内的 `:root` 部分：

```css
:root {
  --c-primary: #C4956A;     /* 焦糖主色 */
  --c-primary-d: #8B5E3C;   /* 深咖色 */
  --c-accent: #6B3A2A;      /* 浓缩咖啡 */
  --c-bg: #0F0A07;          /* 极深咖啡底 */
  --c-bg-alt: #15100C;      /* 深咖交替 */
  --c-text: #FFF8F0;        /* 暖白文字 */
  /* ...更多变量... */
}
```

色系已设为**深咖 → 浅咖 → 焦糖**三层暖调渐变。

---

## 添加/修改产品分类

编辑 `data.js` 的 `categories` 数组：

```js
categories: [
  { id: "machinery", name_cn: "机械设备", name_en: "Machinery", icon: "⚙️" },
  // 按格式新增一行即可
]
```

产品也按同样格式加到 `products` 数组里，注意 `category` 字段要和分类的 `id` 对应。

---

## 中英双语

- **数据文案**：在 `data.js` 中每个字段都有 `_cn` 和 `_en` 两种后缀
- **UI 文案**：在 `i18n.js` 中维护
- 页面右上角有语言切换按钮

---

## 动画说明

- **滚动进度条**：页面顶部咖色渐变细线，实时反映阅读进度
- **多方向滚动入场**：元素从上方/左侧/右侧/缩放弹入（`.reveal-up`/`-left`/`-right`/`-scale`）
- **交错动画**：产品卡片、服务卡片、流程步骤逐帧弹出（`.reveal-stagger` + `.delay-N`）
- **视差滚动**：Hero 光环随滚动缓慢上移，关于我们图片微微浮动
- **自定义平滑滚动**：锚点导航使用 easeInOutCubic 缓动曲线，比原生 smooth 更有质感
- **数字跳动**：统计数字有 easeOutQuart 缓动计数动画
- **悬停效果**：卡片 hover 上浮 8-10px + 咖色发光边框 + 图标旋转放大
- **鼠标跟随**：桌面端自定义光标，hover 可交互元素时放大
- **Hero 装饰**：浮动粒子（随机大小/颜色/延迟） + 三层旋转光环
- **Logo 滚动**：合作伙伴无限轮播，hover 暂停
- **导航栏**：始终毛玻璃悬浮（不再等滚动才出现），滚动加深阴影
