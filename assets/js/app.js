// slick
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

$('.slide-container').on('afterChange init', function(event,slick, currentSlide, nextSlide){

  var slideCount = slick.slideCount;
  var slideCurrent = slick.currentSlide;
  var calc = ( (slideCurrent) / (slick.slideCount - 1) ) * 100;

  $progressBar.css('width', calc + '%');

  $('.slide-current-number').text(slideCurrent + 1);
  $('.slide-total-number').text(slideCount);


});




$(document).on("click",function(e){
  var clickTarget = e.target;
  console.log(clickTarget);
  // modal
  if($(clickTarget).is("#help-button")){
    $('#modal-help').addClass('active');

  }
  if($(clickTarget).is(".youtube-link")){
    var yt = $(clickTarget).attr('data-yt');
    console.log(yt);

    $('#modal-youtube').find('iframe').attr('src','https://www.youtube.com/embed/'+yt+'?controls=0');
    $('#modal-youtube').addClass('active');

  }
  if($(clickTarget).is('.close-modal')){
    $('#modal-youtube').find('iframe').attr('src','');
      $('.modal').removeClass('active');
  }
  // toast
  if($(clickTarget).is('.toast, .toast .btn')){
    $('.toast').addClass('d-none');
  }
  // progress
  if($(clickTarget).is('.initialize-app')){
    $('#app').addClass('initialized');
    if(!$('.slide-container').hasClass('slick-initialized')){
      $('.slide-container').slick(slickOptions);
    }
    $('.slide-container').slick('slickGoTo', 0);
    $('#modal-infobox').addClass('active');

  }
  if($(clickTarget).is('.foss-logo')){
    $('#app').removeClass('initialized')
  }
});
