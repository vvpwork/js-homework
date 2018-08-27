'use strict';

const refs = {
    input: document.querySelector('.form__input'),
    btnAll: document.querySelector('.form__all-users'),
    btnId: document.querySelector('.form__user-id'),
    btnRemove: document.querySelector('.form__remove-user'),
    btnAdd: document.querySelector('.form__add-user'),
    result: document.querySelector('.result'),
    form: document.querySelector('.form'),
    loader: document.querySelector('.loader'),
    url:'https://test-users-api.herokuapp.com/users/',
}

refs.form.addEventListener('click', handlerClick)

function handlerClick(ev){
    ev.preventDefault()
    refs.result.textContent ='';
    let name = refs.input.value;
    let evt = ev.target;
    if(evt.nodeName !== 'BUTTON')return;
    if(evt.classList.contains('form__all-users'))return fetchAll();
    if(evt.classList.contains('form__user-id'))return fetchId(name);
    if(evt.classList.contains('form__remove-user'))return fetchRemove(name);
    if(evt.classList.contains('form__add-user'))return fetchAdd(name);
    if(evt.classList.contains('form__apdate'))return fetchApdate(name);  
}

 function fetchAll (){
    return fetch(refs.url)
    .then((response)=>{
        if(response.ok) return response.json();
        throw new Error(`error: ${response.statusText}`)
    })
    .then(data=>{
        let red= data.data;
        let prot =` <table class="table">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
            </tr> 
         </table>`;
        
        refs.result.innerHTML = prot
        red.forEach(el => {
            let items =`
        <tr>
           <td>${el.id}</td>
           <td class ="td">${el.name}</td>
           <td>${el.age}</td>
       <tr>`;
       document.querySelector('.table').innerHTML+=items;
        });
    })
    .catch(error => refs.result.textContent=`<p>${error}`)
}

function fetchId(name){
    return fetch(`${refs.url}${name}`)
    .then((response)=>{
        if(response.ok) return response.json();
        throw new Error(`error: ${response.statusText}`)
    })
    .then(data=>{
       
        let user =data.data;
        if(!user.id)return refs.result.innerHTML= `<p>такого пользователя нет`;
        refs.result.innerHTML=`
        <p>ID: ${user.id}
        <p>Name: ${user.name}
        <p>Age: ${user.age}`
    })
    .catch(error => {
        if (error == "TypeError: user is undefined" ) return refs.result.innerHTML= `<p>такого пользователя нет`
        return refs.result.innerHTML= `<p>${error}`})
}
function fetchRemove(name){

    fetch(`${refs.url}${name}`,{
        method: 'DELETE',
   })
    .then((response)=>{
        if(response.ok) return response.json();
        throw new Error(`error: ${response.statusText}`)
    })
    .then(data=>{
       
        let user =data.data;
        console.log(user)
        refs.result.innerHTML=`
        <p>IS DELETED
        <p>ID: ${user.id}
        <p>Name: ${user.name}
        <p>Age: ${user.age}`
    })
    .catch(error => {
        if (error == "TypeError: user is undefined" ) return refs.result.innerHTML= `<p>не верный ввод данных`;
        if (error == "TypeError: user is null" ) return refs.result.innerHTML= `<p>такого пользователя нет`;
        return refs.result.innerHTML= `<p>${error}`})
}
function fetchAdd(name){
    let arr = name.split(' ');
   
    if(arr.length !=2)return refs.result.innerHTML= `<p>не верный ввод данных`;
    fetch(refs.url,{
        method: 'POST',
        body: JSON.stringify({name:arr[0], age:Number(arr[1])}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
   })
    .then((response)=>{
        if(response.ok) return response.json();
        throw new Error(`error: ${response.statusText}`)
    })
    .then(data=>{
        
        let user =data.data; 
        refs.result.innerHTML=`
        <p>IS ADDED
        <p>ID: ${user._id}
        <p>Name: ${user.name}
        <p>Age: ${user.age}`
    })
    .catch(error => {
        if (error == "TypeError: user is undefined" ) return refs.result.innerHTML= `<p>не верный ввод данных`
        return refs.result.innerHTML= `<p>${error}`})
}
function fetchApdate(name){
    let arr = name.split(' ');
    fetch(`${refs.url}${arr[0]}`,{
        method: 'PUT',
        body: JSON.stringify({name:arr[1], age:Number(arr[2])}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
   })
    .then((response)=>{
        if(response.ok) return response.json();
        throw new Error(`error: ${response.statusText}`)
    })
    .then(data=>{
       
        let user =data.data;
        refs.result.innerHTML=`
        <p>IS APDATE
        <p>ID: ${user.id}
        <p>Name new: ${user.name}
        <p>Age new: ${user.age}`
    })
    .catch(error => {
        if (error == "TypeError: user is undefined" ) return refs.result.innerHTML= `<p>не верный ввод данных`
        return refs.result.innerHTML= `<p>${error}`})
}
