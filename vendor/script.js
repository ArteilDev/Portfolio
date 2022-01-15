'use strict'

//-------------Скролл к разделу--------------------
$(function(){
    jQuery.fn.autoscroll = function(selector) {
      $('html, body').animate({
        scrollTop: $(this).offset().top -100
      }, 100);
  }
    
    $('.home-button').on('click', function(){
      $('.homepage').autoscroll();
    });

    $('.about-button').on('click', function(){
        $('.about-block').autoscroll();
    });

    $('.projects-button').on('click', function(){
        $('.projects-block').autoscroll();
      });

    $('.skills-button').on('click', function(){
      $('.skills-block').autoscroll();
    });

    $('.contact-button').on('click', function(){
        $('.contact-block').autoscroll();
    });
  });
//-------------------------------------------------

//-------------Активный пункт меню-----------------
window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY + 150;
    document.querySelectorAll('.section').forEach((el, i) => {
        if (el.offsetTop - document.querySelector('.navbar-nav').clientHeight <= scrollDistance+100) {
            document.querySelectorAll('.navbar-nav a').forEach((el) => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active');
                }
            });
        
            document.querySelectorAll('.navbar-nav li')[i].querySelector('a').classList.add('active');
        }
    });
});
//------------------------------------------------

//----------------Отправка формы-------------------

let validateForms = function (selector, rules, soccessModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function(form) {
            let formData = new FormData(form);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Success');
                    }
                }
            }

            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);
            form.reset();
        }
    });
}

validateForms('.form', { name: {required: true}, email: {required: true, email: true}, message: {required: true} }, '.thanks-popup', 'send goal' );

//-------------------------------------------------