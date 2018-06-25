 'use strict'
let userInput;
let total = 0;
const  numbers = [];
do {
userInput= prompt('please enter number');
numbers.push(Number(userInput));
} while(userInput !== null);

for(let i = 0; i < numbers.length; i += 1){
    total += numbers[i];   
}
if(total > 0){
    alert(`общая сумма чисел ${total}`);
}   

// const numbers = [12, 15, 25, 37, 41];
// let min = numbers[0];
// let max = numbers[numbers.length-1];
//   let userInput ;
// do {
// userInput = prompt(`введите любое число от ${min} до ${max}`)

// if (numbers.includes(Number(userInput) ) )
// {alert('Поздравляем, Вы угадали!')}
// else if( userInput * 0 != 0 ){
//   alert ('это не число')
// }  
// else
// {alert('Сожалеем, Вы не угадали!')}
// } while(!numbers.includes(Number(userInput)))

