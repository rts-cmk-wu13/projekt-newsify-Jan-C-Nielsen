import './style.scss'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
 import detail from './detail'
 import logo from '../assets/newsify_logo_1.png'

let apikey = `MibrQ7dgs0zI5KvQbJWplGJOvpjveLSh`
let apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=`

async function getArticles(apiUrl, subject, options="") {
 
  let url = apiUrl + `section.name%3A%22${subject}%22%20&` + `&api-key=` + apikey
  console.log(url)
  let x = await fetch(url, {cache: 'force-cache'});
  let articles = await x.json();
  console.log(articles)
  return articles
}


document.querySelector('#app').innerHTML = `
<h1><img src="${logo}">Newsify</h1>
<form >
  <input type="text" id="fname" name="fname">
</form>
${await makeDetail("SPORTS")}
${await makeDetail("ARTS")}
${await makeDetail("TRAVEL")}
${await makeDetail("HEALTH")}
${await makeDetail("BUSINESS")}
`

async function makeDetail(subject) {
  return detail((await getArticles(apiUrl, subject)).response.docs, subject)
}
