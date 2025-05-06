export default function popular_list(element) {

    let newlist;
    newlist = element.map(x => {
        if(x.media === undefined || x.media.length === 0) return
        `<li><a href="${x.url}">
        <div><h4>${x.title}</h4><p>${x.abstract.substring(0, 75) + "..."}</p></a></div>
        </li><hr>`

        return `<li><a href="${x.url}"><img src="${x.media[0]["media-metadata"][0].url}" loading="lazy">
        <div><h4>${x.title}</h4><p>${x.abstract.substring(0, 75) + "..."}</p></a></div>
        </li><hr>`
    })

    let innerHTML = "<ul>" + newlist + "</ul>"

    return innerHTML
}
