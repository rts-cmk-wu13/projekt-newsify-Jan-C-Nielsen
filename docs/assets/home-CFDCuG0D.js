import"./style-D3RmUvib.js";import{l as m,h as u,a as h,s as d,b as f}from"./feather_settings-a0XBtEed.js";import{G as g}from"./localstorage-BRu_qPBc.js";function w(e){let t;return t=e.map(i=>`<li class="swipe_list"><a class="swipelist__item" href="${i.web_url}"><img src="${i.multimedia.thumbnail.url}" loading="lazy">
    <div><h4>${i.headline.main}</h4><p>${i.abstract.substring(0,75)+"..."}</p></a></div>
    </li><hr>`),`<ul>${t}</ul>`}function y(e,t){return`<details ><summary><img src="${m}">`+t+`</summary><p>${w(e)}</p></details>`}let v="MibrQ7dgs0zI5KvQbJWplGJOvpjveLSh",$="https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=";async function L(e,t,p=""){let i="";i.search("mostpopular")&&(i=e+`section.name%3A%22${t}%22%20&&api-key=`+v),console.log(i);let o=await(await fetch(i,{cache:"force-cache"})).json();return console.log(o),o}async function S(){return`
<h1><img src="${m}">Newsify</h1>
<form >
  <input type="text" id="fname" name="fname">
</form>
<div  class="swipelist">
${await a("SPORTS")}
${await a("ARTS")}
${await a("TRAVEL")}
${await a("HEALTH")}
${await a("BUSINESS")}
</div>
<nav class="menu">
    <ul>
      <li><a href="../home/index.html" class="home"><img src="${u}"><p>Home</p></a></li>
      <li><a href="../archive/index.html" class="archive"><img src="${h}"><p>Archive</p></a></li>
      <li><a href="../star/index.html" class="star"><img src="${d}"><p>Popular</p></a></li>
      <li><a href="../settings/index.html" class="setting"><img src="${f}"><p>Settings</p></a></li>
    </ul>
  </nav>
`}async function a(e){let t=g(e);return t===null||t==="true"?y((await L($,e)).response.docs,e):""}document.querySelector("#app").innerHTML=await S();const r=document.querySelector(".swipelist");let n,c,l,s=document.createElement("span");s.textContent="Save";s.style.position="absolute";s.style.top="20px";s.style.right="20px";s.style.backgroundColor="green";s.style.color="blue";r.addEventListener("pointerdown",T);r.addEventListener("pointermove",_);r.addEventListener("pointerup",b);function T(e){n=e.clientX,console.log(n)}function _(e){c=e.clientX,l=c-n,console.log(e),l<0&&(e.target.closest(".swipelist__item").style.left=l+"px")}function b(e){console.log("endTouch:"+e),e.target.closest(".swipelist__item").classList.add("animate"),e.target.closest(".swipelist__item").style.left="0px"}
