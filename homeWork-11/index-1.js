// /* 
//   Напишите функцию validate которая проверяет поля формы 
//   firstname и lastname и возвращает результат в виде 
//   обьекта со свойствами 'first name' и 'last name'.
  
//   Кроме того, формат объекта: в свойства записывается буль-флаг 
//   уведомляющий о статусе прохождения валидации для каждого поля.
//   {
//     'first name': true или false,
//     'last name': true или false,
//   }
  
//   Критерии валидации:
//   1)Имя. Допускается не более 2-х слов, разделенных пробелами
//   или дефисом. Слова должны состоять только из букв.
  
//   2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
//   или дефисом. Слова должны состоять только из букв.
  
//   При клике на кнопку submit должна происходить проверка.
//   Результат проверки, объект, выводить в консоль.
// */

// const firstname = document.getElementById("first_name");
// const lastname = document.getElementById("last_name");
// const submitBtn = document.getElementById("submit-btn");

// submitBtn.addEventListener("click", validate);

// function validate(evt) {
//   let obj={
//      first_name: true,
//     last_name: true,
//   };
//   obj.name = firstname.value;
//   obj.lastname = lastname.value;
//   if(obj.name.split(/[\s|-]/).length > 2 || obj.name.match(/\d/)){obj.first_name = false}
//   if(obj.lastname.split(/[\s|-]/).length > 2 || obj.lastname.match(/\d/)){obj.last_name = false}  
//   console.log(obj)
// }

// /*
//   К pen уже подключен Handlebars.
  
//   Создайте шаблон поста указаного во вкладке HTML.
//   Отрендерите список постов в DOM по данным из массива posts.
  
//   Если в объекте поле isFav=true, в посте должна быть 
//   разметка иконки избранного поста, в противном случае
//   разметки иконки быть не должно.
  
//   Используйте эту иконку для фона:
//   https://image.flaticon.com/icons/svg/290/290413.svg
// */

// const posts = [
//     { title: "post 1", text: "text 1", isFav: true },
//     { title: "post 2", text: "text 2", isFav: false },
//     { title: "post 3", text: "text 3", isFav: true },
//     { title: "post 4", text: "text 4", isFav: false }
//   ];
//   let div = document.querySelector('.post');
//   let template = Handlebars.compile(div.innerHTML.trim())
//   let marcap = posts.reduce((acc,val)=>acc + template(val),'');
//   div.innerHTML = marcap;
// /*
//   К pen уже подключен Handlebars.
  
//   Создайте шаблон списка указаного во вкладке HTML.
  
//   Отрендерите список в DOM по данным из массива listItems.
// */
// const listItems = [
//     { name: 'item 1', count: 2 },
//     { name: 'item 2', count: 4 },
//     { name: 'item 3', count: 12 },
//     { name: 'item 4', count: 29 },
//   ];
//   let red = document.querySelector('.list');
//   const template = Handlebars.compile(red.innerHTML.trim());
//   let past ='';
//   listItems.map(r=>{
//     past +=template(r);
//   })
//   red.innerHTML= past;  