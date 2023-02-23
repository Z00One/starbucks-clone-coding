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