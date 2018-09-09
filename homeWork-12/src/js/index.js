'use strict'
// class Url{
//     constructor(){
//         this.
//     }
// }

const APP_KEY = '5b93d8100e62278344b8abff221294244b92ecbf5b0bd'

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.form__input'),
  list: document.querySelector('.url__list'),
  urlPreview: 'http://api.linkpreview.net',

}
let tempArr = []
let url = []
const urlTest = /\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i

refs.form.addEventListener('submit', hendlerSubmit)
function hendlerSubmit ({ target }) {
  let inp = refs.input.value
  if (url.includes(inp)) return alert('такая закладка уже существует')
  if (!urlTest.test(inp)) return alert('не вверный ввод урла')
  url.push(inp)
  let red =  tamplete(url);
 past(red)
 console.log(tempArr);
}

function preview (user_url) {
  return fetch(
    `${refs.urlPreview}/?key=${APP_KEY}&q=${user_url}`
  ).then(response => {
    if (response.ok) return response.json()
    throw new Error(`error:${response.statusText}`)
  })
}

function tamplete (arr) {
    let tempArr = []
    arr.map(n => {
    preview(n).then(d => tempArr.push(d)).catch(er => console.log(er))
  })
  return tempArr
  
}

function past(arr){ 
    let p = arr.reduce((acc, el) => acc=el.title, '')
    // refs.list.innerHTML= red;
}

