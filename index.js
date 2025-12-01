import{a as m,S as v,i as S}from"./assets/vendor-BTKY1Grq.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();m.defaults.baseURL="https://pixabay.com/api/";async function g(e,a){return await m.get("",{params:{key:"53365397-01e23b351b4d3bf3f9d6eb3f7",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:15}})}const h=document.querySelector(".gallery"),c=document.querySelector(".btn-load"),y=document.querySelector(".loader"),L=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(e){return e.map(D).join("")}function D(e){return`<li class="gallery-item">
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
            </li>`}function P(){y.classList.remove("hidden")}function $(){y.classList.add("hidden")}function x(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}const u=document.querySelector(".form"),d=15;let q,n,i=1;const p={user:{title:"WARNING!",message:"You didn’t enter the image name!"},api:{title:"Sorry,",message:"there are no images matching your search query. Please try again!"}};function f({title:e,message:a}){S.show({title:e,titleColor:"red",message:a,position:"topCenter",messageColor:"black",color:"red"})}u.addEventListener("submit",async e=>{if(e.preventDefault(),n=new FormData(u).get("search-text").trim(),n==="")return f(p.user);P(),w();try{const{data:o}=await g(n,i);if(q=Math.ceil(o.total/d),o.total===0||o.hits.length===0)return f(p.api);const s=b(o.hits);if(h.innerHTML=s,L.refresh(),o.hits.length===d)return x()}catch(o){console.log(o.message)}finally{$()}e.target.reset()});c.addEventListener("click",async()=>{++i,i===q&&w();const e=await g(n,i),a=b(e.data.hits);h.insertAdjacentHTML("beforeend",a),L.refresh()});
//# sourceMappingURL=index.js.map
