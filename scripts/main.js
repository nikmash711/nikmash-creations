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
  
  // clickOutsideNavbar();  
});

function navbarChangeOnScroll(){
  // change the navbar when you scroll 
  let stickySidebar = $('.about').offset().top;
  stickySidebar= stickySidebar-95;
  if ($(window).scrollTop() > stickySidebar) {
    $('.nav-link').css('color', '#e74c3c');
    $('.nav-link').css('animation', 'font-color 30s infinite');
    $('.nav-link').css('-webkit-animation', 'font-color 30s infinite');
    $('.mobile .nav-link').css('color', 'white');
    $('.mobile .nav-link').css('animation', 'none');
    $('.mobile .nav-link').css('-webkit-animation', 'none');
      
    $('.navbar-brand').css('color', '#e74c3c');
    $('.navbar-brand').css('animation', 'font-color 30s infinite');
    $('.navbar-brand').css('-webkit-animation', 'font-color 30s infinite');
    $('.navbar').css('background-color', 'black');
    $('.navbar').css('transition', ' background-color 1s');
    // $('.navbar').css('border-color', '#e74c3c');
    $('.navbar').css('transition', ' border-color 1s');
    $('.navbar').css('animation', 'border-color 30s infinite');
    $('.navbar').css('-webkit-animation', 'border-color 30s infinite');
    $('#welcome_text').css('animation', 'none');
    $('#welcome_text').css('-webkit-animation', 'none');
    //  $("#arrow_down").css("animation", "none");
    // $("#arrow_down").css("-webkit-animation", "none");
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
    $('#welcome_text').css('animation', 'border-color 30s infinite');
    $('#welcome_text').css('-webkit-animation', 'font-color 30s infinite');
    // $("#arrow_down").css("animation", "font-color 30s infinite");
    // $("#arrow_down").css("-webkit-animation", "font-color 30s infinite");
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
  if (window.innerWidth < 800){
    $('.collapse').css('display', 'none');
    $('.collapse').addClass('mobile');
    $('.brand1').fadeTo(1000,1);
  }
  else{
    $('.collapse').removeClass('mobile');
    $('.collapse').css('display', 'flex');
    $('.brand2').fadeTo(1000,1);
  }
}

function toggleNavbar(){
  $('.mobile').toggle();
}

function openModal(num){
  var modal = document.getElementsByClassName('myModal')[num];
  
  // Get the button that opens the modal
  // var btn = document.getElementById("myBtn");
  var btn = document.getElementsByClassName('myBtn')[num];
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close_it')[num];
  
  // When the user clicks the button, open the modal 
  // btn.onclick = function() {
  modal.style.display = 'block';
  // }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = 'none';
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}


// function clickOutsideNavbar(){
//   $(document).click(function (event) {
//     var clickover = $(event.target);
//     var $navbar = $('.navbar-collapse');               
//     var _opened = $navbar.hasClass('show');
//     if (_opened === true && !clickover.hasClass('navbar-toggle')) {      
//       $navbar.collapse('hide');
//     }
//   }); //this is so that clicking outside of navbar closes navbar/collapses WORKS ON COMPUTER  
// }

// Add smooth scrolling to all links
//   $('a').on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== '') {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 1500, function(){

//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });


// Problem with Safari: when its on an anchor, and you refresh from a different point in the page, it wont jump to the correct spot, but itll flicker white


// if (window.innerWidth < 576){
//   sr.reveal('.boxed', { duration: 2000, viewFactor: 0.4, rotate: { x: 100, y: 100, z: 0 },}); 
// }
// else{
//   sr.reveal('.boxed', {
//   distance: '200px', // Begin animation 500px away from its finishing position
//   duration: 500,
//   easing: 'cubic-bezier(.33,.35,0,1)',
//   origin: 'bottom' // Element will animate from the bottom
// }, 250);     
// }

//Modal Stuff: 

// Get the modal
// var modal = document.getElementById('myModal');


// $(window).bind("load", function() {  
//     document.getElementById("the_vid").src = "kbash_website_vid_mobile.mp4";
//     document.getElementById("my_vid").load();
// }); 

// need to change scrollreveal on safari bc it doesnt work well
// if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) 
// {
//   sr.reveal('.load-hidden', {scale: 0.85, duration: 1000,viewFactor: 0.2,});
// }
// else{
//   sr.reveal('.load-hidden', { duration: 1000, viewFactor: 0.2, rotate: { x: 50, y: 0, z: 0 },});
// }