(function($) {
$(function() {

	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);


$(document).ready(function(){
	$(".scroll-to").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});



     		$(function() {
					$('#example1 a').Chocolat();
				
				});
     
     
      $(function (){
            if($('#chose_file').length)
            {
                $('#chose_file').click(function(){
                    $('#chose_file_input').click();
                    return(false);
                });

                $('#chose_file_input').change(function(){
                    $('#chose_file_text').html($(this).val());
                }).change(); // .change() в конце для того чтобы событие сработало при обновлении страницы
            }
        });
        
        
         $(function (){
            if($('#chose_file2e').length)
            {
                $('#chose_file2e').click(function(){
                    $('#chose_file_inputn').click();
                    return(false);
                });

                $('#chose_file_inputn').change(function(){
                    $('#chose_file_textn').html($(this).val());
                }).change(); // .change() в конце для того чтобы событие сработало при обновлении страницы
            }
        });
        
        
        
               
         $(function (){
            if($('#chose_file3e').length)
            {
                $('#chose_file3e').click(function(){
                    $('#chose_file_inputn2').click();
                    return(false);
                });

                $('#chose_file_inputn2').change(function(){
                    $('#chose_file_textn2').html($(this).val());
                }).change(); // .change() в конце для того чтобы событие сработало при обновлении страницы
            }
        });
        
        
            $(function (){
            if($('#chose_file4e').length)
            {
                $('#chose_file4e').click(function(){
                    $('#chose_file_inputn3').click();
                    return(false);
                });

                $('#chose_file_inputn3').change(function(){
                    $('#chose_file_textn3').html($(this).val());
                }).change(); // .change() в конце для того чтобы событие сработало при обновлении страницы
            }
        });
        
        
         
            $(function (){
            if($('#chose_file5e').length)
            {
                $('#chose_file5e').click(function(){
                    $('#chose_file_inputn4').click();
                    return(false);
                });

                $('#chose_file_inputn4').change(function(){
                    $('#chose_file_textn4').html($(this).val());
                }).change(); // .change() в конце для того чтобы событие сработало при обновлении страницы
            }
        });
        
        
        
              $(function (){
            if($('#chose_file2').length)
            {
                $('#chose_file2').click(function(){
                    $('#chose_file_input2').click();
                    return(false);
                });

                $('#chose_file_input2').change(function(){
                    $('#chose_file_text2').html($(this).val());
                }).change(); // .change() в конце для того чтобы событие сработало при обновлении страницы
            }
        });


$(document).ready(function(){
    $('.search').click(function(){
        $('.search-input').show('');
    });
});





$('.close-menu').click(function(){
    $('.sub-menu1').hide();
    $('.sub-menu2').hide();
    $('.sub-menu3').hide();
    $('.sub-menu4').hide();
});




$('.open-menu1').click(function(){
    $('.sub-menu1').toggle();
});

$(document).mouseup(function (e) {
    var container = $(".sub-menu1");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});


$('.open-menu2').click(function(){
    $('.sub-menu2').toggle();
});

$(document).mouseup(function (e) {
    var container = $(".sub-menu2");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});


$('.open-menu3').click(function(){
    $('.sub-menu3').toggle();
});

$(document).mouseup(function (e) {
    var container = $(".sub-menu3");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});


$('.open-menu4').click(function(){
    $('.sub-menu4').toggle();
});

$(document).mouseup(function (e) {
    var container = $(".sub-menu4");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});




	            $(document).ready(function() { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    var overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0, top: '45%'}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });
});


   var swiper = new Swiper('.swiper-container', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        speed: 700,
        autoplay: 5500,
        freeMod: false,
        loop: true,

    });
    
    
    
       var swiper = new Swiper('.swiper-container2', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
         slidesPerView: 2,
        speed: 700,
        autoplay: 5500,
        freeMod: false,
        loop: true,

    });




    var swiper = new Swiper('.partners', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true,
        speed: 500,
         autoplay: 5500,
         loop: true,
    });

        // Как только будет загружен API и готов DOM, выполняем инициализацию
        ymaps.ready(init);
 
        function init () {
            // Создание экземпляра карты и его привязка к контейнеру с
            // заданным id ("map")
            var myMap = new ymaps.Map('map', {
                    // При инициализации карты, обязательно нужно указать
                    // ее центр и коэффициент масштабирования
                                        center: [55.8203506,37.5946594],
                    zoom: 15,  controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
                });
               myMap.behaviors.disable('scrollZoom');
 
  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '127322, Москва, Огородный проезд, д.20, стр.4'
        }, {
            // Опции.
            // Необходимо указать данный тип проекта.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [194, 121],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -70]
        });

    myMap.geoObjects.add(myPlacemark);

        }