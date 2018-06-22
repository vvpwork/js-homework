'use strict'
const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd']
let attempts = 3
let userAttempts
let userPassword
let interacia = 0

do {
  userPassword = prompt('enter your password')
  for (let i = 0; i < passwords.length; i += 1) {
    if (passwords[i] == userPassword) {
      alert('Добро пожаловать!')
      interacia = 1
    } else if (userPassword == null) {
      interacia = 1
    }
  }
  if (interacia == 0 && attempts > 1) {
    attempts -= 1
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`)
  } else if (attempts == 0 || interacia == 0) {
    alert('У вас закончились попытки, аккаунт заблокирован!')
    interacia = 1
  }
} while (interacia == 0)
