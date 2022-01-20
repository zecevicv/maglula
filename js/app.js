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

/* #Testimonial Gallery Slider
    ======================================================= */
if (document.querySelector('.testimonial-gallery')) {
  new Swiper(".testimonial-gallery .swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".testimonial-gallery .swiper-pagination",
    },
  });
}

/* #Static Menu
    ======================================================= */
gsap.registerPlugin(ScrollTrigger);

const staticMenu = document.querySelector('.static-menu');
const staticMenuTop = document.querySelector('.static-menu .top');
const staticMenuBottom = document.querySelector('.static-menu .bottom');

if (staticMenu) {
  let topStartPosition = '';
  let endStartPosition = '';
  if (window.innerWidth > 1023) {
    topStartPosition = "0 30%";
  } else {
    topStartPosition = "0 15%";
  }

  if (window.innerWidth > 1023) {
    endStartPosition = "100% 15%";
  } else {
    endStartPosition = "100% 5%";
  }

  // Top
  ScrollTrigger.create({
    // markers: true,
    start: topStartPosition,
    end: endStartPosition,
    trigger: ".white-sections",
    onEnter: () => { 
      staticMenuTop.classList.add('dark');
    },
    onEnterBack: () => { 
      staticMenuTop.classList.add('dark');
    },
    onLeave: () => { 
      staticMenuTop.classList.remove('dark');
    },
    onLeaveBack: () => { 
      staticMenuTop.classList.remove('dark');
    }
  });

  // Bottom
  ScrollTrigger.create({
    // markers: true,
    start: "0 98%",
    end: "100% 92%",
    trigger: ".white-sections",
    onEnter: () => { 
      staticMenuBottom.classList.add('dark');
    },
    onEnterBack: () => { 
      staticMenuBottom.classList.add('dark');
    },
    onLeave: () => { 
      staticMenuBottom.classList.remove('dark');
    },
    onLeaveBack: () => { 
      staticMenuBottom.classList.remove('dark');
    }
  });
}
