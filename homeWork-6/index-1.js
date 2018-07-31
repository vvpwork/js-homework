'use strict'
// /*
//   Создать функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email и friendsCount. 
  
//   В prototype функции-конструктора добавить метод getAccountInfo(), 
//   который выводит в консоль значения полей login, email и friendsCount. 
  
//   Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
  
//   Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
// */

// function Red (login, email, friendsCount){
//     this.login =  login;
//     this.email = email;
//     this.friendsCount = friendsCount;
// }

// Red.prototype.getAccountInfo = function() {
//     return console.log(`${this.login}  ${this.email} ${this.friendsCount}`);
// }



// let ter = new Red('ter', 'vovvva33@gmail.com', 24);

// // ter.getAccountInfo();

// const gad = new Red ('gad', 'gad@gmail.com', 23);

// // gad.getAccountInfo();


// /*
//   Напишите функцию-конструктор StringBuilder.
  
//   На вход она получает один параметр string - строку.
  
//   Добавьте следующие методы в prototype функции-конструктора.
  
//     - getValue() - выводит в консоль текущее значение поля value
  
//     - append(str) - получает парметр str - строку и добавляет 
//       ее в конец значения поля value
    
//     - prepend(str) - получает парметр str - строку и добавляет 
//       ее в начало значения поля value
  
//     - pad(str) - получает парметр str - строку и добавляет 
//       ее в начало и в конец значения поля value
// */


// function StringBuilder(string = "") {
//     this.value = string;
//   }
//   StringBuilder.prototype.showValue = function (){
//       console.log(this.value)
//   }
//   StringBuilder.prototype.pad = function (str){
//     this.value = str + this.value + str;
//   }

//   StringBuilder.prototype.prepend = function (str){
//       this.value = str + this.value; 
//   }

//   StringBuilder.prototype.append = function (str){
//       this.value = this.value + str;
//   }

  
//   const myString = new StringBuilder('.');
  
//   myString.append('^'); 
// //   myString.showValue(); // '.^'
  
//   myString.prepend('^'); 
// //   myString.showValue(); // '^.^'
  
//   myString.pad('='); 
// //   myString.showValue(); // '=^.^='
  


//   /*
//   Создайте класс Car с указанными полями и методами.
// */

// class Car {
//     constructor( maxSpeed, value, speed = 0, running = false, distance = 0) {
//             this.speed = speed;
//             this.maxSpeed = maxSpeed;
//             this.running = running;
//             this.distance = distance;
//             this.value = value;

//       /*
//         Добавьте свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
          
//           - maxSpeed - для хранения максимальной скорости 
          
//           - running - для отслеживания заведен ли автомобиль, 
//             возможные значения true или false. Изначально false.
            
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     }


  
//     turnOn() {
//        return this.running = true;
//       // Добавьте код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//     }
  
//     turnOff() {
//        return this.running = false;
//       // Добавьте код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//     }
    
//     accelerate(spd) {
//         this.speed = spd <= this.maxSpeed? spd: 0;
            
        
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//     }
    
//     decelerate(spd) {
//       return  this.speed = spd > 0 && spd < this.maxSpeed ? spd : 0; 
        
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
  
//     drive(hours) {

//       return  this.distance = this.running ? this.speed * hours: 0;
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//     }

//     static getSpecs( car) {
//       return  console.log( car.maxSpeed, car.running, car.distance)
//     }

//     set value(value){
//         this._value = value
//     }

//     get value(){
//         return console.log(this._value);
//     }
//   }
//   /*
//   Добавьте к классу Car из предыдущего задания статический
//   метод getSpecs, который получает объект-машину как аргумент
//   и выводит в консоль значения полей maxSpeed, running и distance.
  
//   Использование будет выглядеть следующим образом:
  
//   const someCar = new Car(100);
//   someCar.turnOn();
//   someCar.drive(2);
  
//   Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
// */
//   const someCar = new Car(100);
//   someCar.turnOn();
//   someCar.accelerate(100);
//   someCar.drive(2);
//   Car.getSpecs(someCar); 
//   /*
//   Добавьте классу Car свойство value - цена автомобиля.
  
//   Добавьте классу Car использование геттеров и сеттеров для свойства value.
  
//   Геттер вернет текущей значение поля this._value
//   Сеттер запишет в поле this._value то что ему присвоят
  
//   PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
//     не this.value а this._value
    
//   Использование выглядит следующим образом:
//   */
//   const myCar = new Car(50, 2000);
  
//   myCar.value; // 2000
//   myCar.value = 4000;
//   myCar.value; // 4000


