'use strict';


// class galeri = {
//     constructor{
//         t
//     }



// }


const galleryItems = [
    { preview: './img/preview-1.png', fullview: './img/image-1.jpg', alt: "alt text 1" },
    { preview: './img/preview-2.png', fullview: './img/image-2.jpg', alt: "alt text 2" },
    { preview: './img/preview-3.png', fullview: './img/image-3.jpg', alt: "alt text 3" },
    { preview: './img/preview-4.png', fullview: './img/image-4.jpg', alt: "alt text 4" },
    { preview: './img/preview-5.png', fullview: './img/image-5.jpg', alt: "alt text 5" },
    { preview: './img/preview-6.png', fullview: './img/image-6.jpg', alt: "alt text 6" },
  ];

class GalleryImages {
    constructor(items, parentNode){
        this.items = items;
        this.parentNode = parentNode;
       
    }

    addItems({preview, fullview, alt}){
        let items = `<li class="preview__items"><img src=${preview} data-fullview=${fullview} alt=${alt} width='350'></li>`
        return items
    }

    addImage(){
        let div = `<div class="fullview"><img src=${this.items[0].fullview} data-fullview=${this.items[0].fullview} alt=${this.items[0].alt} width='1280'></div>`
        let ul =`<ul class = "preview__list"></ul>` 
        this.parentNode.insertAdjacentHTML('beforeend', div);
        this.parentNode.insertAdjacentHTML('beforeend', ul);
        let fullImg = this.parentNode.firstElementChild
        let li = this.items.reduce((acc,val)=> acc + this.addItems(val),'')
        let list = this.parentNode.lastElementChild
        let img = list.querySelectorAll('img')
        list.insertAdjacentHTML('beforeend', li)
        
        list.addEventListener('click', this.handlerPreviewClick);
       
      
       
      
    }
    handlerPreviewClick(ev){
        let evn = ev.target
        let fullImg = this.parentNode.firstElementChild
        let items = this.parentNode.lastElementChild.children
        if(evn.nodeName !=='IMG')return;
        fullImg.firstElementChild.setAttribute('src', evn.dataset.fullview ) 
        
        if(fullImg.firstElementChild.getAttribute('src') === evn.dataset.fullview){
        evn.parentNode.classList.add('add')
         } 
         for(let res of items){
            if (evn.dataset.fullview  !== res.firstElementChild.dataset.fullview) res.classList.remove('add')
            }
    }
    
}

let gallary = document.querySelector('.image-gallery');
let img = document.querySelector('.img')

const red = new GalleryImages(  galleryItems, img);
const der = new GalleryImages( galleryItems, gallary)
red.addImage()
der.addImage()