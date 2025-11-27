import{a as u,S as f,i as m}from"./assets/vendor-BTKY1Grq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();u.defaults.baseURL="https://pixabay.com/api/";function g(e){return u.get("",{params:{key:"53365397-01e23b351b4d3bf3f9d6eb3f7",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:r})=>r)}const p=document.querySelector(".gallery"),d=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(e){L();const r=e.map(b).join("");p.insertAdjacentHTML("afterbegin",r),y.refresh()}function b(e){return`<li class="gallery-item">
                <a class="gallery-link" href="${e.largeImageURL}">
                    <img
                        class="gallery-image"
                        src="${e.webformatURL}"
                        alt="${e.tags}"
                    />
                </a>
                <ul class="statistic-block">
                    <li>
                        <p>Likes</p><span>${e.likes}</span>
                    </li>
                    <li>
                        <p>Views</p><span>${e.views}</span>
                    </li>
                    <li>
                        <p>Comments </p><span>${e.comments}</span>
                    </li>
                    <li>
                        <p>Downloads</p><span>${e.downloads}</span>
                    </li>
                </ul>
            </li>`}function L(){p.innerHTML=""}function w(){d.classList.remove("hidden")}function x(){d.classList.add("hidden")}const n=document.querySelector(".form"),l={user:{title:"WARNING!",message:"You didn’t enter the image name!"},api:{title:"Sorry,",message:"there are no images matching your search query. Please try again!"}};function c({title:e,message:r}){m.show({title:e,titleColor:"red",message:r,position:"topCenter",messageColor:"black",color:"red"})}n.addEventListener("submit",e=>{e.preventDefault();const r=new FormData(n);if(r.get("search-text").trim()==="")return c(l.user);w(),g(r.get("search-text").trim()).then(a=>{if(a.total===0)return c(l.api);h(a.hits)}).catch(a=>{console.log(a.message)}).finally(()=>x()),e.target.reset()});
//# sourceMappingURL=index.js.map
