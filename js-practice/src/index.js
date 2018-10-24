'use strict';
import style from './sass/main.scss';
import logo from './img/logo.png'

import View from './js/view'
import Model from './js/model'
import Control from './js/control'

const axios = require('axios');
const API_KEY = '10469038-35fcd3e8ac9b88b2536fb26c9';

const refs = {
  form:document.querySelector('.form'),  
  input: document.querySelector('.form__input'),
  btn: document.querySelector('.form__submit'),
  list: document.querySelector('.gallary__list'),
  header: document.querySelector('.site__header'),
  baseUrl: 'https://pixabay.com/api/',
};

let template = ({ largeImageURL }) => {
  let template = `<li class="gallary__items">
<img src="${largeImageURL}" alt="" heigth="122">
</li>`;
  return template;
};

let view = arr => {
  let img = arr.reduce((acc, val) => acc + template(val), '');
  refs.list.innerHTML = img;
};
function axiosGet(request) {
  return axios
    .get(`${refs.baseUrl}?key=${API_KEY}&q=${request}`)
    .then(data => {
      let d = data.data;
      console.log(d.hits);
      view(d.hits);
    })
    .catch(er => console.log(er));
}

function headerSubmit(){
  refs.header.classList.add('submit')
}
refs.form.addEventListener('submit', hendlerFormSubmit)
function hendlerFormSubmit(ev){
    ev.preventDefault()
    let request = refs.input.value;
    axiosGet(request)
    headerSubmit()
}
