import './style.scss'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
//  import detail from './detail'
import onboarding1 from '../assets/Onboarding_1.png'
import onboarding2 from '../assets/Onboarding_2.png'
import onboarding3 from '../assets/Onboarding_3.png'
import frame1 from '../assets/Frame_1.png'
import frame2 from '../assets/Frame_2.png'
import frame3 from '../assets/Frame_3.png'
import big_logo from '../assets/Big_newsify_logo.png'
import line from '../assets/Line.png'

let apikey = `MibrQ7dgs0zI5KvQbJWplGJOvpjveLSh`
let apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=`

let i = 0

let layout = [`
<img src="${onboarding1}">
<h1>Stay Connected,<br>
Everywhere, Anytime</h1>
<p class="onboarding">Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
<div><img src="${frame1}"></div>
<div class="buttonrow"><button class="skip">Skip</button><button class="continue">Continue</button></div>
`,
`<img src="${onboarding2}">
<h1>Become a Savvy<br>Global Citizen.</h1>
<p class="onboarding">Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!</p>
<div><img src="${frame2}"></div>
<div class="buttonrow"><button class="skip">Skip</button><button class="continue">Continue</button></div>`,
`<img src="${onboarding3}">
<h1>Enhance your News<br>
Journey Now!</h1>
<p class="onboarding">Be part of our dynamic community and contribute your insights and participate in enriching conversations.</p>
<div><img src="${frame3}"></div>
<div class="buttonrow"><button class="skip">Skip</button><button class="continue">Continue</button></div>`,
`<img src="${big_logo}">
<h1>Newsify</h1>
<p class="onboarding">Welcome! Let’s dive into your account!</p>
<button class="login continue">Continue with Facebook</button>
<button class="login continue">Continue with Google</button>
<div class="or"><img src="${line}"><span>or</span><img src="${line}"></div>
<button class="login continue">Sign in with password</button></div>
<p>Don’t have an account?  Sign up</p>
`
]

document.querySelector('#app').innerHTML = layout[i++]

let skip = document.querySelector(".skip")
if (skip) skip.addEventListener("click", () => window.close())
document.querySelectorAll(".continue").forEach(x => x.addEventListener("click", continueFunc))

function skipFunc() {
    window.close()
}

function continueFunc() {
    
    if (i < layout.length) {
        console.log(i)
        document.querySelector('#app').innerHTML = layout[i]
        let skip = document.querySelector(".skip")
        if (skip) skip.addEventListener("click", () => window.close())
        document.querySelectorAll(".continue").forEach(x => x.addEventListener("click", continueFunc))
        i++
    }
    else {
        window.location.href = "./home/index.html";
    }
}