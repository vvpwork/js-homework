'use strict';

const refs ={
    list: document.querySelector('.js__list'),
    url : 'https://vvpwork.github.io/js-homework/homeWork-',
    items:'',
    
}
const arrUrl = [];
(function (){
  for (let i =1; i < 14; i+=1){
        arrUrl.push({
            name: `module-${i}`,
            url:`${refs.url}${i >11? `${i}/build`:i}`,
            description:``, 
        })
    }
})()

function addItems(){
    let t =({name, url, description}) => {
       return  refs.url = ` <li class= "js__items">
        <h2 class="js__items--title">
            <a class="js__items--link" href="${url}" target="blank">${name}</a>
        </h2>
        <p class = 'js__items--text'><span class='js__items--span'>${description}</span></p>
    </li>`
    }
    let r = arrUrl.reduce((acc, el)=>acc + t(el) , '')
    refs.list.innerHTML= r;
}


addItems()
