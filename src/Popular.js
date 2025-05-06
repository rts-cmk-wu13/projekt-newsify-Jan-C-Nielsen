import './style.scss'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import popular_list from './popular_list'
import logo from '../assets/newsify_logo_1.png'
import home from '../assets/iconoir_home.png'
import archive from '../assets/feather_bookmark.png'
import star from '../assets/feather_star.png'
import setting from '../assets/feather_settings.png'


let apikey = `MibrQ7dgs0zI5KvQbJWplGJOvpjveLSh`
let apiUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json`


async function getArticles(apiUrl, subject = "", options = "") {
    if (apiUrl === "") return null;
    let url="";
   // if(url.search("mostpopular"))
     url = apiUrl +  `?api-key=` + apikey
    console.log(url)
    let x = await fetch(url, { cache: 'force-cache' });
    let articles = await x.json();
    console.log(articles)
    return articles
  }

  
  async function innerHTML(){
    return `
  <h1><img src="${logo}">Newsify</h1>
  
  ${await makeDetail("")}
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

async function makeDetail(subject) {
  return popular_list((await getArticles(apiUrl)).results)
}


document.querySelector('#app').innerHTML = await innerHTML()


  /*
async function eventFunction() {

  
    document.querySelector(".home").addEventListener("click", async () => {
      apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=`;
      document.querySelector('#app').innerHTML = await innerHTML()
    })
    document.querySelector(".archive").addEventListener("click", async () => {
      apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=`;
      document.querySelector('#app').innerHTML = await innerHTML()
    })
    document.querySelector(".star").addEventListener("click", async () => {
      apiUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=MibrQ7dgs0zI5KvQbJWplGJOvpjveLSh`;
      document.querySelector('#app').innerHTML = await innerHTML()
    })
    document.querySelector(".setting").addEventListener("click", async () => {
      apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=`;
      document.querySelector('#app').innerHTML = await innerHTML()
    })
  }*/
  