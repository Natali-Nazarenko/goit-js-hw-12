import{a as g,S as k,i as h}from"./assets/vendor-BTKY1Grq.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();g.defaults.baseURL="https://pixabay.com/api/";async function y(e,o){return(await g.get("",{params:{key:"53365397-01e23b351b4d3bf3f9d6eb3f7",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const L=document.querySelector(".gallery"),p=document.querySelector(".btn-load"),b=document.querySelector(".loader"),C=new k(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function w(e){const o=e.map(M).join("");L.insertAdjacentHTML("beforeend",o),C.refresh()}function M(e){return`<li class="gallery-item">
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
            </li>`}function v(){b.classList.remove("hidden")}function S(){b.classList.add("hidden")}function D(){p.classList.remove("hidden")}function q(){p.classList.add("hidden")}function N(){L.innerHTML=""}const f=document.querySelector(".form"),d=15;let c,i,n;const a={user:{title:"WARNING!",message:"You didn’t enter the image name!"},api:{title:"Sorry,",message:"there are no images matching your search query. Please try again!"},endLoad:{title:"!",message:"We're sorry, but you've reached the end of search results."},network:{title:"WARNING!",message:""}};function l({title:e,message:o}){h.show({title:e,titleColor:"red",message:o,position:"topCenter",messageColor:"black",color:"red"})}function P({title:e,message:o}){h.show({title:e,titleColor:"blue",message:o,position:"topCenter",messageColor:"blue",color:"blue"})}function $(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height*2;window.scrollBy({top:r,left:0,behavior:"smooth"})}f.addEventListener("submit",async e=>{if(e.preventDefault(),q(),i=new FormData(f).get("search-text").trim(),i==="")return l(a.user);N(),v();try{n=1;const r=await y(i,n);if(c=Math.ceil(r.total/d),r.total===0||r.hits.length===0)return l(a.api);if(w(r.hits),r.hits.length===d&&n!==c)return D()}catch(r){console.log(r.message),a.network.message=r.message,l(a.network)}finally{S()}e.target.reset()});p.addEventListener("click",async()=>{v(),++n;try{const e=await y(i,n);c=Math.ceil(e.total/d),n===c&&(q(),P(a.endLoad)),w(e.hits),$()}catch(e){console.log(e.message),a.network.message=e.message,l(a.network)}finally{S()}});
//# sourceMappingURL=index.js.map
