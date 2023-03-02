// HEADER SECTION - search
const searchEl = document.querySelector('.search');
console.log(searchEl)
const searchInputEl = searchEl.querySelector('input');
console.log(searchInputEl)

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})


// HEADER SECTION - Badge & Button that makes value of scroll to 0
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  // When a scroll event of the window object occurs
  const scrollValue = window.scrollY

  if (scrollValue > 500) {
    gsap.to(badgeEl, .6, {       // Badge - invisible
      opacity: 0,
      display: 'none'
    });
    
    gsap.to(toTopEl, .2, { // Button - visible
      opacity: 1,
      x: 0
    });
  }
  else {
    gsap.to(badgeEl, .6, {       // Badge - visible
      opacity: 1,
      display: 'block'
    });

    gsap.to(toTopEl, .2, { // Button - invisible
      opacity: 0,
      x: 100
    });
  }
  // a delay is given so that it occurs once every 300 ms in the number of occurrence cycle of the method that is executed.
}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0                  // Option of gsap that makes scroll value to 0
  })
})


// VISUAL SECTION
const fadeEls = document.querySelectorAll(".visual .fade-in");

// Set the delay value to 0.7 seconds difference for each element
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * .7,
  });
});


//// Swiper - Make elements to swiping
// notice
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal', -> default value
  slidesPerView: 3,     // number of slides in one time
  spaceBetween: 10,     // distance between slides
  centeredSlides: true, // location of the main slide
  loop: true,
  autoplay: {
    delay: 5000         // 5000ms
  },
  pagination: {         // pagination bar with a round shape
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {         // It makes possible to making pagination that i made
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

// awards
new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,     
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})
////


// NOTICE SECTION - promotion
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  }
  else {
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
};

function floatingObject(selector, delay, size) {
  gsap.to(selector,               // select element
    random(1.5, 2.5),             // animation action time
    { // 옵션
      y: size,                    // move along the y-axis
      repeat: -1,                 // repeat -> -1
      yoyo: true,                 // move to original position
      ease: Power1.easeInOut,     // gsap - easing
      delay: random(0, delay)
    });
};

// Making different animation on each element
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// Making all sections that have class of scroll-spy to have animation
const spyEls = document.querySelectorAll('section.scroll-spy');

const controller = new ScrollMagic.Controller();
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,                // Specifies the element to monitor
      triggerHook: .8                       // The part where monitoring starts based on the viewport height (0 ~ 1)
    })
    .setClassToggle(spyEl, 'show')          // Add 'show' class to monitored spyEl
    .addTo(controller);
});


// Inputing value of date in class of this-year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();