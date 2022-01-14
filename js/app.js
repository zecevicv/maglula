/* #Testimonal Slider
  ======================================================= */
if (document.querySelector('.testimonial-slider .swiper')) {
  new Swiper(".testimonial-slider .swiper", {
    pagination: {
      el: ".testimonial-slider .swiper-pagination",
    },
  });
}

/* #Products Slider
  ======================================================= */
if (document.querySelector('.products-slider .swiper')) {
  new Swiper(".products-slider .swiper", {
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".products-slider .swiper-pagination",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: ".products-slider .next",
      prevEl: ".products-slider .prev",
    },
  });
}

/* #Is In Viewport
    ======================================================= */
function isInViewport(el) {

  const rect = el.getBoundingClientRect();

  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

  return (vertInView && horInView);
}

const whiteSections = document.querySelector('.white-sections');
const staticMenu = document.querySelector('.static-menu');

if (whiteSections) {
  window.addEventListener('scroll', (e) => {
    if (isInViewport(whiteSections)) {
      staticMenu.classList.add('dark');
    } else {
      staticMenu.classList.remove('dark');
    }
  });
}