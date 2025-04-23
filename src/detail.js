import list from './list'

export default function detail(element, subject) {
   
      return `<details><summary>`+ subject + `</summary><p>${list(element)}</p></details>`

  }
  