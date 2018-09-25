
const event = reqire('events')

// emiter start //

const btn = document.querySelector('.btn');
const emitter= new event.EventEmitter();
console.log(emitter);
btn.addEventListener('click', ()=>{
    let der = 'push in button'
    emitter.emit('red', der);
})

setTimeout(() => {
    emitter.subscribe('red', data=>{
        console.log(data);
    })
}, 2000);