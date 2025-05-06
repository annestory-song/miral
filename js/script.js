$(function () {
 $('nav').mouseenter(function () {
  // menu에 마우스를 올리면
  $(this).find('.sub').stop().slideDown();
  // (this)menu안에 있는 .sub를 찾아서 슬라이드다운 
  $('body').find('.subBg').stop().slideDown();
 })
 $('nav').mouseleave(function () {
  $(this).find('.sub').stop().slideUp();
  $('body').find('.subBg').stop().slideUp();
 }) 
  // end
})