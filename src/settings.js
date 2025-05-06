import './style.scss'
import './slider.css'
// import makeSwitch from './switch'
import logo from '../assets/newsify_logo_1.png'
import home from '../assets/iconoir_home.png'
import archive from '../assets/feather_bookmark.png'
import star from '../assets/feather_star.png'
import setting from '../assets/feather_settings.png'
import { SaveLocalStorage, GetLocalStorage } from './localstorage.js'
//import darkmode from './darkmode.js'

function innerHTML() {
    return ` 
<h1><img src="${logo}">Newsify</h1>
<ul>
<hr>
${makeSetting("SPORTS")}
${makeSetting("ARTS")}
${makeSetting("TRAVEL")}
${makeSetting("HEALTH")}
${makeSetting("BUSINESS")}
</ul>
<button class="darkmode">Toggle dark mode</button>
<nav class="menu">
    <ul>
     <li><a href="../home/index.html" class="home"><img src="${home}"><p>Home</p></a></li>
           <li><a href="../archive/index.html" class="archive"><img src="${archive}"><p>Archive</p></a></li>
           <li><a href="../star/index.html" class="star"><img src="${star}"><p>Popular</p></a></li>
           <li><a href="../settings/index.html" class="setting"><img src="${setting}"><p>Settings</p></a></li>
    </ul>
  </nav>
`
}

function makeSetting(subject) {
    return `<li>${subject} ${makeSwitch(subject)}</li>
          <hr>`
}

document.querySelector('#app').innerHTML = innerHTML()

let switchElms = document.querySelectorAll(".switch");
switchElms.forEach(x => x.addEventListener("change",
    function () {
        let switchElm = x.querySelector("#switchbox")
        console.log("addEventListener" + switchElm.checked)
        SaveLocalStorage(x.classList[1], switchElm.checked);
    }))

switchElms.forEach(x => {
    let switchElm = x.querySelector("#switchbox")
    console.log(x)
    let visible = GetLocalStorage(x.classList[1])
    console.log(visible)
    if (visible === null || visible === "true")
        switchElm.setAttribute('checked', '')
    else
        switchElm.removeAttribute('checked')
})
 
//document.querySelector(".darkmode").addEventListener("click", darkmode)

function makeSwitch(subject) {
    let switchHTML = `
            <label class="switch ${subject}" id="switch" >
            <input  type="checkbox" id="switchbox" checked>
                <span class="slider round"></span>
            </label>`;

    return switchHTML;
}