import"./style-D3RmUvib.js";import{l as r,h as s,a as n,s as c,b as h}from"./feather_settings-a0XBtEed.js";function o(i){let a;return a=i.map(e=>{if(!(e.media===void 0||e.media.length===0))return`${e.url}${e.title}`,e.abstract.substring(0,75)+"",`<li><a href="${e.url}"><img src="${e.media[0]["media-metadata"][0].url}" loading="lazy">
        <div><h4>${e.title}</h4><p>${e.abstract.substring(0,75)+"..."}</p></a></div>
        </li><hr>`}),"<ul>"+a+"</ul>"}let p="MibrQ7dgs0zI5KvQbJWplGJOvpjveLSh",u="https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json";async function m(i,a="",l=""){let e="";e=i+"?api-key="+p,console.log(e);let t=await(await fetch(e,{cache:"force-cache"})).json();return console.log(t),t}async function d(){return`
  <h1><img src="${r}">Newsify</h1>
  
  ${await g()}
  <nav class="menu">
      <ul>
       <li><a href="../home/index.html" class="home"><img src="${s}"><p>Home</p></a></li>
             <li><a href="../archive/index.html" class="archive"><img src="${n}"><p>Archive</p></a></li>
             <li><a href="../star/index.html" class="star"><img src="${c}"><p>Popular</p></a></li>
             <li><a href="../settings/index.html" class="setting"><img src="${h}"><p>Settings</p></a></li>
      </ul>
    </nav>
  `}async function g(i){return o((await m(u)).results)}document.querySelector("#app").innerHTML=await d();
