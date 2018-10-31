export default class Control {
  constructor(model, view) {
    this._model = model;
    this._view = view;
    this.inp = null;
  }

  addImgLstener() {
    this._view.refs.form.addEventListener(
      'submit',
      this.hendlerAddImg.bind(this),
    );
  }
  hendlerAddImg(ev) {
    ev.preventDefault();
    this.inp = this._view.refs.input.value.replace(/ /gi, '+');
    this._model
      .getImg(this.inp)
      .then(data => {
        let arr = data.data.hits;
        let temp = this._view.addGallaryItem(arr);
        this._view.innerImg(temp);
        this._view.submit();
      })
      .catch(er => console.log(er));
  }
  addShowMoreListener() {
    this._view.refs.btnShowMore.addEventListener(
      'click',
      this.hendlerShowMore.bind(this),
    );
  }
  hendlerShowMore(ev) {
    console.log(ev.target);
    this._model.showMore(this.inp).then(data => {
      let arr = data.data.hits;
      let temp = this._view.addGallaryItem(arr);
      this._view.insertMoreImg(temp);
    });
  }
  ShowDeteilImg() {
    this._view.refs.list.addEventListener(
      'click',
      this.hendlerDeteilImg.bind(this),
    );
  }
  hendlerDeteilImg({ target }) {
    if (target.nodeName != 'IMG') return;
    let img = this._model.deteileImg(target);
    this._view.showModal(img);
    this.modalListener();
  }

  modalListener() {
    this._view.refs.modal = document.querySelector('.modal');
    this._view.refs.modal.addEventListener(
      'click',
      this.hedlerModalNav.bind(this),
    );
  }
  hedlerModalNav({ target }) {
    let type = target.dataset.type;
    // if(target.dataset.type == 'close') this._view.refs.modal.remove()

    switch (type) {
      case 'close':
        this._view.refs.modal.remove();
        break;
      case 'next':
        this._view.nextImg();
        break;
      case 'preview':
        this._view.previewImg();
        break;
      case 'choise':
      console.log(this._model.addUserChoise(this._view.addChoise()));
        
        break;

      default:
        break;
    }
  }

  addChoiseListener(){
    this._view.refs.choise.addEventListener('click', this.handlerChoise.bind(this))
  }

  handlerChoise(e){
    e.preventDefault()
    
    let arr = this._model.userChoise
  if(arr.length < 1) return alert('нет отобранных изображений') 
   let item = this._view.addGallaryItem(arr)
   
   console.log(item);
   
   this._view.innerImg(item)
   this._view.refs.modal.remove()
   this._view.refs.btnShowMore.remove()
  }
}
