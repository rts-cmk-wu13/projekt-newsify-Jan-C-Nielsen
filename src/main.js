import './style.scss'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
//  import detail from './detail'
import onboarding1 from '../assets/Onboarding_1.png'
import onboarding2 from '../assets/Onboarding_2.png'
import onboarding3 from '../assets/Onboarding_3.png'
import frame1 from '../assets/Frame_1.png'
let apikey = `MibrQ7dgs0zI5KvQbJWplGJOvpjveLSh`
let apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=`


document.querySelector('#app').innerHTML = `
<img src="${onboarding1}">
<h1>Stay Connected,<br>
Everywhere, Anytime</h1>
<p class="onboarding">Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
<div><img src="${frame1}"></div>
<div class="buttonrow"><button>Skip</button><button class="continue">Continue</button></div>

`