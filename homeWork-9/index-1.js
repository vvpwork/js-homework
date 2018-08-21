'use strict';
let set = setTimeout(()=>console.log('red'),10000)
let der = setTimeout(()=>console.log('red'),10000)



console.log(set)
console.log(der)
/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

let btnStart = document.querySelector('.js-start')
let btnStop= document.querySelector('.js-stop')
btnStart.addEventListener('click', handlerBtnstartClick)
let id ;
let clear = false;
function handlerBtnstartClick(ev){ 
     if(clear)return;
    id = setInterval(()=>{
    let color = colors[Math.floor(Math.random()*(colors.length))];
     document.querySelector('body').style.backgroundColor = color
  }, 1000)
  clear = true;
  
}
btnStop.addEventListener('click', handlerBtnStopClick)
function handlerBtnStopClick(){
clearInterval(id)
  clear = false
}
  /* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

function getFormattedTime(time) {
    let red = new Date(time);
     let mili = red.getMilliseconds();
   return string = `${red.getMinutes()}:${red.getSeconds()}.${mili.toString().slice(0,1)}`
 }
 
 
 console.log(
   getFormattedTime(1523621052858)
 ); // 04:12.8
 
 console.log(
   getFormattedTime(1523621161159)
 ); // 06:01.1
 
 console.log(
   getFormattedTime(1523621244239)
 ); // 07:24.2
 /* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: false
};

startBtn.addEventListener('click',startTimer)
stopBtn.addEventListener('click', stopTimer)
/*
* Вспомогательные функции
*/
function startTimer(){
  if(timer.id)return; 
  timer.startTime = Date.now();
  timer.id = setInterval(()=>{
    currentTime = Date.now();
    timer.deltaTime = currentTime - timer.startTime;
    updateClockface(clockface, timer.deltaTime)
  }, 100)
  
}
function stopTimer(){
  clearInterval(timer.id)
  timer.id = false;
  clockface.textContent = '00:00.0';
}

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(elem, time) {
    let red = new Date(time);
     let mili = red.getMilliseconds();
   return  elem.textContent =`${red.getMinutes()}:${red.getSeconds() < 10 ? 0+red.getSeconds():red.getSeconds()}.${mili.toString().slice(0,1) < 10? 0+mili.toString().slice(0,1) : mili.toString().slice(0,1)}`}

/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}
