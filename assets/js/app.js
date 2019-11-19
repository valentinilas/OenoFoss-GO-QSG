if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}


// slick slider
var slickOptions = {
  dots: false,
  speed: 500,
  infinite:false,
  slidesToShow: 1,
  lazyLoad: 'progressive',
  adaptiveHeight: true,
  prevArrow: document.querySelector('.btn-back'),
  nextArrow: document.querySelector('.btn-next')

};
// update progress
var $progressBar = $('.progress__inner');
var $progressBarLabel = $( '.slider__label' );

$('.slide-container').on('afterChange init', function(event, slick, currentSlide, nextSlide){

  var slideCount = slick.slideCount;
  var slideCurrent = slick.currentSlide;
  var calc = ( (slideCurrent) / (slick.slideCount - 1) ) * 100;

  $progressBar.css('width', calc + '%');

  $('.slide-current-number').text(slideCurrent + 1);
  $('.slide-total-number').text(slideCount);



  if((slideCurrent + 1) == slideCount){
    //hide next button at the end
    $('.btn-next').addClass('disabled');
  }
  else{
    $('.btn-next').removeClass('disabled');
  }
  if(slideCurrent == 0){
    $('.btn-back').addClass('disabled');
  }
  else{
    $('.btn-back').removeClass('disabled');
  }


});




$(document).on("click",function(e){
  var clickTarget = e.target;

  // modal
  if(clickTarget.closest("#help-button")){
    $('#modal-help').addClass('active');

  }
  if(clickTarget.closest(".youtube-link")){
    var yt = $(clickTarget).attr('data-yt');

    $('#modal-youtube').find('iframe').attr('src','//www.youtube.com/embed/'+yt+'?controls=0');
    $('#modal-youtube').addClass('active');

  }
  if(clickTarget.closest('.close-modal')){
    $('#modal-youtube').find('iframe').attr('src','');
      $('.modal').removeClass('active');
  }

  // progress
  if(clickTarget.closest('.initialize-app')){
    $('#app').addClass('initialized');
    if(!$('.slide-container').hasClass('slick-initialized')){
      $('.slide-container').slick(slickOptions);
    }
    $('.slide-container').slick('slickGoTo', 0);
    $('#modal-infobox').addClass('active');

  }
  if(clickTarget.closest('.foss-logo')){
    $('#app').removeClass('initialized')
  }
});
