
(function(){
  const F = window.FLIP;
  const TOTAL_PAGES = F.total, IMAGES = F.images, THUMBS = F.thumbs, TOC = F.toc || [];
  let flip=null, currentPage=0, lightboxZoom=1, lightboxPage=0;
  const $=(id)=>document.getElementById(id);
  function preload(){
    var list = IMAGES.concat(THUMBS);
    return Promise.all(list.map(function(s){
      return new Promise(function(res){
        var img = new Image();
        img.onload = function(){ res(); };
        img.onerror = function(){ res(); };
        img.src = s;
      });
    }));
  }
  function initFlip(){
    if(flip) return;
    flip=new St.PageFlip($('book'),{size:'stretch',width:580,height:820,minWidth:290,maxWidth:580,minHeight:410,maxHeight:820,drawShadow:true,flippingTime:900,usePortrait:true,autoSize:true,maxShadowOpacity:0.6,showCover:false,mobileScrollSupport:false,swipeDistance:30,clickEventForward:true,showPageCorners:true});
    flip.loadFromImages(IMAGES);
    flip.on('init',finishLoading); bindEvents(); buildThumbs(); setTimeout(finishLoading,4000);
  }
  let lh=false; function finishLoading(){ if(lh)return; lh=true; $('loader').classList.add('hidden'); }
  function buildThumbs(){ const rail=$('thumbRail'); rail.innerHTML=THUMBS.map((s,i)=>`<div class="thumb" data-page="${i}"><img src="${s}" alt="t" loading="lazy"></div>`).join(''); rail.querySelectorAll('.thumb').forEach(el=>el.addEventListener('click',()=>goToPage(+el.dataset.page))); }
  function updateUI(){ $('pageIndicator').textContent=`${currentPage+1} / ${TOTAL_PAGES}`; $('btnPrev').disabled=currentPage<=0; $('btnNext').disabled=currentPage>=TOTAL_PAGES-1; $('pageJump').max=TOTAL_PAGES; $('pageJump').value=currentPage+1; document.querySelectorAll('.thumb').forEach((el,i)=>el.classList.toggle('active',i===currentPage)); }
  function goToPage(p){ if(!flip||p<0||p>=TOTAL_PAGES)return; if(p===currentPage)return; flip.flip(p,'top'); }
  function handleJump(){ const n=parseInt($('pageJump').value,10); if(!isNaN(n)&&n>=1&&n<=TOTAL_PAGES)goToPage(n-1); }
  function openLightbox(p){ lightboxPage=p; lightboxZoom=1; $('lightboxImg').src=IMAGES[p]; $('lightboxTitle').textContent=`第 ${p+1} 页`; $('lightbox').classList.add('active'); applyZoom(); }
  function closeLightbox(){ $('lightbox').classList.remove('active'); }
  function applyZoom(){ $('lightboxImg').style.width=(lightboxZoom*100)+'vw'; $('zoomVal')&&($('zoomVal').textContent=Math.round(lightboxZoom*100)+'%'); }
  function setZoom(d){ lightboxZoom=Math.max(1,Math.min(4,lightboxZoom+d)); applyZoom(); }
  function bindEvents(){
    $('btnPrev').onclick=()=>flip&&flip.flipPrev(); $('btnNext').onclick=()=>flip&&flip.flipNext();
    $('btnZoom').onclick=()=>openLightbox(currentPage); $('btnFullscreen').onclick=()=>{const el=$('app'); if(!document.fullscreenElement)el.requestFullscreen&&el.requestFullscreen().catch(()=>{}); else document.exitFullscreen();};
    $('btnJump').onclick=handleJump; $('pageJump').addEventListener('keydown',e=>{if(e.key==='Enter')handleJump();});
    $('lbClose').onclick=closeLightbox; $('lbZoomIn').onclick=()=>setZoom(0.25); $('lbZoomOut').onclick=()=>setZoom(-0.25);
    $('lbPrev').onclick=()=>{if(lightboxPage>0)openLightbox(lightboxPage-1);}; $('lbNext').onclick=()=>{if(lightboxPage<TOTAL_PAGES-1)openLightbox(lightboxPage+1);};
    $('lightboxView').addEventListener('wheel',e=>{e.preventDefault();setZoom(e.deltaY>0?-0.15:0.15);},{passive:false});
    document.addEventListener('keydown',e=>{ if($('lightbox').classList.contains('active')){ if(e.key==='Escape')closeLightbox(); if(e.key==='ArrowLeft'&&lightboxPage>0)openLightbox(lightboxPage-1); if(e.key==='ArrowRight'&&lightboxPage<TOTAL_PAGES-1)openLightbox(lightboxPage+1);} else { if(e.key==='ArrowLeft')flip&&flip.flipPrev(); if(e.key==='ArrowRight')flip&&flip.flipNext(); } });
    flip.on('flip',e=>{currentPage=e.data;updateUI();});
  }
  preload().then(initFlip); setTimeout(initFlip,12000);
})();
