export default class Controler{
    constructor(view, model){
        this._view = view;
        this._model = model;
        this.urlTest =  /\b(?:(?:https?|ftp|http):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i;
    }
     
   loadDesc(){
       this._model.startUrlList();
       let arrUrlList = this._model.previewList();
       this._view.addItems(arrUrlList)
   }


}