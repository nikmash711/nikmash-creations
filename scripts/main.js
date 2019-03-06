'use strict'; 

/*GLOBALS for CSS Manipulation*/
const collapsible = $('.collapse');
const navLink = $('.nav-link');
const navBrand = $('.navbar-brand');
const navbar = $('.navbar');
const navToggler = $('.navbar-toggler');
const welcomeSection = $('.welcome-section');
const hamburgerBars = $('.fa-bars');
const footer = $('footer');
const brand1 = $('.brand1');
const brand2 = $('.brand2');

/*HELPER FNS*/
const mobileView = () => {
  return window.innerWidth < 900 ? true : false;
};

/* EVENT LISTENERS */
$('.navbar-toggler').click(()=>{
  const isOpen = $(collapsible).css('opacity') === '1';
  if (isOpen){
    closeNavbar(collapsible);
  }
  else{
    openNavbar(collapsible);
  }
});

$('.nav-link').click(()=>{
  if(mobileView()){
    closeNavbar(collapsible);
  }
});

$('#top-of-page').click((e)=>{
  let target = $(e.target);
  //if the click is outside the navbar, and the navbar is on mobile and open, close it
  if(!target.closest('.navbar').length && mobileView()) {
    closeNavbar(collapsible);
  } 
});


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


/** Change the CSS of the navbar depending on where on the page we've scrolled to */
function navbarChangeOnScroll(){
  let stickySidebar = $('.creations').offset().top;
  stickySidebar= stickySidebar-95;
  if ($(window).scrollTop() > stickySidebar) {
    $(navLink).addClass('black-magic');
    $(navLink).removeClass('rainbow');
    $(navBrand).addClass('black-magic');
    $(navBrand).removeClass('rainbow');
    $(navbar).addClass('black-magic');
    $(navbar).removeClass('rainbow');
    $(hamburgerBars).addClass('black-magic');
    $(hamburgerBars).removeClass('rainbow');
    $(navToggler).addClass('just-border');
    $(welcomeSection).removeClass('just-font');    
    $(footer).addClass('just-background');
  }
  else {
    $(navLink).removeClass('black-magic');
    $(navLink).addClass('rainbow');
    $(navBrand).removeClass('black-magic');
    $(navBrand).addClass('rainbow');
    $(navbar).removeClass('black-magic');
    $(navbar).addClass('rainbow');
    $(hamburgerBars).removeClass('black-magic');
    $(hamburgerBars).addClass('rainbow');
    $(navToggler).removeClass('just-border');
    $(welcomeSection).addClass('just-font');
    $(footer).removeClass('just-background');
  }  
}

function checkWindowSize(){
  if (mobileView()){
    $(collapsible).css('opacity', '0');
    $(collapsible).css('display', 'block');
    $(collapsible).css('height','0');
    $(navLink).attr('tabindex', -1);
    $(brand2).attr('tabindex', -1);
    $(brand1).css('opacity',1);
    $(brand2).css('opacity',0);
    $(brand2).css('display','block');
    $(brand2).css('height','0');
    $(brand2).css('width','0');
    $(navLink).fadeTo(1000,1);
    $(navToggler).removeClass('toggle-border');
    $(navToggler).attr('tabindex', 0);
  }
  else{
    $(collapsible).css('display', 'flex');
    $(collapsible).css('opacity', '1');
    $(collapsible).css('height','auto');
    $(navLink).attr('tabindex', 0);
    $(brand2).attr('tabindex', 0);
    $(brand1).css('opacity',0);
    $(brand1).attr('tabindex', -1);
    $(brand2).css('opacity',1);
    $(brand2).css('height','auto');
    $(brand2).css('width','auto');
    $(navLink).fadeTo(1000,1);
    $(navToggler).addClass('toggle-border');
    $(navToggler).attr('tabindex', -1);
  }
}

const closeNavbar = (collapsible) => {
  $(collapsible).css('opacity','0');
  $(collapsible).css('height','0');
  $(collapsible).css('display', 'block');
  $(navLink).attr('tabindex', -1);
  $(navToggler).attr('aria-expanded', 'false');
};

const openNavbar = (collapsible) => {
  $(collapsible).css('opacity','1');
  $(collapsible).css('height','auto');
  $(collapsible).css('display', 'block');
  $(navLink).attr('tabindex', 0);
  $(navToggler).attr('aria-expanded', 'true');
};