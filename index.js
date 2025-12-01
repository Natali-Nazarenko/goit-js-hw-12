import{a as g,S as q,i as v}from"./assets/vendor-BTKY1Grq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();g.defaults.baseURL="https://pixabay.com/api/";async function h(e,o){return await g.get("",{params:{key:"53365397-01e23b351b4d3bf3f9d6eb3f7",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})}const y=document.querySelector(".gallery"),u=document.querySelector(".btn-load"),L=document.querySelector(".loader"),b=new q(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function w(e){return e.map(S).join("")}function S(e){return`<li class="gallery-item">
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
            </li>`}function D(){L.classList.remove("hidden")}function P(){L.classList.add("hidden")}function $(){u.classList.remove("hidden")}function x(){u.classList.add("hidden")}const d=document.querySelector(".form"),p=15;let c,n,i=1;const f={user:{title:"WARNING!",message:"You didn’t enter the image name!"},api:{title:"Sorry,",message:"there are no images matching your search query. Please try again!"}};function m({title:e,message:o}){v.show({title:e,titleColor:"red",message:o,position:"topCenter",messageColor:"black",color:"red"})}d.addEventListener("submit",async e=>{if(e.preventDefault(),n=new FormData(d).get("search-text").trim(),n==="")return m(f.user);D();try{const{data:a}=await h(n,i);if(c=Math.ceil(a.total/p),console.log(c),a.total===0&&a.hits.length===0)return m(f.api);const s=w(a.hits);if(y.innerHTML=s,b.refresh(),a.hits.length>=p)return $()}catch(a){console.log(a.message)}finally{P()}e.target.reset()});u.addEventListener("click",async()=>{++i,i===c&&x();const e=await h(n,i),o=w(e.data.hits);y.insertAdjacentHTML("beforeend",o),b.refresh()});
//# sourceMappingURL=index.js.map
