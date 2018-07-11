'use strict';

// const object = {
//     name: 'vova',
//     age: 28,
//     sex: 'man',
// }

// console.log(object['sex'])

// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 50,
//   };
  
//   const canTakeGuests  = (key, amount) =>
//     hotel.key >= amount ? "Welcome!" : "Sorry we are full!";
  
//   console.log(canTakeGuests('capacity', 100)); // Sorry we are full!

// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 43,
// }

// hotel.manager = 'Pedro';
// hotel['telefon'] = '098 090 090' 


// let mark = 'Honda';
// let model = 'accord';

// const car = {

//     mark,
//     model,
// }

// car.model = 'Civic'
// delete car.model;
// car.model = 'accord';
// console.log(car)

// let name = 'Petro';
// let lastName = 'Poroshenko';
// let sex = 'man';

// const user = {
//      name,
//      lastName, 
//      sex,
// }

// console.log(user.hasOwnProperty('sex'))

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,

//     sumStars: () => 5 + 10,
    // // ES5
    // getNameES5: function () {
    //   return hotel.name;
    // },
    // // ES6
    // getNameES6() {
    //   return hotel.name;
    // }
  // };
  

// console.log(hotel.sumStars())
//   console.log ( hotel.getName() ); // Resort Hotel
//   console.log ( hotel.getStars() ); // 5
  
//   hotel.changeCapacity(200);
//   console.log ( hotel.capacity ); // 200

// const hotel = {
//   name : "Resort Hotel",
//   stars: 5,
//   capacity: 100,
//   manager: 'petro',
//   security: 'Oleg',
// };

// for(let key in hotel){
//   console.log('key', hotel[key])
// // }

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//     manager: 'petro',
//     security: 'Oleg',
//   };

//   const objKeys = Object.keys(hotel);
//   const objValues = Object.values(hotel)
//   const objEnteries = Object.entries(hotel)
//   console.log(objKeys)
//   console.log(objValues)
//   console.log(objEnteries)


  // const wrp = document.querySelector(".wrapper");
  // wrp.addEventListener('click', addOne);
  
  // function addOne (event) {
  //   const num = parseInt(event.target.textContent);
  //   event.target.textContent = num + 1;
  // }
  /*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

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
/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// let key = Object.keys(tasksCompleted)

// for (let i = 1; i < key.length; i += 1){
// if (tasksCompleted[key[i]] > tasksCompleted[key[0]])
//   key[0] = key[i];
// }

// console.log(key[0])
/*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// // Вызовы функции для проверки
// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

// function countTotalSalary (salaries){
//   let total = 0;
//   let red = Object.entries(salaries);
//   for (let user of red){
//     let key = user[0];
//     let value = user[1];
//     total +=value
    
//   }
//   return total
// }
/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//   { name: 'Poly', age: 7, mood: 'happy' },
//   { name: 'Mango', age: 4, mood: 'blissful'},
//   { name: 'Ajax', age: 3, mood: 'tired' }
// ];

// // Вызовы функции для проверки
// console.log(
//   getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']

// console.log(
//   getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']

// console.log(
//   getAllPropValues(users, 'active')
// ); // []

// function getAllPropValues (arr, prop){
//   const red = [];
//   for(let obj of arr){
//     if (obj[prop]){
//       red.push(obj[prop]);
//     }
//   }
//   return red
// }
/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  необходимо передать как аргументы 
  при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/

// function user(name, isActive, age, friends){
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends =friends;
//   this.getUserInfo = function() {return console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`)}
  
// }

// let newUser = new user('andr', true, 24, 150)

// console.log(newUser.getUserInfo())

/*  
  Расставьте отсутствующие this 
  в методах объекта store
// */

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);
    
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);
    
//     this.managers.splice(idx, 1);
    
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
    
//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

/*  
  Расставьте отсутствующие this в конструкторе объектов Account
// */

// function Account({ login, password, type = "regular" }) {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;

//     console.log(this.password);
//   };

//   this.getAccountInfo = function() {
//     console.log(`
//       Login: ${this.login}, 
//       Pass: ${this.password}, 
//       Type: ${this.type}
//     `);
//   };
// }

// const account = new Account({
//   login: "Mango",
//   password: "qwe123",
//   type: "premium"
// });

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// console.log(account.changePassword("asdzxc")); // 'asdzxc'

// console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
