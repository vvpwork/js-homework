import Model from './js/module';
import View from './js/view';
import Controler from './js/controler';

import style from './scss/styles.scss';

const model = new Model();
const view = new View();
const control = new Controler(view, model);

control.loadDesc();
control.addFormListener();
control.addUrlListener();
