'use strict';
'use strict';
// class Url{
//     constructor(){
//         this.
//     }
// }

var APP_KEY = '5b93d8100e62278344b8abff221294244b92ecbf5b0bd';
var refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.form__input'),
  list: document.querySelector('.url__list'),
  temp: document.querySelector('.url__templates').innerHTML.trim(),
  urlPreview: 'http://api.linkpreview.net',
  urlTest: /\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i,
  url: [],
  tempArr: []
};
// if(getLocalStorageObjectItem('urlList')){
//   template(getLocalStorageObjectItem('urlList'))
// }


refs.form.addEventListener('submit', hendlerSubmit);
refs.list.addEventListener('click', handlerDeletList);

function handlerDeletList(_ref) {
  var target = _ref.target;

  if (target.nodeName !== 'BUTTON') return;
  var items = target.closest('.url__items');
  var urlAddress = items.querySelector('.url__address').innerHTML;
  deletUrl(urlAddress, items);
  setLocalStorageObjectItem('urlList', refs.tempArr);
}

function hendlerSubmit(_ref2) {
  var target = _ref2.target;

  var inp = refs.input.value;
  if (refs.url.includes(inp)) return alert('такая закладка уже существует');
  if (!refs.urlTest.test(inp)) return alert('не вверный ввод урла');
  refs.url.push(inp);
  template(refs.url);
}

function preview(user_url) {
  return fetch(refs.urlPreview + '/?key=' + APP_KEY + '&q=' + user_url).then(function (response) {
    if (response.ok) return response.json();
    throw new Error('error:' + response.statusText);
  });
}

function template(arr) {
  refs.tempArr = [];
  setLocalStorageObjectItem('urlList', arr);
  arr.map(function (n) {
    preview(n).then(function (d) {
      refs.tempArr.push(d);
      return refs.tempArr;
    }).then(function (arr) {

      return past(arr);
    }).catch(function (er) {
      return console.log(er);
    });
  });
}

function past(arr) {
  var t = Handlebars.compile(refs.temp);
  var p = arr.reduce(function (acc, el) {
    return acc + t(el);
  }, '');
  refs.list.innerHTML = p;
}

function deletUrl(a, b) {
  new Promise(function (resolve, reject) {
    resolve(refs.url.map(function (r) {
      if (a == r || '{r}/') refs.url.splice(refs.url.indexOf(r), 1);
    }));
    reject('error');
  }).then(function (r) {
    return b.innerHTML = '';
  }).catch(function (error) {
    return console.log(error);
  });
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
var localUrlList = Array.from(getLocalStorageObjectItem('urlList'));

function startDec(arr) {
  arr.map(function (r) {
    refs.url.push(r.url);
  });
  template(refs.url);
}

startDec(localUrlList);