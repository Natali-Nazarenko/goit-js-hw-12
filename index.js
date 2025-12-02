import{a as g,S as C,i as h}from"./assets/vendor-BTKY1Grq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&p(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function p(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();g.defaults.baseURL="https://pixabay.com/api/";async function y(e,o){return(await g.get("",{params:{key:"53365397-01e23b351b4d3bf3f9d6eb3f7",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const L=document.querySelector(".gallery"),d=document.querySelector(".btn-load"),b=document.querySelector(".loader"),D=new C(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function w(e){const o=e.map(M).join("");L.insertAdjacentHTML("beforeend",o),D.refresh()}function M(e){return`<li class="gallery-item">
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
            </li>`}function v(){b.classList.remove("hidden")}function S(){b.classList.add("hidden")}function N(){d.classList.remove("hidden")}function q(){d.classList.add("hidden")}function P(){L.innerHTML=""}const m=document.querySelector(".form"),f=15;let u,i,n;const a={user:{title:"WARNING!",message:"You didn’t enter the image name!"},api:{title:"Sorry,",message:"there are no images matching your search query. Please try again!"},endLoad:{title:"!",message:"We're sorry, but you've reached the end of search results."},network:{title:"WARNING!",message:""}};function l({title:e,message:o}){h.show({title:e,titleColor:"red",message:o,position:"topCenter",messageColor:"black",color:"red"})}function $({title:e,message:o}){h.show({title:e,titleColor:"blue",message:o,position:"topCenter",messageColor:"blue",color:"blue"})}function k(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:r,left:0,behavior:"smooth"})}m.addEventListener("submit",async e=>{if(e.preventDefault(),P(),v(),q(),i=new FormData(m).get("search-text").trim(),i==="")return l(a.user);try{n=1;const r=await y(i,n);if(u=Math.ceil(r.total/f),r.total===0||r.hits.length===0)return l(a.api);if(w(r.hits),k(),r.hits.length===f&&n!==u)return N()}catch(r){console.log(r.message),a.network.message=r.message,l(a.network)}finally{S()}e.target.reset()});d.addEventListener("click",async()=>{v(),++n,n===u&&($(a.endLoad),q());try{const e=await y(i,n);w(e.hits),k()}catch(e){console.log(e.message),a.network.message=e.message,l(a.network)}finally{S()}});
//# sourceMappingURL=index.js.map
