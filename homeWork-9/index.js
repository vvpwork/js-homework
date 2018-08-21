'use strict'
class Timer {
  constructor (elem) {
    this.id = null
    this.deltaTime = null
    this.startTime = null
    this.activeTimer = 'start'
    this.elem = elem
    this.template = `<div class="stopwatch">
         <p class="time js-time">00:00.0</p>
        <button class="btn js-start">start</button>
        <button class="btn js-take-lap">Lap</button>
        <button class="btn js-reset">reset</button>
      </div>
      <ul class="laps js-laps"></ul>`
  }

  btnStart () {
    return this.elem.querySelector('.js-start')
  }
  btnReset () {
    return this.elem.querySelector('.js-reset')
  }
  timerView () {
    return this.elem.querySelector('.js-time')
  }
  btnLap () {
    return this.elem.querySelector('.js-take-lap')
  }
  lap () {
    return this.elem.querySelector('.js-laps')
  }
  addTimer () {
    this.elem.insertAdjacentHTML('beforeend', this.template)
    this.timerStart()
    this.timerReset()
    this.addItems()
  }
  timerStart () {
    this.btnStart().addEventListener('click', this.handlerStart.bind(this))
  }

  handlerStart () {
    if (this.activeTimer == 'start') {
      this.startTime = Date.now()
      this.id = setInterval(() => {
        let currentTime = Date.now()
        this.deltaTime = currentTime - this.startTime
        this.timerView().textContent = this.addFace()
      }, 100)
      this.activeTimer = 'pause'
      this.btnStart().textContent = 'pause'
    } else if (this.activeTimer == 'pause') {
      this.btnStart().textContent = 'continue'
      this.activeTimer = 'continue'
      this.delta = this.deltaTime
      clearInterval(this.id)
    } else if (this.activeTimer == 'continue') {
      this.startTime = Date.now()
      this.id = setInterval(() => {
        let currentTime = Date.now()
        this.deltaTime = currentTime - this.startTime + this.delta
        this.timerView().textContent = this.addFace()
      }, 100)
      this.activeTimer = 'pause'
      this.btnStart().textContent = 'pause'
    }
  }

  timerReset () {
    this.btnReset().addEventListener('click', this.handlerReset.bind(this))
  }
  handlerReset () {
    if (this.activeTimer == 'start');
    clearInterval(this.id)
    this.activeTimer = 'start'
    this.btnStart().textContent = 'start'
    this.timerView().textContent = '00:00.0'
    this.lap().textContent = ''
  }

  addFace () {
    let time = new Date(this.deltaTime)
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let miliSeconds = time.getMilliseconds().toString().slice(0, 1)
    let strin = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${miliSeconds}`
    return strin
  }
  addItems () {
    this.btnLap().addEventListener('click', this.handlerLap.bind(this))
  }
  handlerLap () {
    let arr = []
    arr.push(this.deltaTime)
    for (let res of arr) {
      this.lap().insertAdjacentHTML(
        'beforeend',
        `<li>${this.addFace(res)}</li>`
      )
    }
  }
}

let past = document.querySelector('.firstTimer')
let time = new Timer(past)
time.addTimer()
let red = document.querySelector('.secondTimer')
let timeTwo = new Timer(red)
timeTwo.addTimer()
