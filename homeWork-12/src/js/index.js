'use strict';
// class Url{
//     constructor(){
//         this.
//     }
// }

const APP_KEY = '5b93d8100e62278344b8abff221294244b92ecbf5b0bd';
const refs = {
  form: document.querySelector ('.form'),
  input: document.querySelector ('.form__input'),
  list: document.querySelector ('.url__list'),
  temp: document.querySelector ('.url__templates').innerHTML.trim (),
  urlPreview: 'http://api.linkpreview.net',
  urlTest: /\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i,
  url: [],
  tempArr: [],
};
// if(getLocalStorageObjectItem('urlList')){
//   template(getLocalStorageObjectItem('urlList'))
// }


refs.form.addEventListener ('submit', hendlerSubmit);
refs.list.addEventListener ('click', handlerDeletList);

function handlerDeletList({target}) {
  if (target.nodeName !== 'BUTTON') return;
  let items = target.closest ('.url__items');
  let urlAddress = items.querySelector ('.url__address').innerHTML;
  deletUrl (urlAddress, items);
  setLocalStorageObjectItem('urlList', refs.tempArr)
}

function hendlerSubmit({target}) {
  let inp = refs.input.value;
  if (refs.url.includes (inp)) return alert ('такая закладка уже существует');
  if (!refs.urlTest.test (inp)) return alert ('не вверный ввод урла');
  refs.url.push (inp);
  template (refs.url);
}

function preview (user_url) {
  return fetch (
    `${refs.urlPreview}/?key=${APP_KEY}&q=${user_url}`
  ).then (response => {
    if (response.ok) return response.json ();
    throw new Error (`error:${response.statusText}`);
  });
}

function template (arr) {
  refs.tempArr = [];
  setLocalStorageObjectItem('urlList', arr)
  arr.map (n => {
    preview (n)
      .then (d => {
        refs.tempArr.push (d);
        return refs.tempArr;
      })
      .then (arr =>{ 
        
        return past(arr)})
      .catch (er => console.log (er));
  });
}

function past (arr) {
  let t = Handlebars.compile (refs.temp);
  let p = arr.reduce ((acc, el) => acc + t (el), '');
  refs.list.innerHTML = p;
}

function deletUrl (a, b) {
  new Promise ((resolve, reject) => {
   resolve( refs.url.map (r => {
      if (a == r || `{r}/`) refs.url.splice (refs.url.indexOf(r), 1);
    }))
    reject('error');
  })
    .then (r => b.innerHTML = '')
    .catch (error => console.log (error));
}

function setLocalStorageObjectItem(key, value) {
  if (value === undefined) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
function getLocalStorageObjectItem(key) {
  var json = localStorage.getItem(key);
  if (json === undefined) {
    return undefined;
  }
  return JSON.parse(json);
}
let localUrlList = Array.from(getLocalStorageObjectItem('urlList'))

function startDec(arr){
arr.map(r=> {
  refs.url.push(r.url)
})
template(refs.url)
}

startDec(localUrlList)