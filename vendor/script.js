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

//-----------Анимация появления-------------------

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show')
    };
  });
};

let options = {
  threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);

let elements = document.querySelectorAll('.element-anim');

for (let elm of elements) {
  observer.observe(elm);
}

//------------------------------------------------