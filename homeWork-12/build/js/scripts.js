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
  urlPreview: 'http://api.linkpreview.net'

};
var tempArr = [];
var url = [];
var urlTest = /\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;

refs.form.addEventListener('submit', hendlerSubmit);
function hendlerSubmit(_ref) {
  var target = _ref.target;

  var inp = refs.input.value;
  if (url.includes(inp)) return alert('такая закладка уже существует');
  if (!urlTest.test(inp)) return alert('не вверный ввод урла');
  url.push(inp);
  var red = tamplete(url);
  past(red);
  console.log(tempArr);
}

function preview(user_url) {
  return fetch(refs.urlPreview + '/?key=' + APP_KEY + '&q=' + user_url).then(function (response) {
    if (response.ok) return response.json();
    throw new Error('error:' + response.statusText);
  });
}

function tamplete(arr) {
  var tempArr = [];
  arr.map(function (n) {
    preview(n).then(function (d) {
      return tempArr.push(d);
    }).catch(function (er) {
      return console.log(er);
    });
  });
  return tempArr;
}

function past(arr) {
  var p = arr.reduce(function (acc, el) {
    return acc = el.title;
  }, '');
  // refs.list.innerHTML= red;
}