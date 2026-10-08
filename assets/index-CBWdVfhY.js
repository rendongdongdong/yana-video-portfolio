(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();const h=["新品功能拆解","用户洞察","文案编导","分镜策划","拍摄及后期把控"],m=["项目统筹","文案编导","分镜策划","跟拍执导","成片把控"],y=["天猫","抖音"],R=[{id:"insta360-explorer-backpack",title:"Insta360 全能探索背包",format:"long",tags:["新品宣发","功能展示"],cover:"./assets/covers/insta360-explorer-backpack.webp",playbackType:"video",playbackUrl:"./assets/videos/insta360-explorer-backpack.mp4",platform:"Insta360",channels:["官方 YouTube","Insta360 App","品牌官网"],responsibilities:h,sortOrder:10},{id:"ace-pro-2-street-kit",title:"Ace Pro 2 玩拍套餐使用全攻略",format:"long",tags:["产品教学","使用指南"],cover:"./assets/covers/ace-pro-2-street-kit.webp",playbackType:"external",playbackUrl:"https://www.insta360.com/cn/support/supportdetail/video/hZGMoMakyA?article_id=2706&title=Insta360%20Ace%20Pro%202%20%E7%8E%A9%E6%8B%8D%E5%A5%97%E9%A4%90",platform:"Insta360 官网",channels:["国内官方媒体","Insta360 App","品牌官网"],responsibilities:h,sortOrder:20},{id:"luna-ultra-guide",title:"Luna Ultra 产品教学",format:"long",tags:["产品教学","功能讲解"],cover:"./assets/covers/luna-ultra-guide.webp",playbackType:"external",playbackUrl:"https://www.insta360.com/cn/support/supportdetail?name=luna_ultra",platform:"Insta360 官网",channels:["国内官方媒体","Insta360 App","品牌官网"],responsibilities:h,sortOrder:30},{id:"bilibili-tutorial-two",title:"红魔 OS 6.0 新功能教程",format:"long",tags:["官方教程","内容策划"],cover:"./assets/covers/bilibili-tutorial-two.webp",playbackType:"external",playbackUrl:"https://www.bilibili.com/video/BV1zK411i7jb/",platform:"哔哩哔哩",channels:["B 站官方账号"],responsibilities:["项目统筹","文案编导","分镜策划","成片把控"],sortOrder:50},{id:"baseus-picogo-launch",title:"PicoGo 新品上市宣发",format:"short",tags:["新品上市","品牌短片"],cover:"./assets/covers/baseus-picogo-launch.webp",playbackType:"video",playbackUrl:"./assets/videos/baseus-picogo-launch.mp4",platform:"商业短视频",channels:y,responsibilities:m,sortOrder:10},{id:"product-selling-points",title:"产品卖点宣传",format:"short",tags:["卖点宣传","信息流"],cover:"./assets/covers/product-selling-points.webp",playbackType:"video",playbackUrl:"./assets/videos/product-selling-points.mp4",platform:"商业短视频",channels:y,responsibilities:m,sortOrder:20},{id:"ugc-feature-demo",title:"仿素人功能展示",format:"short",tags:["功能展示","口播短片"],cover:"./assets/covers/ugc-feature-demo.webp",playbackType:"video",playbackUrl:"./assets/videos/ugc-feature-demo.mp4",platform:"商业短视频",channels:y,responsibilities:m,sortOrder:30},{id:"gift-box-unboxing",title:"品牌礼盒开箱展示",format:"short",tags:["产品开箱","视觉展示"],cover:"./assets/covers/gift-box-unboxing.webp",playbackType:"video",playbackUrl:"./assets/videos/gift-box-unboxing.mp4",platform:"商业短视频",channels:y,responsibilities:m,sortOrder:40}];function I(e){const t=(i,a)=>i.sortOrder-a.sortOrder;return{long:e.filter(i=>i.format==="long").sort(t),short:e.filter(i=>i.format==="short").sort(t)}}function L(e){const t=e.querySelector("source[data-packed-src]"),i=t?.parentElement;if(!t||!i)return()=>{};const a=new AbortController;let n="";const r=document.createElement("button");r.className="video-load-status",r.type="button",r.setAttribute("aria-live","polite"),i.parentElement.append(r);const d=new URL(t.dataset.packedSrc,document.baseURI);async function p(){r.disabled=!0,r.textContent="视频加载中… 0%";try{const f=await fetch(d,{signal:a.signal});if(!f.ok)throw new Error("manifest");const b=await f.json(),o=[];for(const l of b){const c=await fetch(new URL(l,d),{signal:a.signal});if(!c.ok)throw new Error("video");o.push(await c.arrayBuffer()),r.textContent=`视频加载中… ${Math.round(o.length/b.length*100)}%`}if(a.signal.aborted)return;n=URL.createObjectURL(new Blob(o,{type:"video/mp4"})),i.src=n,i.load(),r.remove()}catch{if(a.signal.aborted)return;r.textContent="视频加载失败，点击重试",r.disabled=!1}}return r.addEventListener("click",p),p(),()=>{a.abort(),n&&URL.revokeObjectURL(n),r.remove()}}const T={phase:"closed",activeWorkId:null};function w(e,t,i){if(!e.activeWorkId||t.length===0)return e;const a=t.indexOf(e.activeWorkId);if(a<0)return e;const n=(a+i+t.length)%t.length;return{phase:"detail",activeWorkId:t[n]??e.activeWorkId}}function W(e,t,i){switch(t.type){case"OPEN_FOLDER":return{phase:"gallery",activeWorkId:null};case"OPEN_WORK":return i.includes(t.id)?{phase:"detail",activeWorkId:t.id}:e;case"CLOSE_WORK":return e.activeWorkId?{phase:"gallery",activeWorkId:null}:e;case"NEXT_WORK":return w(e,i,1);case"PREVIOUS_WORK":return w(e,i,-1)}}const U=[{id:"product",title:"产品宣传类短视频",tags:["红魔","产品宣发"],description:"围绕新品、主推品卖点和当下热点创作官号社媒短视频",images:[{file:"product-campaigns",caption:"产品宣传短视频 · 作品截图"}]},{id:"story",title:"情感剧情类账号",tags:["游戏 + 真人","剧情内容"],description:"运营1000w+粉丝博主与500w+量级粉丝博主账号内容。涵盖情侣剧情、变装、商单",images:[{file:"shushu",caption:"疏疏 · 抖音粉丝 1500W+"},{file:"nanfeng",caption:"楠枫 · 抖音粉丝 1300W+"},{file:"linluoluo",caption:"林洛洛 · 抖音粉丝 640W+"},{file:"beichen",caption:"大帅哥北辰 · 抖音粉丝 670W+"}]},{id:"gaming",title:"王者荣耀官方内容",tags:["游戏宣发","官方栏目"],description:"覆盖官方账号新模式创意玩法、新版本爆料推广，以及游戏官方与 KOL 李九合作的官网精品栏目。",images:[{file:"awakening-battle",caption:"觉醒之战 · 官方微博发布截图"},{file:"anniversary-cover",caption:"周年庆峡谷调整 · 内容封面"},{file:"anniversary-page",caption:"周年庆峡谷调整 · 官网发布截图"},{file:"li-jiu-series",caption:"王者克制论 · 官网栏目截图"}]}];function A(e){return e.playbackType==="video"?{kind:"video",src:e.playbackUrl,externalUrl:null}:e.playbackType==="embed"?{kind:"embed",src:e.playbackUrl,externalUrl:null}:{kind:"external",src:null,externalUrl:e.playbackUrl}}const S=[{id:"bilibili-tutorial-two"},{id:"ace-pro-2-street-kit",cover:"./assets/covers/ace-pro-2-street-kit-folder.webp"},{id:"baseus-picogo-launch"},{id:"insta360-explorer-backpack"}];function s(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function k(e){return e.map(t=>`<span class="work-card__tag">${s(t)}</span>`).join("")}function P(e,t,i){const a=i?`view-transition-name: work-${s(e.id)};`:"";return`
    <article
      class="work-card work-card--${e.format}"
      style="--card-index: ${t}; ${a}"
    >
      <button
        class="work-card__button"
        type="button"
        data-action="open-work"
        data-work-id="${s(e.id)}"
        aria-label="查看作品：${s(e.title)}"
      >
        <span class="work-card__media">
          <img
            src="${s(e.cover)}"
            alt="${s(e.title)}视频封面"
            loading="lazy"
            decoding="async"
          />
          <span class="work-card__play" aria-hidden="true">
            <svg viewBox="0 0 64 64" role="presentation">
              <circle cx="32" cy="32" r="30"></circle>
              <path d="M26 21.5 44 32 26 42.5Z"></path>
            </svg>
          </span>
        </span>
        <span class="work-card__copy">
          <span class="work-card__title">${s(e.title)}</span>
          <span class="work-card__tags">${k(e.tags)}</span>
        </span>
      </button>
    </article>
  `}function $(e,t,i,a,n,r){return`
    <section class="works-section works-section--${e}" data-work-section="${e}">
      <header class="works-section__header">
        <p class="works-section__eyebrow" lang="en">${t}</p>
        <h2>${i}</h2>
        <span class="works-section__count" aria-hidden="true">${s(a)}</span>
      </header>
      <div class="works-grid works-grid--${e}">
        ${n.map((d,p)=>P(d,p,r)).join("")}
      </div>
    </section>
  `}function M(e,t){const i=new Map(e.map(a=>[a.id,a]));return S.map((a,n)=>{const r=i.get(a.id);return r?`
        <span
          class="folder-preview folder-preview--${n+1}"
          data-preview-work-id="${s(r.id)}"
          style="--preview-index: ${n}; ${t?`view-transition-name: work-${s(r.id)};`:""}"
          aria-hidden="true"
        >
          <img src="${s(a.cover??r.cover)}" alt="" />
        </span>
      `:""}).join("")}function C(e){const t=A(e);return t.kind==="video"?`
      <video
        class="detail-media__video"
        controls
        playsinline
        preload="metadata"
        poster="${s(e.cover)}"
      >
        <source data-packed-src="${s(t.src.replace(/\.mp4$/,".parts/manifest.json"))}" type="video/mp4" />
        当前浏览器无法播放该视频。
      </video>
    `:t.kind==="embed"?`
      <iframe
        class="detail-media__embed"
        src="${s(t.src)}"
        title="${s(e.title)}播放器"
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    `:`
    <div class="detail-media__external">
      <img src="${s(e.cover)}" alt="${s(e.title)}视频封面" />
      <div class="detail-media__external-copy">
        <span>${s(e.platform)}</span>
        <a
          class="detail-media__external-link"
          href="${s(t.externalUrl)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          前往原网站播放
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  `}function x(e){return e.map(t=>`<li>${s(t)}</li>`).join("")}function D(e){return`
    <div class="detail-layer" data-detail-layer>
      <button
        class="detail-layer__scrim"
        type="button"
        data-action="close-work"
        aria-label="关闭作品详情"
        tabindex="-1"
      ></button>
      <section
        class="work-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-title-${s(e.id)}"
      >
        <header class="work-detail__topbar">
          <span class="work-detail__index" lang="en">${e.format==="long"?"LONG-FORM":"SHORT-FORM"}</span>
          <button
            class="icon-button icon-button--close"
            type="button"
            data-action="close-work"
            aria-label="关闭作品详情"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div class="work-detail__layout">
          <div class="detail-media detail-media--${e.format}">${C(e)}</div>

          <aside class="work-detail__info">
            <div>
              <p class="work-detail__platform" lang="en">${s(e.platform)}</p>
              <h2 id="work-title-${s(e.id)}">${s(e.title)}</h2>
              <div class="work-detail__tags">${k(e.tags)}</div>
            </div>

            <dl class="work-detail__meta">
              <div>
                <dt>发布渠道</dt>
                <dd><ul>${x(e.channels)}</ul></dd>
              </div>
              <div>
                <dt>个人职责</dt>
                <dd><ul>${x(e.responsibilities)}</ul></dd>
              </div>
            </dl>

            <nav class="work-detail__navigation" aria-label="作品切换">
              <button type="button" data-action="previous-work">
                <span aria-hidden="true">←</span> 上一个
              </button>
              <button type="button" data-action="next-work">
                下一个 <span aria-hidden="true">→</span>
              </button>
            </nav>
          </aside>
        </div>
      </section>
    </div>
  `}function K(){return`
    <section class="works-section works-section--experience" data-work-section="experience" aria-labelledby="experience-title">
      <header class="works-section__header">
        <p class="works-section__eyebrow" lang="en">OTHER EXPERIENCE</p>
        <h2 id="experience-title">其他工作经历</h2>
        <span class="works-section__count" aria-hidden="true">03</span>
      </header>
      <div class="experience-list">
        ${U.map((e,t)=>`
          <article class="experience-project experience-project--${e.id}">
            <div class="experience-project__intro">
              <p class="experience-project__index" lang="en">PROJECT / 0${t+1}</p>
              <h3>${s(e.title)}</h3>
              <div class="work-card__tags">${k(e.tags)}</div>
              <p class="experience-project__description">${s(e.description)}</p>
              ${e.id==="story"?'<p class="experience-project__note">粉丝数及截图为原作品集记录的历史数据，非实时数据。</p>':""}
            </div>
            <div class="experience-images experience-images--${e.id}">
              ${e.images.map(i=>i.file==="anniversary-page"?"":i.file==="anniversary-cover"?`
                <figure class="experience-image experience-image--anniversary-pair">
                  <div class="experience-anniversary-pair">
                    ${e.images.filter(a=>a.file.startsWith("anniversary-")).map(a=>`
                      <a href="./assets/experience/${a.file}.webp" target="_blank" rel="noopener noreferrer" aria-label="查看大图：${s(a.caption)}（新窗口）">
                        <img src="./assets/experience/${a.file}.webp" alt="${s(a.caption)}" loading="lazy" decoding="async" />
                      </a>
                    `).join("")}
                  </div>
                  <figcaption>周年庆峡谷调整 · 官网发布截图<span aria-hidden="true"> ↗</span></figcaption>
                </figure>
              `:`
                <figure class="experience-image experience-image--${i.file}">
                  <a href="./assets/experience/${i.file}.webp" target="_blank" rel="noopener noreferrer" aria-label="查看大图：${s(i.caption)}（新窗口）">
                    <img src="./assets/experience/${i.file}.webp" alt="${s(i.caption)}" loading="lazy" decoding="async" />
                  </a>
                  <figcaption>${s(i.caption)}<span aria-hidden="true"> ↗</span></figcaption>
                </figure>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `}function V(e,t,i){const a=I(i),n=t.phase==="closed",r=i.find(d=>d.id===t.activeWorkId);e.innerHTML=`
    <main class="portfolio-page is-${t.phase}" data-portfolio-phase="${t.phase}">
      <header class="site-mark" aria-label="作品集标识">
        <span class="site-mark__dot" aria-hidden="true"></span>
        <span lang="en">VIDEO PORTFOLIO</span>
      </header>

      <section class="folder-hero" aria-labelledby="archive-title">
        <p class="folder-hero__kicker">杨琰琰（Yana） 部分作品集</p>
        <h1 id="archive-title" lang="en">VIDEO<br />ARCHIVE</h1>

        <button
          class="folder-stack"
          type="button"
          data-action="open-folder"
          aria-label="打开视频作品集"
          aria-controls="portfolio-gallery"
          aria-expanded="${String(!n)}"
        >
          <span class="folder-stack__previews">${M(i,n)}</span>
          <span class="folder-stack__back" aria-hidden="true"></span>
          <span class="folder-stack__front" aria-hidden="true">
            <span class="folder-stack__label">
              <span class="folder-stack__label-small" lang="en">OPEN THE</span>
              <strong lang="en">VIDEO<br />ARCHIVE</strong>
            </span>
            <span class="folder-stack__arrow">↗</span>
          </span>
        </button>

        <p class="folder-hero__hint">点击文件夹，展开作品</p>
      </section>

      <div
        class="portfolio-gallery"
        id="portfolio-gallery"
        ${n?'aria-hidden="true" inert':""}
        ${t.phase==="detail"?"inert":""}
      >
        ${$("long","LONG-FORM","长视频作品","01",a.long,!n)}
        ${$("short","SHORT-FORM","短视频作品","02",a.short,!n)}
        ${K()}
      </div>

      <footer class="site-footer">
        <span lang="en">VIDEO ARCHIVE</span>
        <span>视频编导 · 内容策划</span>
      </footer>

      ${t.phase==="detail"&&r?D(r):""}
    </main>
  `}function O(e){e.querySelectorAll("video, audio").forEach(t=>{try{t.pause()}catch{}})}function N(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&e.isContentEditable}function F(e){return[...e.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], audio[controls], [tabindex]:not([tabindex="-1"])')].filter(t=>t.getAttribute("aria-hidden")!=="true")}function j(e,t){const i=t.map(o=>o.id);let a=T,n=()=>{},r=null;const d=(o,l=null)=>{if(n(),O(e),a=o,V(e,a,t),n=L(e),document.body.classList.toggle("detail-open",a.phase==="detail"),l==="detail"&&queueMicrotask(()=>{e.querySelector(".icon-button--close")?.focus()}),l==="card"&&r){const c=r;queueMicrotask(()=>{e.querySelector(`[data-work-id="${c}"]`)?.focus()})}},p=(o,l=null)=>{const c=W(a,o,i);if(c!==a){if(o.type==="OPEN_FOLDER"&&typeof document.startViewTransition=="function"){document.startViewTransition(()=>d(c,l));return}d(c,l)}},f=o=>{if(!(o.target instanceof Element))return;const l=o.target.closest("[data-action]");if(!l||!e.contains(l))return;const c=l.dataset.action;if(c==="open-folder"){p({type:"OPEN_FOLDER"}),queueMicrotask(()=>{const u=e.querySelector("#portfolio-gallery");u&&typeof u.scrollIntoView=="function"&&u.scrollIntoView({behavior:"smooth",block:"start"})});return}if(c==="open-work"){const u=l.dataset.workId;u&&(r=u,p({type:"OPEN_WORK",id:u},"detail"));return}if(c==="close-work"){p({type:"CLOSE_WORK"},"card");return}if(c==="previous-work"){p({type:"PREVIOUS_WORK"},"detail");return}c==="next-work"&&p({type:"NEXT_WORK"},"detail")},b=o=>{if(!(a.phase!=="detail"||N(o.target))){if(o.key==="Tab"){const l=e.querySelector('[role="dialog"]'),c=l?F(l):[],u=c[0],v=c.at(-1);if(!l||!u||!v)return;const g=document.activeElement,_=!g||!l.contains(g);if(o.shiftKey&&(g===u||_)){o.preventDefault(),v.focus();return}if(!o.shiftKey&&(g===v||_)){o.preventDefault(),u.focus();return}}if(o.key==="Escape"){o.preventDefault(),p({type:"CLOSE_WORK"},"card");return}if(o.key==="ArrowLeft"){o.preventDefault(),p({type:"PREVIOUS_WORK"},"detail");return}o.key==="ArrowRight"&&(o.preventDefault(),p({type:"NEXT_WORK"},"detail"))}};return e.addEventListener("click",f),document.addEventListener("keydown",b),d(a),{destroy(){n(),O(e),e.removeEventListener("click",f),document.removeEventListener("keydown",b),document.body.classList.remove("detail-open")}}}const E=document.querySelector("#app");if(!E)throw new Error("Missing #app mount point");j(E,R);
