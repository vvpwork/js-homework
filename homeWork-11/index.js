'use strict'
const laptops = [
  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.'
  }
]

const refs = {
  sub: document.querySelector('button[type=submit]'),
  input: Array.from(document.querySelectorAll('input[type=checkbox]')),
  form: document.querySelector('.form'),
  list: document.querySelector('.card__list'),
  items: document.querySelector('.card__templates')
}

refs.form.addEventListener('submit', handlerSubmit)

function handlerSubmit (ev) {
  ev.preventDefault()
  refs.list.innerHTML = ''
  let cardPast;
  let filter = {
    date: [],
    color: [],
    size: []
  }
  checkInput(filter)
  switch (true) {
    case filter.size.length > 0:
      cardPast = sizeFilter(filter)
      break
    case filter.color.length > 0:
      cardPast = colorFilter(filter)
      break
    case filter.date.length > 0:
      cardPast = dateFilter(filter)
      break
  }

  cards(cardPast)
  console.log(cardPast)
}

function sizeFilter (filter) {
  let card = []
  laptops.map(i => {
    return filter.size.includes(i.size) ? card.push(i) : i
  })
  card = card.filter(i => {
    if (filter.color.length < 1) return card
    return filter.color.includes(i.color)
  })
  card = card.filter(i => {
    if (filter.date.length < 1) return card
    return filter.date.includes(i.release_date)
  })
  return card
}

function colorFilter (filter) {
  let card = []
  laptops.map(i => {
    return filter.color.includes(i.color) ? card.push(i) : null
  })
  card = card.filter(i => {
    if (filter.date.length < 1) return card
    return filter.date.includes(i.release_date)
  })
  card = card.filter(i => {
    if (filter.size.length < 1) return card
    return filter.size.includes(i.size)
  })
  return card
}
function dateFilter (filter) {
  let card = []
  laptops.map(i => {
    return filter.date.includes(i.release_date) ? card.push(i) : null
  })
  card = card.filter(i => {
    if (filter.color.length < 1) return card
    return filter.color.includes(i.color)
  })
  card = card.filter(i => {
    if (filter.size.length < 1) return card
    return filter.size.includes(i.size)
  })
  return card
}
function checkInput (filter) {
  let check = refs.input.filter(r => r.checked)
  check.map(r => {
    switch (r.name) {
      case 'release_date':
        filter.date.push(Number(r.value))
        break
      case 'color':
        filter.color.push(r.value)
        break
      case 'size':
        filter.size.push(Number(r.value))
        break
    }
  })
}

function cards (cardPast) {
  let template = Handlebars.compile(refs.items.innerHTML.trim())
  let cer = cardPast.reduce((acc, el) => acc + template(el), '')
  refs.list.innerHTML = cer
}
