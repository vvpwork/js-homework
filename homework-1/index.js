'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
let cancle = 'Отменено пользователем!';
let notTrue = 'Доступ запрещен!';
let truePassword = 'Добро пожаловать!';
let userLogin = prompt('введите логин');

if (userLogin === ADMIN_LOGIN) {
  let userPassword = prompt('введите пароль')
  if (userPassword === ADMIN_PASSWORD) {
    alert(truePassword);
  } else if (userPassword === null) {
    alert(cancle);
  } else {
    alert(notTrue);
  }
} else if (userLogin === null) {
  alert(cancle);
} else {
  alert(notTrue);
}
