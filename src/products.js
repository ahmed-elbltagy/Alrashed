
window.addEventListener('load', function() {
  // active loader
  const loader = document.querySelector('.loader');
  loader.classList.add( 'loader-hidden' );
  // AOS
  AOS.init();
  })

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

// Add products
document.addEventListener('DOMContentLoaded', function() {
  const lang = document.documentElement.lang;
  const jsonFile = lang === 'ar' ? '/data/products-ar.json' : '/data/products-en.json';
  fetch(jsonFile)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const products = [...data.products];
      const container = document.querySelector('.products__container');
      products.forEach(product => {
        const productElement = document.createElement('div');
            productElement.className = `product__card mix ${product.category}`;
            productElement.setAttribute( 'data-description', product.name );
            productElement.innerHTML = `
              <div class="product__img">
                <img class="img" src="${product.img}" alt="${product.name}" aria-label="${product.name}" loading="lazy">
              </div>
              `;
              container.appendChild(productElement);
      } );
      // Add mixitup to products
            var mixer = mixitup(container, {
              selectors: {
                target: '.product__card'
              },
              animation: {
                duration: 500,
                nudge: true,
                reverseOut: false,
                effects: 'fade scale(.1)',
                easing: 'ease-out',
                clampHeight: true,
                staggerSequence: function(i) {
                  return i % 2 === 0 ? 1 : -1;
                },
                animateResizeTargets: true,
                animateResizeContainer: true,
              }
            });
    })
    .catch(error => console.error('Error loading products:', error));
} );

// Add active filter to products
const filterButtons = document.querySelectorAll('.filter__btn');
filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    filterButtons.forEach(btn => btn.classList.remove('active__btn')); 
    this.classList.add('active__btn'); 
  });
});