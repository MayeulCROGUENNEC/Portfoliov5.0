/*___________________________________________________js__vidéo_________________________________________________ */
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
/*_______________________________________________JS__gallerie___________________________________________________*/
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});
