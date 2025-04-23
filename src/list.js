export default function list(element) {
   
let newlist = element.map(x => `<li>${x.headline.main}</li>`)
    
    let innerHTML = "<ul>" + newlist  +"</ul>"
    
   return innerHTML
}