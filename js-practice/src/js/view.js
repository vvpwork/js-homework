import template from '../template/item.hbs';
import modal from '../template/modal.hbs';
export default class View {
  constructor() {
    this.refs = {};
    this.refs.form = document.querySelector('.form');
    this.refs.gallary = document.querySelector('.gallary');
    this.refs.input = document.querySelector('.form__input');
    this.refs.btn = document.querySelector('.form__submit');
    this.refs.list = document.querySelector('.gallary__list');
    this.refs.header = document.querySelector('.site__header');
    this.refs.btnShowMore = document.querySelector('.gallary__showMore');
    this.refs.modal = document.querySelector('.modal');
    this.refs.modal__img = document.querySelector('.modal__img');
    this.refs.choise = document.querySelector('.site__choise')
  }

  addGallaryItem(arr) {
    let img = arr.reduce((ac, val) => ac + template(val), '');
    return img;
  }

  innerImg(val) {
    this.refs.list.innerHTML = val;
  }

  insertMoreImg(val) {
    this.refs.list.insertAdjacentHTML('beforeend', val);
  }

  submit() {
    this.refs.header.classList.add('submit');
    this.refs.btnShowMore.classList.add('show');
  }

  showModal(img) {
    let modalImg = modal(img);
    this.refs.gallary.insertAdjacentHTML('afterend', modalImg);
  }
  gallaryList() {
    let img = this.refs.modal.querySelector('.modal__img');
    let img__src = img.src;
    let list = this.refs.gallary.querySelectorAll('.gallary__items');
    let arr = [];
    for (let img of list) {
      arr.push(img.firstElementChild.src);
    }
    let obj = {
      img: img,
      img__src: img__src,
      list: list,
      arr: arr,
    };
    return obj;
  }
  nextImg() {
    let obj = this.gallaryList();
    let index = (obj.arr.indexOf(obj.img.src) + 1) % obj.arr.length;
    obj.img.src = obj.arr[index];
  }
  previewImg() {
    let obj = this.gallaryList();
    let index = (obj.arr.indexOf(obj.img.src) - 1) % obj.arr.length;
    obj.img.src = obj.arr[index];
  }

  addChoise() {
    
    let src = this.refs.modal.querySelector('.modal__img').src
    let id = this.refs.modal.querySelector('.modal__img').id
    let obj = {
        src: src,
        id: id,
      };
  
    return obj
  }
}
