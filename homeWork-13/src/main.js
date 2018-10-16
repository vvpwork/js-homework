import Model from  './js/module';
import View from './js/view';
import Controler from './js/controler';


import style from './scss/styles.scss';


const model = new Model();
const view = new View();
const control = new Controler(view, model); 


model.setLocalStorageObjectItem('url_list', ['https://github.com/', 'https://schoology.com/']);
model.startUrlList()
let ed = [
    {
        title: 'red',
        description: 'ererererer'
    },
    {
        title: 'jhjhj',
        description: '334343434'
    },
    {
        title: 'edf',
        description: '5656565656'
    }
]
let red = function(){
    return new Promise((resolve, reject)=>{
        resolve(
           model.previewList()
        )
        reject('error')
    })
} 

red().then(d=> {
   console.log(d)
})





