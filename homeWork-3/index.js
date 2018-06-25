'use strict';

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

let userLogin; 
const checkLoginValidity = (userLogin) =>{ 
    if (userLogin.length >= 4 && userLogin.length <= 16){
         return 1
    } return 0
}

const checkIfLoginExists = (logins, userLogin) => {
    if(logins.includes(userLogin)){
        return 1
    }return 0
}

const addLogin = (logins, userLogin) => {
    if (checkLoginValidity(userLogin)) {
        if(!checkIfLoginExists(logins, userLogin)){
            logins.push(userLogin);
            return alert('Логин успешно добавлен!');
        } return alert('Такой логин уже используется!');
    }  return alert('Ошибка! Логин должен быть от 4 до 16 символов');
}

userLogin = prompt('Введите свой логин'); 

addLogin(logins, userLogin)
    
   



