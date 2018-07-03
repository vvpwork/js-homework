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

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = 'happy';
user.hobby = 'javascript'
delete user.premium;
// for(let red in user ){
//   console.log(red);
// }
// const keys = Object.keys(user);
// for (let redo of keys){
//   console.log(user[redo])
// }

let sv = Object.entries(user)
for (let der of sv){
  let key = der[0];
  let value = der[1]
  console.log(`${key} : ${value}`)
}
/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
};

let key = Object.keys(tasksCompleted)

for (let i = 1; i < key.length; i += 1){
if (tasksCompleted[key[i]] > tasksCompleted[key[0]])
  key[0] = key[i];
}

console.log(key[0])
