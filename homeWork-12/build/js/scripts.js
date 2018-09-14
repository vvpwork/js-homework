'use strict';
'use strict';

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

  var inp = slesh(refs.input.value);
  if (!refs.urlTest.test(inp)) return alert('error: undefined url');
  if (refs.url.includes(inp)) return alert('this url is added');
  refs.url.push(inp);
  template(refs.url);
}

function template(arr) {
  refs.tempArr = [];
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
function preview(user_url) {
  return fetch(refs.urlPreview + '/?key=' + APP_KEY + '&q=' + user_url).then(function (response) {
    if (response.ok) return response.json();
    throw new Error('error:' + response.statusText);
  });
}

function past(arr) {
  var t = Handlebars.compile(refs.temp);
  var p = arr.reduce(function (acc, el) {
    return acc + t(el);
  }, '');
  refs.list.innerHTML = p;
  setLocalStorageObjectItem('urlList', refs.url);
}

function deletUrl(a, b) {
  new Promise(function (resolve, reject) {
    resolve(refs.url.map(function (r) {
      if (a == r) {
        refs.url.splice(refs.url.indexOf(r), 1);
        setLocalStorageObjectItem('urlList', refs.url);
      }
    }));
    reject('error');
  }).then(function (r) {
    b.innerHTML = '';
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

function slesh(a) {
  if (a.slice(-1) !== '/') return a + '/';
  return a;
}

(function startDesc() {
  refs.url = Array.from(getLocalStorageObjectItem('urlList'));
  template(refs.url);
})();