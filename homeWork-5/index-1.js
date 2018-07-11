// 'use strict';

// /*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

// /* 
//   Функция findGreaterThan получает два аргумента - число и массив.
//   Возвращает новый массив, содержащий элементы которые больше числа.
// */

// const findGreaterThan = (num, arr) => {
//     let red = [];
//     return  red = arr.filter(ars  =>  ars > num );
//   }

  


// console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

// /* 
//   Функция multiplyBy принимает два аргумента - число и массив. 
//   Возвращает массив все значения которого умножены на число.
// */
// const multiplyBy = (num, arr) => {
// let result = [];
// return result = arr.map(i => i * 2)
  
// };

// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

// /* 
//   Функция summAllNumbers принимает любое число аргументов.
//   Возвращает число - сумму всех аргументов.
// */
// function summAllNumbers(...args) {
//   let accumulator = 0;


//   return accumulator = args.reduce((accum, val) => accum + val, 0);
// }

// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

// /* 
//   Функция findEvery получает два аргумента - число и массив.
//   Возвращает true если все элементы массива больше или равны числу.
//   Иначе если есть хоть один элемент меньше числа, то возвращается false.
// */
// const findEvery = (num, arr) => {
// return arr.every(n => n >= num)
// };

// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

/*
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const er= [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
  ];
  function getPropValues(arr, prop){
  return arr.forEach(n => console.log(n[prop]));
    
  }
  // Вызовы функции для проверки
  console.log( getPropValues(er, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
  
  console.log( getPropValues(er, "age") ); // [20, 18, 30, 45]
  
  console.log( getPropValues(er, "isActive") ); // [true, false, true, false]
  //============================================================
/*      
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

  const guests = [
    { name: 'Mango', inactiveDays: 15, isActive: true },
    { name: 'Poly', inactiveDays: 8, isActive: false },
    { name: 'Ajax', inactiveDays: 32, isActive: false },
    { name: 'Chelsey', inactiveDays: 85, isActive: true }
  ];


  
const setGuestState = (guests, period) =>
  guests.map(guest => ({
    ...guest,
      isActive: guest.inactiveDays < period,
  }));

  // Вызовы функции для проверки
  console.log(
    setGuestState(guests, 10)
  ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
  
  console.log(
    setGuestState(guests, 20)
  ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
  
  console.log(
    setGuestState(guests, 50)
  ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

  //=============================

  /*
  Напишите функию getActiveGuests(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.
         
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const g = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];

function getActiveGuests(user){
  return user.filter(x => x.isActive )
}
// Вызовы функции для проверки
console.log(getActiveGuests(g)); // массив из 2-х объектов Mango и Ajax

// ================================

/*      
  Напишите функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста 
  для сортировки. 
  
  Функция возвращает массив объектов значение свойства 
  age которых больше чем параметр age.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const gu = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];
function getGuestsOlderThan (guests, age){
  return guests.filter(x => x.age > age)
}
// Вызовы функции для проверки
console.log(getGuestsOlderThan(gu, 25)); // массив из 2-х объектов Ajax и Chelsey

console.log(getGuestsOlderThan(gu, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

console.log(getGuestsOlderThan(gu, 55)); // []

//=======================================================
/*
  Напишите функию getGuestById(guests, id), принимающую 
  guests - массив объектов гостей, id - идентификатор (число). 
  
  Функция должна возвращать объект гостя с совпадающим id.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const gue = [
  { id: 1, name: 'Mango', age: 20 },
  { id: 2, name: 'Poly', age: 18 },
  { id: 3, name: 'Ajax', age: 30 },
  { id: 4, name: 'Chelsey', age: 45 }
];

function getGuestById(guests, id){
  return guests.find(x => x.id === id)
}

// Вызовы функции для проверки
console.log(
  getGuestById(gue, 3)
); // {id: 3, name: 'Ajax', age: 30}

console.log(
  getGuestById(gue, 1)
); // {id: 1, name: 'Mango', age: 20}

console.log(
  getGuestById(guests, 5)
); // undefined

//=============================
/*
  Используя метод reduce, посчитайте сумму 
  всех значений свойств объекта order.
*/ 
const order = {
  bread: 10,
  apples: 25,
  chicken: 60,
  milk: 15,
  cheese: 40
};

console.log(Object.values(order).reduce((acc, val) => acc + val)) // 150
//=================================================

/*
  Напишите функцию getTotalPrice(products, order), где 
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".
  
  Функция возвращает общую сумму стоимости всех продуктов заказа.
  
  PS: используйте метод reduce
*/

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  cheese: 30,
  chicken: 40
};

const orderA = {
  bread: 2,
  apples: 4,
  chicken: 1
};

const orderB = {
  bread: 1,
  milk: 2,
  cheese: 3
};

function getTotalPrice(products, order){
  return Object.keys(order).reduce((acc, val) => {
    if(Object.keys(products).includes(val)){
      return acc + order[val] * products[val]
    }
  }, 0 )
  
}
// Вызовы функции для проверки
console.log(getTotalPrice(products, orderA)); // 140

console.log(getTotalPrice(products, orderB)); // 130
//====================================================

/*     
  Напишите функию allGuestsActive(guests), принимающую 
  один параметр guests - массив объектов гостей. 
  
  Функция должна возвращать true если значение поля isActive 
  всех объектов true, в противном случае false.
  
  PS: используйте метод every или some, никаких for!
*/

const guestsA = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: false },
  { name: "Ajax", isActive: true }
];

const guestsB = [
  { name: "Mango", isActive: true },
  { name: "Poly", isActive: true },
  { name: "Ajax", isActive: true }
];

function allGuestsActive(guests){
  return guests.every(red => red.isActive == true)
}

// Вызовы функции для проверки
console.log(allGuestsActive(guestsA)); // false

console.log(allGuestsActive(guestsB)); // true
