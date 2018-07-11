'use strict';

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };
 const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1,
  }

  function caihier (name, productsDatabase, totalPrice = 0, customerMoney = 0, changeAmount = 0 ){
      this.name = name;
      this.productDatabase = productsDatabase;
      this.totalPrice = totalPrice;
      this.customerMoney = customerMoney;
      this.changeAmount = changeAmount;

      this.greet = function() {
          console.log(`Здравствуйте, вас обслуживает ${this.name}`)
      };
      this.onSucces = function(){
          console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}` )
      };
      this.onError = function(){
          console.log('Очень жаль, вам не хватает денег на покупки' )
      };
      this.countTotalPrice = function (order){
          const orderUser  = Object.keys(order);
          const priceProduct = Object.keys(productsDatabase)
          for(let i of orderUser){
              if(priceProduct.includes(i)){
                this.totalPrice += order[i] * products[i]
              }
          }
        return this.totalPrice;
      }
      this.getCustomerMoney = function(value){
          this.customerMoney = value;
          return this.customerMoney;
      }
      this.countChange = function(){
        this.changeAmount = this.customerMoney - this.totalPrice;
        if (this.changeAmount >= 0){
            return this.changeAmount
        }else{return null}
        
      }
      this.reset = function (){
          this.totalPrice = 0;
          this.changeAmount = 0;
          this.customerMoney = 0;
      }
  
    }
;
let red = new caihier('loh', products)

<<<<<<< HEAD
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = 'happy';
// user.hobby = 'javascript'
// delete user.premium;
// // for(let red in user ){
// //   console.log(red);
// // }
// // const keys = Object.keys(user);
// // for (let redo of keys){
// //   console.log(user[redo])
// // }

// let sv = Object.entries(user)
// for (let der of sv){
//   let key = der[0];
//   let value = der[1]
//   console.log(`${key} : ${value}`)
// }
// /*
//   Напиште скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"
// */

// const tasksCompleted = {
//   ann: 29,
//   david: 35,/*  
//   Напишите функцию countProps(obj),
//   считающую кол-во свойств в объекте.
//   Функция возвращает количество свойств.
// */

// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

// function countProps(obj) { 
//   let red = Object.keys(obj);
//   return red.length
// }


//   helen: 1,
//   lorence: 99
// };

// let key = Object.keys(tasksCompleted)

// for (let i = 1; i < key.length; i += 1){
// if (tasksCompleted[key[i]] > tasksCompleted[key[0]])
//   key[0] = key[i];
// }

// console.log(key[0])
// /*  
//   Напишите функцию countProps(obj),
//   считающую кол-во свойств в объекте.
//   Функция возвращает количество свойств.
// */

// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

// function countProps(obj) { 
//   let red = Object.keys(obj);
//   return red.length
// }
/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({a: 1})
// ); // false

// console.log(
//   isObjectEmpty({a: 1, b: 2})
// ); // false

// function isObjectEmpty(obj){
//   let red = Object.keys(obj);
//   return red.length == 0 ? true : false; 
// }
=======
console.log(red.countChange())
red.greet();

red.countTotalPrice(order);

console.log(red.totalPrice);

red.getCustomerMoney(1000);

console.log(red.customerMoney);

const result  = red.countChange();

console.log(result);

if(result !== null){
    red.onSucces();
} else {red.onError()};
red.reset()
console.log(red.totalPrice); 
console.log(red.customerMoney); 
console.log(red.changeAmount);
>>>>>>> 6e7533c26088f01a0510a246f1c72f82854ca79c
