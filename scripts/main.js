'use strict'; 

$(document).ready(function(){  
  checkWindowSize();
  
  navbarChangeOnScroll();

  $(window).scroll(function() {  
    navbarChangeOnScroll();
  });
  
  $(window).resize(function() {
    checkWindowSize();
    navbarChangeOnScroll();
  });
  
});

function navbarChangeOnScroll(){
  // change the navbar when you scroll 
  let stickySidebar = $('.about').offset().top;
  stickySidebar= stickySidebar-95;
  if ($(window).scrollTop() > stickySidebar) {
    $('.nav-link').css('color', '#e74c3c');
    $('.nav-link').css('animation', 'font-color 30s infinite');
    $('.nav-link').css('-webkit-animation', 'font-color 30s infinite');

    // $('.mobile .nav-link').css('color', 'white');
    // $('.mobile .nav-link').css('animation', 'none');
    // $('.mobile .nav-link').css('-webkit-animation', 'none');
      
    $('.navbar-brand').css('color', '#e74c3c');
    $('.navbar-brand').css('animation', 'font-color 30s infinite');
    $('.navbar-brand').css('-webkit-animation', 'font-color 30s infinite');
    $('.navbar').css('background-color', 'black');
    $('.navbar').css('transition', ' background-color 1s');
    // $('.navbar').css('border-color', '#e74c3c');
    $('.navbar').css('transition', ' border-color 1s');
    $('.navbar').css('animation', 'border-color 30s infinite');
    $('.navbar').css('-webkit-animation', 'border-color 30s infinite');
    $('.welcome_section').css('animation', 'none');
    $('.welcome_section').css('-webkit-animation', 'none');

    $('.custom-toggler.navbar-toggler ').css('border-color', '#e74c3c');
    $('.custom-toggler.navbar-toggler ').css('animation', 'border-color 30s infinite');
    $('.custom-toggler.navbar-toggler ').css('-webkit-animation', 'border-color 30s infinite');
    $('.fa-bars').css('color', '#e74c3c');
    $('.fa-bars').css('animation', 'font-color 30s infinite');
    $('.fa-bars').css('-webkit-animation', 'font-color 30s infinite');
    $('footer').css('animation', 'bg-color 30s infinite');
    $('footer').css('-webkit-animation', 'bg-color 30s infinite');
      
  }
  else {
    $('.nav-link').css('color', 'black');
    $('.nav-link').css('animation', 'none');
    $('.nav-link').css('-webkit-animation', 'none');
      
    $('.navbar-brand').css('color', 'black');
    $('.navbar-brand').css('animation', 'none');
    $('.navbar-brand').css('-webkit-animation', 'none');
    $('.navbar').css('transition', 'background-color 1s');
    $('.navbar').css('background-color', '#e74c3c');
    $('.navbar').css('animation', 'bg-color 30s infinite');
    $('.navbar').css('-webkit-animation', 'bg-color 30s infinite');
    // $('.navbar').css('border-color', 'transparent');
    $('.navbar').css('transition', ' border-color 1s');
    $('.welcome_section').css('animation', 'border-color 30s infinite');
    $('.welcome_section').css('-webkit-animation', 'font-color 30s infinite');
 
    $('.custom-toggler.navbar-toggler ').css('border-color', 'black');
    $('.custom-toggler.navbar-toggler ').css('animation', 'none');
    $('.custom-toggler.navbar-toggler ').css('-webkit-animation', 'none');
    $('.fa-bars').css('color', 'black');
    $('.fa-bars').css('animation', 'none');
    $('.fa-bars').css('-webkit-animation', 'none');
    $('footer').css('animation', 'none');
    $('footer').css('-webkit-animation', 'none');
  }  
}

function checkWindowSize(){
  if (window.innerWidth < 900){
    $('.collapse').css('opacity', '0');
    $('.collapse').css('display', 'block');
    $('.collapse').css('height','0');
    $('.brand1').css('opacity',1);
    $('.brand2').css('opacity',0);
    $('.brand2').css('display','block');
    $('.brand2').css('height','0');
    $('.brand2').css('width','0');
    $('.nav-link').fadeTo(1000,1);
  }
  else{
    $('.collapse').css('display', 'flex');
    $('.collapse').css('opacity', '1');
    $('.collapse').css('height','auto');
    $('.brand1').css('opacity',0);
    $('.brand2').css('opacity',1);
    $('.brand2').css('height','auto');
    $('.brand2').css('width','auto');
    $('.nav-link').fadeTo(1000,1);
  }
}

function toggleNavbar(){
  // $('.mobile').slideToggle('slow');
  if ($('.collapse').css('opacity') === '1'){
    $('.collapse').css('opacity','0');
    $('.collapse').css('height','0');
    $('.collapse').css('display', 'block');
  }
  else{
    $('.collapse').css('opacity','1');
    $('.collapse').css('height','auto');
    $('.collapse').css('display', 'block');
  }
}