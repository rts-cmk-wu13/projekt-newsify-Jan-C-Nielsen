export default function list(element) {
   
let newlist;

newlist = element.map(x => `<li><a href="${x.web_url}"><img src="${x.multimedia.thumbnail.url}" loading="lazy">
    <div><h4>${x.headline.main}</h4><p>${x.abstract.substring(0,75) + "..."}</p></a></div>
    </li><hr>`)
    
    let innerHTML = "<ul>" + newlist  +"</ul>"

   return innerHTML
}