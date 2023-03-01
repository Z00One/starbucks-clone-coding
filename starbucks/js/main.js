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

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  const scrollValue = window.scrollY

  if (scrollValue > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  }
  else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));

const fadeEls = document.querySelectorAll(".visual .fade-in");

// Set the delay value to 0.7 seconds difference for each element
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * .7,
  });
});

// Swiper - Make elements to swiping
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
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

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

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');

const controller = new ScrollMagic.Controller();
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,                // Specifies the element to monitor
      triggerHook: .8                       // The part where monitoring starts based on the viewport height (0 ~ 1)
    })
    .setClassToggle(spyEl, 'show')          // Add 'show' class to monitored spyEl
    .addTo(controller);   //
});