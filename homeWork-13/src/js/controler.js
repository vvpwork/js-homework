export default class Controler {
  constructor(view, model) {
    this._view = view;
    this._model = model;
    this.urlTest = /\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
  }

  loadDesc() {
    let startUrlList = this._model.startUrlList();
    if( !startUrlList) return this._model.url=[];
    this._view.addItems(startUrlList);
  }

  addFormListener() {
    this._view.refs.form.addEventListener(
      'submit',
      this.handlerFormSubmit.bind(this),
    );
  }

  handlerFormSubmit(evt) {
    evt.preventDefault();
    
    let input = this._model.urlSlesh(this._view.refs.inp.value);
    console.log(input);
    this._view.refs.form.reset()
    if (!this.urlTest.test(input)) return alert('url is invalid, try again');
    if (this._model.url.includes(input))
      return alert('this url already exists');
    this._model.userUrl(input);
    this._view.addItems([input]);
    
  }
  deletItems(url, items) {
    new Promise((resolve, reject) => {
      resolve(this._model.deletUrl(url));

      reject('error');
    })
      .then(r => {
        this._view.deletItem(items);
      })
      .catch(error => console.log(error));
  }
  addUrlListener() {
    this._view.refs.urlList.addEventListener(
      'click',
      this.handlerDeletItems.bind(this),
    );
  }
  handlerDeletItems({ target }) {
    if (target.nodeName !== 'BUTTON') return;
    let items = target.closest('.url__items');
    let urlAddress = items.querySelector('.url__address').innerHTML;
    this.deletItems(urlAddress, items);
  }
}
