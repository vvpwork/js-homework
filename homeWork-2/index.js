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