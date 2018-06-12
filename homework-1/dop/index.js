'use strict';

const sharm = 15;
const hurgada = 25;
const taba = 6;
let eror = "Oшибка ввода";
let tabaConfirm ;
let sharmConfirm;
let hurgadaConfirm;
let userInform = prompt('введите количество нужных мест');
if ( userInform < 0 ){
    alert(eror);
}else if(userInform != Number.parseInt(userInform)){
    alert(eror);
}else{
    switch(userInform > 0){
        case(userInform <= taba): tabaConfirm = confirm('согласны вы поехать с группой taba'); if (tabaConfirm === true) {
            alert("приятного путешествия в группе <taba>");
        }else{ alert('Нам очень жаль, приходите еще!');
        };break;
        case(userInform <= sharm):sharmConfirm = confirm('согласны вы поехать с группой sharm'); if (sharmConfirm ===  true) {
            alert("приятного путешествия в группе <sharm>");
        }else{ alert('Нам очень жаль, приходите еще!');
        };break;
        case(userInform <= hurgada): hurgadaConfirm = confirm('согласны вы поехать с группой hurgada');if (hurgadaConfirm ===  true) {
            alert("приятного путешествия в группе <hurgada>");
        }else{ alert('Нам очень жаль, приходите еще!');
        };break;
    }

}


 
// else if(userInform != Number.parseInt(userInform)){
//     alert(eror);
