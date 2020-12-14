// XML title

var xml="<?xml version = '1.0'?>"+
   "<head>GreenCars</head>"
parser = new DOMParser();
xmlDoc = parser.parseFromString(xml, "text/xml");
var names = xmlDoc.getElementsByTagName("head");
var title = document.getElementsByTagName("title");
title[0].innerHTML = names[0].innerHTML;

// Меню //

function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
       x.className += " responsive";
   } else {
       x.className = "topnav";
   }
}

// Всплывающее окно //

document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.open_modal'),
       overlay      = document.querySelector('.overlay'),
       closeButtons = document.querySelectorAll('.modal_close');

   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      });

   });

   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
	  });
	  
   });

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);

    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
	});
	
});

// Кнопка для перехода вверх //

$(function() {
 
   $(window).scroll(function() {   
      if($(this).scrollTop() > 250) { 
      $('#toTop').fadeIn();   
   } 
   
   else {    
      $('#toTop').fadeOut();    
   } 
   });
    
   $('#toTop').click(function() {   
      $('body,html').animate({scrollTop:0},800);    
   });
    
});
