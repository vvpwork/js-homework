'use strict'
let userInput;
let total = 0;
const  numbers = [];
do {
userInput= Number(prompt('please enter number'));
numbers.push(userInput);
} while(userInput > 0);

for(let i = 0; i < numbers.length; i += 1){
    total += numbers[i];   
}
if(total > 0){
    alert(`общая сумма чисел ${total}`);
}   