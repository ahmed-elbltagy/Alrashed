
window.addEventListener('load', function() {
// active loader
  const loader = document.querySelector('.loader');
  loader.classList.add( 'loader-hidden' );
// AOS
  AOS.init();
});

// Scroll to top button
const scroll__btn = document.querySelector(".scroll__btn");
if (scroll__btn) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 570) {
      scroll__btn.classList.add("scroll__btn--active");
    } else {
      scroll__btn.classList.remove("scroll__btn--active");
    }
  });
  scroll__btn.onclick = function() {
    setTimeout(function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 300);
  };
}

// Add height-effect to header
if (document.querySelector('header .container')) {
  window.onscroll = function (){
    var navigation = document.querySelector('header .container');
    if ( window.innerWidth > 1200 ){
      if ( window.pageYOffset > 70 ){
        navigation.style.height = "65px";}
      else{
        navigation.style.height = "80px";}}
  };
}

// show and hide nav bar when click on toggle
let nav_bar = document.querySelector( ".header__nav" );
let toggle = document.querySelector( ".header__toggle" );
let toggle_open = document.querySelector( ".header__toggle-open" );
let toggle_close = document.querySelector( ".header__toggle-close" );
if (nav_bar && toggle && toggle_open && toggle_close) {
  toggle_open.addEventListener( 'click', function () {
    nav_bar.classList.add('show');
    toggle_open.style.display = "none";
    toggle_close.style.display="block";
  })
  toggle_close.addEventListener( 'click', function (){
    nav_bar.classList.remove('show');
    toggle_open.style.display="block";
    toggle_close.style.display="none";
  } );

  // hidden nav bar when clicked on any place in page
  window.addEventListener('mouseup',function(event){
    if(event.target != toggle && event.target.parentNode != toggle){
      nav_bar.classList.remove( "show" );
      toggle_close.style.display="none";
      toggle_open.style.display="block";
    }
  } );
}

// Add active to answer
document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq__question");
    const answer = item.querySelector(".faq__answer");
    const button = item.querySelector(".toggle__btn");
    const toggleAnswer = () => {
      faqItems.forEach((otherItem) => {
        const otherAnswer = otherItem.querySelector(".faq__answer");
        const otherButton = otherItem.querySelector(".toggle__btn");
        if (otherItem !== item) {
          otherAnswer.classList.remove("faq__answer-active");
          otherButton.style.rotate = "0deg";
        }
      });
      answer.classList.toggle("faq__answer-active");
      button.style.transform = button.style.transform === "rotate(45deg)" ? "rotate(0deg)" : "rotate(45deg)";
    };
    question.addEventListener("click", (e) => {
      e.preventDefault(); 
      toggleAnswer();
    });
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault(); 
      toggleAnswer();
    });
  });
});







