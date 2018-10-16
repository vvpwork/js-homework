import templates from '../templates/url_items.hbs'


export default class View{
    constructor(){
        this.refs = {};
        this.refs.form =document.querySelector('.form');
        this.refs.inp = this.refs.form.querySelector('.fprm__input');
        this.refs.urlButton = document.querySelector('.url__button');
        this.refs.urlList = document.querySelector('.url__list');
    }

    templateItem(arr){
        let temp = templates(arr);
        return temp
    }

    addItems(arr){
        console.log(arr);
        arr.map(r=>{
            console.log(r);
            this.refs.urlList.insertAdjacentHTML('afterbegin', this.templateItem(r))
            
        })
        
    }
}
      


