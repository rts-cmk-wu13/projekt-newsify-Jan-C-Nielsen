import list from './list'
import logo from '../assets/newsify_logo_1.png'

export default function detail(element, subject) {
      return `<details ><summary><img src="${logo}">` + subject + `</summary><p>${list(element)}</p></details>`
  }
  