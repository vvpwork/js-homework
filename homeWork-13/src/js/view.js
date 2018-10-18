import templates from '../templates/url_items.hbs';

export default class View {
  constructor() {
    this.refs = {};
    this.refs.form = document.querySelector('.form');
    this.refs.inp = this.refs.form.querySelector('.form__input');
    this.refs.urlButton = document.querySelector('.url__button');
    this.refs.urlList = document.querySelector('.url__list');
  }

  addItems(a) {
    a.map(r => {
      let obj = {
        url: r,
      };
      return this.refs.urlList.insertAdjacentHTML('afterbegin', templates(obj));
    });
  }
  deletItem(item) {
    this.refs.urlList.removeChild(item)
  }
}
