'use strict';

// let items = document.querySelector('.items');
// // console.log(items)
// // console.log(items.parentNode);
// // console.log(items.parentNode.childNodes)
// let parent = document.querySelector('.list').firstElementChild.nextElementSibling;
// // console.log(parent);
// // parent.forEach(n => {
// //     return console.log(n)
// // });
// // let parentArray = Array.from(parent)
// console.log(parent)
// console.log(document.documentElement)

// let red = document.getElementById('link');
// console.log(red)
// red.hidden = false;
// red.href = 'kdjfgkoklgjrlkj';

// let red = document.querySelector('.items');
// console.log(red.classList.contains('.red'))
// red.classList.add('red')
// red.classList.remove('items')
// console.log(red.classList)


// let red = document.querySelector('.items');
// red.setAttribute('class', 'fer')
// console.log(red.hasAttribute('class'))

// const der = document.createElement('img');
// der.setAttribute('alt', 'new-image');
// der.setAttribute('width', '100px')
// der.style.display = 'block'
// der.src = 'rrrrrr';
// console.log(der)

// document.querySelector('.list').insertBefore(der, items)

// let red = document.querySelector('.categories').children

// for (let value of red){
//   console.log('категоря', value.childNodes[0],
//              'количество вложений', value.firstElementChild.children.length)
// }

// let red  = document.querySelector('.list');
// red.firstElementChild.style.color = 'red';
// red.lastElementChild.style.color = 'blue';


// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// let red = document.querySelector('.list')
// for(let value of elements){
//   red.insertAdjacentHTML('beforebegin', `<li>${value}</li>`);
// }
/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/
// let red;
// const der = document.querySelector('.der');
// der.insertAdjacentHTML('beforeend', '<ul class= "list"></ul>');
 
// do{
//   red = prompt('введите название пункта');
//   der.querySelector('.list').insertAdjacentHTML('beforeend', `<li> ${red}</li>`)
  
// }while(red)
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// let input = Array.from(document.querySelectorAll('input'));



// function getInputsData(arr){
//  return arr.reduce((acc, check)=> check.checked? acc.concat(check.value):acc, [])  
  
// }

// console.log(getInputsData(input));
