'use strict'
// function red (){
//     return new Promise(
//         (resolve,reject)=> {
//             resolve(5)
//             reject('protutu')
//         }
//     )
// }

// red()
// .then(r => {
//     let der = r*2
//     return der;
// })
// .then(d => {
//     let der = d*4;
//     return der
// })
// .then(dat =>console.log(dat))
// .catch(e => console.log(e))

// fetch('https://api.myjson.com/bins/data')
// .then(response =>{
// if(response.ok){
//     return response.json()
// }
// throw new Error(`${response.statusText}`)
// })

// .then(data=>console.log(data))
// .catch(r => console.log(r));

// fetch('https://api.privatbank.ua/p24api/infrastructure?json&atm&address=&city=%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA')
// .then(
//     response=>{
//         if(response.ok){
//             return response.json()
//         }
//         throw new Error(`error: ${response.statusText}`)
//     }
// )
// .then(data => console.log(data))

/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.

  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны

  С помощью fetch сделать запрос по составленому
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch.

  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны

  Все необходимые данные есть в ответе от API.

  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector('input')
const submitBtn = document.querySelector('.js-submit')
const result = document.querySelector('.js-result')
const apiUrl = 'https://restcountries.eu/rest/v2/name/'

submitBtn.addEventListener('click', fetchCountryData)

/*
  @param {FormEvent} evt
*/
function fetchCountryData (evt) {
  evt.preventDefault()
  let name = input.value
  country(name)

}

function country (name) {
return  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
      if (response.ok) return response.json()
      throw new Error(`nem error: ${response.statusText}`)
    })
    .then(data => {
    let red = data[0];  
    let der = `<p>Country name: ${red.name}
     <p>Capital: ${red.capital}
     <p>Main currency: ${red.currencies[0].name}
    <p>Flag:<img src = ${red.flag} width = '100' height = '50'>`;
    result.innerHTML = der;       
    })
    .catch(error => console.log(error))
}
/*
  Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "https://api.github.com/users/";

submitBtn.addEventListener("click", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
  let name = input.value
  evt.preventDefault();
  fetchApi(name)
}
function fetchApi(name){
return fetch(`${apiUrl}${name}`)
  .then((response)=>{
if(response.ok) return response.json();
  throw new Error(`new error: ${response.statusText}`)
})
  .then(data =>{
  let past = `<p>Avatar: <img src= ${data.avatar_url} width='100'> 
    <p>Username: ${data.login}
    <p>Bio: ${data.bio}
    <p>Public repos: ${data.public_repos}`
  result.innerHTML = past
} )
  .catch(error => result.innerHTML = error)
}