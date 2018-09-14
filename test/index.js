'use strict';
let arr = ['https://www.google.com.ua/', 'http://localhost:3000/?#', 'https://developer.mozilla.org/']

// let red = arr.splice(0, 1)
// let ind = arr.indexOf('https://www.google.com.ua')
// let red = arr.splice(arr.indexOf('https://www.google.com.ua'), 2);
let google = 'https://www.google.com.ua'; 


arr.map(r=> {if (r == (google + '/') || r == google) arr.splice(arr.indexOf(r), 1)})

console.log(arr)