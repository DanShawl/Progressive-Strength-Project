//  Menu variables
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLink = document.querySelectorAll('.nav__link');

//  Open and close menu
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('open-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('open-menu');
  });
}

//  Remove Menu
const linkClick = () => {
  navMenu.classList.remove('open-menu');
};
navLink.forEach((link) => link.addEventListener('click', linkClick));

//  Change navMenu text color
// if (screen.width >= 767) {
//   navLink.forEach((link) => link.classList.add)
// }

//  Change header background
const changeHeader = () => {
  const header = document.getElementById('header');
  const navHeaderItem = document.querySelectorAll('.nav__header-item');

  if (scrollY >= 50) {
    header.classList.add('change-header');

    navHeaderItem.forEach((item) => item.classList.add('nav-color'));
    navLink.forEach((link) => link.classList.remove('nav-color-alt'));
    navLink.forEach((link) => link.classList.add('nav-color'));
  } else {
    header.classList.remove('change-header');
    navHeaderItem.forEach((item) => item.classList.remove('nav-color'));
    navLink.forEach((link) => link.classList.add('nav-color-alt'));
    navLink.forEach((link) => link.classList.remove('nav-color'));
  }
};

window.addEventListener('scroll', changeHeader);

//  Testimonial Swiper
let testimonialSwiper = new Swiper('.testimonial-swiper', {
  spaceBetween: 30,
  loop: 'true',
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//  Success Story Swiper
let successSwiper = new Swiper('.success-swiper', {
  spaceBetween: 20,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: 'true',
  // freeMode: 'true',

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});

let stepsSwiper = new Swiper('.steps-swiper', {
  spaceBetween: 20,
  // loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: 'true',
  // freeMode: 'true',

  breakpoints: {
    // 0: {
    //   centeredSlides: 'true',
    // },

    576: {
      slidesPerView: 2.2,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2.5,
      centeredSlides: false,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 3,
      centeredSlides: false,
    },
  },

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
});

//  Accordion
// const question = document.getElementById('accordion-section');
// question.addEventListener('click', () => {
//   question.classList.toggle('opened');
// });

const questions = document.querySelectorAll('.accordion__section');
questions.forEach((question) => {
  const opener = question.querySelector('h3');
  opener.addEventListener('click', () => {
    [...questions]
      .filter((q) => q !== question)
      .forEach((q) => q.classList.remove('opened'));
    question.classList.toggle('opened');
  });
  // question.addEventListener('click', () => {
  //   question.classList.toggle('opened');
  // });
});

console.log(questions);
