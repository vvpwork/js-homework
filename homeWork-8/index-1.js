'use strict';
/*


    click – происходит, когда кликнули на элемент левой кнопкой мыши
    contextmenu – происходит, когда кликнули на элемент правой кнопкой мыши
    mouseover – возникает, когда на элемент наводится мышь
    mousedown и mouseup – когда кнопку мыши нажали или отжали
    mousemove – при движении мыши

События на элементах управления:

    submit – посетитель отправил форму <form>
    focus – посетитель фокусируется на элементе, например нажимает на <input>

Клавиатурные события:

    keydown – когда посетитель нажимает клавишу
    keyup – когда посетитель отпускает клавишу

События документа:

    DOMContentLoaded – когда HTML загружен и обработан, DOM документа полностью построен и доступен.

События CSS:

    transitionend – когда CSS-анимация завершена.

Также есть и много других событий.


*/
let btn = document.querySelector('.btn');
let wrap = document.querySelector('.wrapper')

// btn.addEventListener('click', handleClickButton);

// btn.addEventListener('click', handleClickButton2);

// btn.addEventListener('click', handleClickButton3);

// function handleClickButton(){
//     alert('hello egor');
//     btn.removeEventListener('click', handleClickButton)
// }
// function handleClickButton2(){
//     alert('hello Elena');
//     btn.removeEventListener('click', handleClickButton2)
// }
// function handleClickButton3(){
//     alert('hello Vova');
//     btn.removeEventListener('click', handleClickButton3)
// }
const user = {
    name: 'Mango',
    showName() {
      console.log(this);
      // this будет ссылаться на button
      // если использовать showName как callback
      console.log(`My name is: ${this.name}`);
      // тут undefined так как поля name нету у button
    }
  }
  
  // Представим что у нас есть кнопка с классом js-btn
  // Выберем ее и повесим на нее слушатель клика
  
//   user.showName(); //работает
//   btn.addEventListener('click', user.showName); // не работает
  // btn.addEventListener('click', user.showName.bind(user)); 
  const handleButtonFocus =(ev)=>{
  alert(`${ev.clientX} ${ev.clientY} ` )
  ev.preventDefault()
  ev.currentTarget.classList.add('red')
  // setTimeout(() => {
  //   ev.target.classList.remove('red')
  // }, 1000);
 
  }
  function handlerWrapperCLick(ev){
    alert('wrapper click')
    //  ev.currentTarget.classList.add('red')
    //  setTimeout(() => {
    //    ev.target.classList.remove('red')
    //  }, 1000);
    
  }
  wrap.addEventListener('click', handlerWrapperCLick)
  btn.addEventListener('click', handleButtonFocus)

  


// Вместо того, чтобы назначать обработчик каждому элементу навигации, которых может быть
// очень много – мы повесим единый обработчик на nav. Он будет использовать event.target, чтобы
// получить элемент, на котором произошло событие, и подсветить его.

// const nav = document.querySelector("#js-nav");

// const onClick = event => {
//   console.log("event target: ", event.target);

//   // проверяем чтобы цель клика не была равна цели на которой весит обработчик,
//   // мы не хотим подсвечивать весь nav, только его элементы
//   if (event.target !== event.currentTarget) {
//     event.target.classList.add("red", "lighten-2");

//     // setTimeout это функция которая вызовет callback через определенное время
//     setTimeout(() => {
//       event.target.classList.remove("red", "lighten-2");
//     }, 200);
//   }
// };

// nav.addEventListener("click", onClick);

//===========dop===================

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// let btn = document.querySelector('.button');
// btn.addEventListener('click', handleBtnClick)

// function handleBtnClick(){
//   btn.textContent = +btn.textContent + 1
// }



/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

// let form = document.querySelector('.calc');
// let input = form.querySelectorAll('input')
// let result = form.querySelector('.result')

// form.addEventListener('click', handlerBtnClick);

// function handlerBtnClick(ev){
//  if(ev.target.nodeName !== "BUTTON")return;
//  let summ = 0
//  for (let rest of input){
//     summ += Number(rest.value)
//   }
// result.innerHTML = summ
// }
/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.
*/
// let btn = document.querySelectorAll('.btn')
// let value = document.querySelector('.value')

// function clic(arr){
//   arr[0].addEventListener('click',handlerBtnClick )
//   arr[1].addEventListener('click',handlerBtnClick )
//    function handlerBtnClick(ev){
//   if(ev.target.classList[1] !== "js-sub")
//   { return value.textContent = +value.textContent+1}
//    else if(value.textContent > 0){ value.textContent -= 1}; 
// }
// }
// clic(btn);

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/

let root = document.querySelector('.question-form');
let result = document.querySelector('.result')
let past ='';
root.addEventListener('input', handlerCheck);
root.addEventListener('submit', handlerSubmit)
function handlerCheck(ev){
past = ev.target.value 
}
function handlerSubmit(ev){
  ev.preventDefault()
  
  result.textContent = `Result: ${past}`;
}

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Используйте делегирование.
*/

var list  = document.querySelector('.images');

list.addEventListener('click', handlerImg)

function handlerImg(ev){
ev.target.nodeName === "IMG"? alert(ev.target.alt): null;
}

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/
var list = document.querySelector('.list');
list.addEventListener('click', handlerDeletItems)
function handlerDeletItems(ev){
  if(ev.target.nodeName !== 'BUTTON')return;
  let parent = ev.target.parentNode
  parent.remove()
}
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  Если введено подходящее количество, то outline инпута становится зеленым, 
  если неправильное - красным. 
*/

var div = document.querySelector('.inputs')

div.addEventListener('change', handlerInputValid)

function handlerInputValid(ev){
let event = ev.target
event.value.length == event.dataset.length? event.style.outline = '1px green solid':event.style.outline = '1px red solid'
}
/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно 
      отображаться в абзаце с классом input-value 
*/
let input = document.querySelector('.input');
let p = input.nextElementSibling;

input.addEventListener('focus', handlerInputFocus)
input.addEventListener('input', handlerInputValue)
function handlerInputFocus(){
  console.log("Input is in focus!");
}
function handlerInputValue(ev){
let value = ev.target.value;
p.textContent = `Current input value:${value}`
}
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс menu-link-active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пункотв меню может быть произвольное количество, используйте
  прием "Делегирование событий". Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

let menu = document.querySelector('.menu');
menu.addEventListener('click', handlerActiveLink)

function handlerActiveLink(ev){
  let event = ev.target;
  if(event.nodeName !== 'A')return;
  let link = menu.querySelectorAll('.menu-link')
  for(let active of link){
    if(active !== event){
    active.classList.remove('menu-link-active')    
    }event.classList.add('menu-link-active')   
  }
  event.preventDefault()
}
