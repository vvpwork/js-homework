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