$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                arrows: true,
                dots: false
                }
            }
        ]
    });

    $('.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
        $(this)
          .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_activ').eq($(this).index()).addClass('catalog__content_activ');
      });

    $('.catalog-item__link').each(function(i) {
    $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_activ');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_activ');
        })
    });

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_activ');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_activ');
            })
        });

    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.model__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').on('click', function(){
        $('.overlay, #order').fadeIn('slow');
    });

    // $('.button_mini').each(function(i) {
    //     $(this).on('click', function() {
    //         $('#order, .model__descr').text($('.catalog-item__subtitle').eq(i).text());
    //         $('.overlay, #order').fadeIn('slow');
    //     })
    // });

    function valideForm (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlenght: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                  required: "Пожалуйста введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Введите свой номер телефона",
                email: {
                    required: "Пожалуйста введите свою почту",
                    email: "Не правильно введен адрес почты"
                },
              }
        });
    };
    valideForm('#consultation-form');
    valideForm('#consultation form');
    valideForm('#order form');


    $('input[name=phone]').mask("+7(999) 999 99 99");
  });