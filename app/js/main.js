$(function () {
  $('.slider__inner').slick({
    dots: false,
    prevArrow: '<button type="button" class="slider__arrow slider__arrow--left"></button>',
    nextArrow: '<button type="button" class= "slider__arrow slider__arrow--right"></button>'
  });

  
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});

