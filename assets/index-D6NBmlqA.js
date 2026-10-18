(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const m=["新品功能拆解","用户洞察","文案编导","分镜策划","拍摄及后期把控"],g=["项目统筹","文案编导","分镜策划","跟拍执导","成片把控"],b=["天猫","抖音"],E=[{id:"insta360-explorer-backpack",title:"Insta360 全能探索背包",format:"long",tags:["新品宣发","功能展示"],cover:"./assets/covers/insta360-explorer-backpack.webp",playbackType:"video",playbackUrl:"./assets/videos/insta360-explorer-backpack.mp4",platform:"Insta360",channels:["官方 YouTube","Insta360 App","品牌官网"],responsibilities:m,sortOrder:10},{id:"ace-pro-2-street-kit",title:"Ace Pro 2 玩拍套餐使用全攻略",format:"long",tags:["产品教学","使用指南"],cover:"./assets/covers/ace-pro-2-street-kit.webp",playbackType:"external",playbackUrl:"https://www.insta360.com/cn/support/supportdetail/video/hZGMoMakyA?article_id=2706&title=Insta360%20Ace%20Pro%202%20%E7%8E%A9%E6%8B%8D%E5%A5%97%E9%A4%90",platform:"Insta360 官网",channels:["国内官方媒体","Insta360 App","品牌官网"],responsibilities:m,sortOrder:20},{id:"luna-ultra-guide",title:"Luna Ultra 产品教学",format:"long",tags:["产品教学","功能讲解"],cover:"./assets/covers/luna-ultra-guide.webp",playbackType:"external",playbackUrl:"https://www.insta360.com/cn/support/supportdetail?name=luna_ultra",platform:"Insta360 官网",channels:["国内官方媒体","Insta360 App","品牌官网"],responsibilities:m,sortOrder:30},{id:"bilibili-tutorial-two",title:"红魔 OS 6.0 新功能教程",format:"long",tags:["官方教程","内容策划"],cover:"./assets/covers/bilibili-tutorial-two.webp",playbackType:"external",playbackUrl:"https://www.bilibili.com/video/BV1zK411i7jb/",platform:"哔哩哔哩",channels:["B 站官方账号"],responsibilities:["项目统筹","文案编导","分镜策划","成片把控"],sortOrder:50},{id:"baseus-picogo-launch",title:"PicoGo 新品上市宣发",format:"short",tags:["新品上市","品牌短片"],cover:"./assets/covers/baseus-picogo-launch.webp",playbackType:"video",playbackUrl:"./assets/videos/baseus-picogo-launch.mp4",platform:"商业短视频",channels:b,responsibilities:g,sortOrder:10},{id:"product-selling-points",title:"产品卖点宣传",format:"short",tags:["卖点宣传","信息流"],cover:"./assets/covers/product-selling-points.webp",playbackType:"video",playbackUrl:"./assets/videos/product-selling-points.mp4",platform:"商业短视频",channels:b,responsibilities:g,sortOrder:20},{id:"ugc-feature-demo",title:"仿素人功能展示",format:"short",tags:["功能展示","口播短片"],cover:"./assets/covers/ugc-feature-demo.webp",playbackType:"video",playbackUrl:"./assets/videos/ugc-feature-demo.mp4",platform:"商业短视频",channels:b,responsibilities:g,sortOrder:30},{id:"gift-box-unboxing",title:"品牌礼盒开箱展示",format:"short",tags:["产品开箱","视觉展示"],cover:"./assets/covers/gift-box-unboxing.webp",playbackType:"video",playbackUrl:"./assets/videos/gift-box-unboxing.mp4",platform:"商业短视频",channels:b,responsibilities:g,sortOrder:40}];function I(e){const a=(i,t)=>i.sortOrder-t.sortOrder;return{long:e.filter(i=>i.format==="long").sort(a),short:e.filter(i=>i.format==="short").sort(a)}}const R={phase:"closed",activeWorkId:null};function _(e,a,i){if(!e.activeWorkId||a.length===0)return e;const t=a.indexOf(e.activeWorkId);if(t<0)return e;const r=(t+i+a.length)%a.length;return{phase:"detail",activeWorkId:a[r]??e.activeWorkId}}function T(e,a,i){switch(a.type){case"OPEN_FOLDER":return{phase:"gallery",activeWorkId:null};case"OPEN_WORK":return i.includes(a.id)?{phase:"detail",activeWorkId:a.id}:e;case"CLOSE_WORK":return e.activeWorkId?{phase:"gallery",activeWorkId:null}:e;case"NEXT_WORK":return _(e,i,1);case"PREVIOUS_WORK":return _(e,i,-1)}}const W=[{id:"product",title:"产品宣传类短视频",tags:["红魔","产品宣发"],description:"围绕新品、主推品卖点和当下热点创作官号社媒短视频",images:[{file:"product-campaigns",caption:"产品宣传短视频 · 作品截图"}]},{id:"story",title:"情感剧情类账号",tags:["游戏 + 真人","剧情内容"],description:"运营1000w+粉丝博主与500w+量级粉丝博主账号内容。涵盖情侣剧情、变装、商单",images:[{file:"shushu",caption:"疏疏 · 抖音粉丝 1500W+"},{file:"nanfeng",caption:"楠枫 · 抖音粉丝 1300W+"},{file:"linluoluo",caption:"林洛洛 · 抖音粉丝 640W+"},{file:"beichen",caption:"大帅哥北辰 · 抖音粉丝 670W+"}]},{id:"gaming",title:"王者荣耀官方内容",tags:["游戏宣发","官方栏目"],description:"覆盖官方账号新模式创意玩法、新版本爆料推广，以及游戏官方与 KOL 李九合作的官网精品栏目。",images:[{file:"awakening-battle",caption:"觉醒之战 · 官方微博发布截图"},{file:"anniversary-cover",caption:"周年庆峡谷调整 · 内容封面"},{file:"anniversary-page",caption:"周年庆峡谷调整 · 官网发布截图"},{file:"li-jiu-series",caption:"王者克制论 · 官网栏目截图"}]}];function L(e){return e.playbackType==="video"?{kind:"video",src:e.playbackUrl,externalUrl:null}:e.playbackType==="embed"?{kind:"embed",src:e.playbackUrl,externalUrl:null}:{kind:"external",src:null,externalUrl:e.playbackUrl}}const A=[{id:"bilibili-tutorial-two"},{id:"ace-pro-2-street-kit",cover:"./assets/covers/ace-pro-2-street-kit-folder.webp"},{id:"baseus-picogo-launch"},{id:"insta360-explorer-backpack"}];function n(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function v(e){return e.map(a=>`<span class="work-card__tag">${n(a)}</span>`).join("")}function S(e,a,i){const t=i?`view-transition-name: work-${n(e.id)};`:"";return`
    <article
      class="work-card work-card--${e.format}"
      style="--card-index: ${a}; ${t}"
    >
      <button
        class="work-card__button"
        type="button"
        data-action="open-work"
        data-work-id="${n(e.id)}"
        aria-label="查看作品：${n(e.title)}"
      >
        <span class="work-card__media">
          <img
            src="${n(e.cover)}"
            alt="${n(e.title)}视频封面"
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
          <span class="work-card__title">${n(e.title)}</span>
          <span class="work-card__tags">${v(e.tags)}</span>
        </span>
      </button>
    </article>
  `}function w(e,a,i,t,r,s){return`
    <section class="works-section works-section--${e}" data-work-section="${e}">
      <header class="works-section__header">
        <p class="works-section__eyebrow" lang="en">${a}</p>
        <h2>${i}</h2>
        <span class="works-section__count" aria-hidden="true">${n(t)}</span>
      </header>
      <div class="works-grid works-grid--${e}">
        ${r.map((l,u)=>S(l,u,s)).join("")}
      </div>
    </section>
  `}function P(e,a){const i=new Map(e.map(t=>[t.id,t]));return A.map((t,r)=>{const s=i.get(t.id);return s?`
        <span
          class="folder-preview folder-preview--${r+1}"
          data-preview-work-id="${n(s.id)}"
          style="--preview-index: ${r}; ${a?`view-transition-name: work-${n(s.id)};`:""}"
          aria-hidden="true"
        >
          <img src="${n(t.cover??s.cover)}" alt="" />
        </span>
      `:""}).join("")}function M(e){const a=L(e);return a.kind==="video"?`
      <video
        class="detail-media__video"
        controls
        playsinline
        preload="metadata"
        poster="${n(e.cover)}"
      >
        <source src="${n(a.src)}" type="video/mp4" />
        当前浏览器无法播放该视频。
      </video>
    `:a.kind==="embed"?`
      <iframe
        class="detail-media__embed"
        src="${n(a.src)}"
        title="${n(e.title)}播放器"
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    `:`
    <div class="detail-media__external">
      <img src="${n(e.cover)}" alt="${n(e.title)}视频封面" />
      <div class="detail-media__external-copy">
        <span>${n(e.platform)}</span>
        <a
          class="detail-media__external-link"
          href="${n(a.externalUrl)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          前往原网站播放
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  `}function $(e){return e.map(a=>`<li>${n(a)}</li>`).join("")}function U(e){return`
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
        aria-labelledby="work-title-${n(e.id)}"
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
          <div class="detail-media detail-media--${e.format}">${M(e)}</div>

          <aside class="work-detail__info">
            <div>
              <p class="work-detail__platform" lang="en">${n(e.platform)}</p>
              <h2 id="work-title-${n(e.id)}">${n(e.title)}</h2>
              <div class="work-detail__tags">${v(e.tags)}</div>
            </div>

            <dl class="work-detail__meta">
              <div>
                <dt>发布渠道</dt>
                <dd><ul>${$(e.channels)}</ul></dd>
              </div>
              <div>
                <dt>个人职责</dt>
                <dd><ul>${$(e.responsibilities)}</ul></dd>
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
  `}function D(){return`
    <section class="works-section works-section--experience" data-work-section="experience" aria-labelledby="experience-title">
      <header class="works-section__header">
        <p class="works-section__eyebrow" lang="en">OTHER EXPERIENCE</p>
        <h2 id="experience-title">其他工作经历</h2>
        <span class="works-section__count" aria-hidden="true">03</span>
      </header>
      <div class="experience-list">
        ${W.map((e,a)=>`
          <article class="experience-project experience-project--${e.id}">
            <div class="experience-project__intro">
              <p class="experience-project__index" lang="en">PROJECT / 0${a+1}</p>
              <h3>${n(e.title)}</h3>
              <div class="work-card__tags">${v(e.tags)}</div>
              <p class="experience-project__description">${n(e.description)}</p>
              ${e.id==="story"?'<p class="experience-project__note">粉丝数及截图为原作品集记录的历史数据，非实时数据。</p>':""}
            </div>
            <div class="experience-images experience-images--${e.id}">
              ${e.images.map(i=>i.file==="anniversary-page"?"":i.file==="anniversary-cover"?`
                <figure class="experience-image experience-image--anniversary-pair">
                  <div class="experience-anniversary-pair">
                    ${e.images.filter(t=>t.file.startsWith("anniversary-")).map(t=>`
                      <a href="./assets/experience/${t.file}.webp" target="_blank" rel="noopener noreferrer" aria-label="查看大图：${n(t.caption)}（新窗口）">
                        <img src="./assets/experience/${t.file}.webp" alt="${n(t.caption)}" loading="lazy" decoding="async" />
                      </a>
                    `).join("")}
                  </div>
                  <figcaption>周年庆峡谷调整 · 官网发布截图<span aria-hidden="true"> ↗</span></figcaption>
                </figure>
              `:`
                <figure class="experience-image experience-image--${i.file}">
                  <a href="./assets/experience/${i.file}.webp" target="_blank" rel="noopener noreferrer" aria-label="查看大图：${n(i.caption)}（新窗口）">
                    <img src="./assets/experience/${i.file}.webp" alt="${n(i.caption)}" loading="lazy" decoding="async" />
                  </a>
                  <figcaption>${n(i.caption)}<span aria-hidden="true"> ↗</span></figcaption>
                </figure>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `}function K(e,a,i){const t=I(i),r=a.phase==="closed",s=i.find(l=>l.id===a.activeWorkId);e.innerHTML=`
    <main class="portfolio-page is-${a.phase}" data-portfolio-phase="${a.phase}">
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
          aria-expanded="${String(!r)}"
        >
          <span class="folder-stack__previews">${P(i,r)}</span>
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
        ${r?'aria-hidden="true" inert':""}
        ${a.phase==="detail"?"inert":""}
      >
        ${w("long","LONG-FORM","长视频作品","01",t.long,!r)}
        ${w("short","SHORT-FORM","短视频作品","02",t.short,!r)}
        ${D()}
      </div>

      <footer class="site-footer">
        <span lang="en">VIDEO ARCHIVE</span>
        <span>视频编导 · 内容策划</span>
      </footer>

      ${a.phase==="detail"&&s?U(s):""}
    </main>
  `}function O(e){e.querySelectorAll("video, audio").forEach(a=>{try{a.pause()}catch{}})}function C(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&e.isContentEditable}function N(e){return[...e.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), video[controls], audio[controls], [tabindex]:not([tabindex="-1"])')].filter(a=>a.getAttribute("aria-hidden")!=="true")}function V(e,a){const i=a.map(o=>o.id);let t=R,r=null;const s=(o,c=null)=>{if(O(e),t=o,K(e,t,a),document.body.classList.toggle("detail-open",t.phase==="detail"),c==="detail"&&queueMicrotask(()=>{e.querySelector(".icon-button--close")?.focus()}),c==="card"&&r){const d=r;queueMicrotask(()=>{e.querySelector(`[data-work-id="${d}"]`)?.focus()})}},l=(o,c=null)=>{const d=T(t,o,i);if(d!==t){if(o.type==="OPEN_FOLDER"&&typeof document.startViewTransition=="function"){document.startViewTransition(()=>s(d,c));return}s(d,c)}},u=o=>{if(!(o.target instanceof Element))return;const c=o.target.closest("[data-action]");if(!c||!e.contains(c))return;const d=c.dataset.action;if(d==="open-folder"){l({type:"OPEN_FOLDER"}),queueMicrotask(()=>{const p=e.querySelector("#portfolio-gallery");p&&typeof p.scrollIntoView=="function"&&p.scrollIntoView({behavior:"smooth",block:"start"})});return}if(d==="open-work"){const p=c.dataset.workId;p&&(r=p,l({type:"OPEN_WORK",id:p},"detail"));return}if(d==="close-work"){l({type:"CLOSE_WORK"},"card");return}if(d==="previous-work"){l({type:"PREVIOUS_WORK"},"detail");return}d==="next-work"&&l({type:"NEXT_WORK"},"detail")},h=o=>{if(!(t.phase!=="detail"||C(o.target))){if(o.key==="Tab"){const c=e.querySelector('[role="dialog"]'),d=c?N(c):[],p=d[0],y=d.at(-1);if(!c||!p||!y)return;const f=document.activeElement,k=!f||!c.contains(f);if(o.shiftKey&&(f===p||k)){o.preventDefault(),y.focus();return}if(!o.shiftKey&&(f===y||k)){o.preventDefault(),p.focus();return}}if(o.key==="Escape"){o.preventDefault(),l({type:"CLOSE_WORK"},"card");return}if(o.key==="ArrowLeft"){o.preventDefault(),l({type:"PREVIOUS_WORK"},"detail");return}o.key==="ArrowRight"&&(o.preventDefault(),l({type:"NEXT_WORK"},"detail"))}};return e.addEventListener("click",u),document.addEventListener("keydown",h),s(t),{destroy(){O(e),e.removeEventListener("click",u),document.removeEventListener("keydown",h),document.body.classList.remove("detail-open")}}}const x=document.querySelector("#app");if(!x)throw new Error("Missing #app mount point");V(x,E);

