import"./style-D3RmUvib.js";import{l as c,h as a,a as r,s as o,b as n}from"./feather_settings-a0XBtEed.js";import{S as h,G as m}from"./localstorage-BRu_qPBc.js";function u(){return` 
<h1><img src="${c}">Newsify</h1>
<ul>
<hr>
${s("SPORTS")}
${s("ARTS")}
${s("TRAVEL")}
${s("HEALTH")}
${s("BUSINESS")}
</ul>
<button class="darkmode">Toggle dark mode</button>
<nav class="menu">
    <ul>
     <li><a href="../home/index.html" class="home"><img src="${a}"><p>Home</p></a></li>
           <li><a href="../archive/index.html" class="archive"><img src="${r}"><p>Archive</p></a></li>
           <li><a href="../star/index.html" class="star"><img src="${o}"><p>Popular</p></a></li>
           <li><a href="../settings/index.html" class="setting"><img src="${n}"><p>Settings</p></a></li>
    </ul>
  </nav>
`}function s(e){return`<li>${e} ${d(e)}</li>
          <hr>`}document.querySelector("#app").innerHTML=u();let l=document.querySelectorAll(".switch");l.forEach(e=>e.addEventListener("change",function(){let t=e.querySelector("#switchbox");console.log("addEventListener"+t.checked),h(e.classList[1],t.checked)}));l.forEach(e=>{let t=e.querySelector("#switchbox");console.log(e);let i=m(e.classList[1]);console.log(i),i===null||i==="true"?t.setAttribute("checked",""):t.removeAttribute("checked")});function d(e){return`
            <label class="switch ${e}" id="switch" >
            <input  type="checkbox" id="switchbox" checked>
                <span class="slider round"></span>
            </label>`}
