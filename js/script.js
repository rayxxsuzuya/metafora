document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.header__button');
  const modal = document.querySelector('.header-modal');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const isActive = button.classList.contains('active');

    if (isActive) {
      button.classList.remove('active');
      modal.classList.remove('active');
    } else {
      button.classList.add('active');
      modal.classList.add('active');
    }
  });

  document.addEventListener('click', (e) => {
    if (!modal.contains(e.target) && !button.contains(e.target)) {
      button.classList.remove('active');
      modal.classList.remove('active');
    }
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

const pageSlider = new Swiper('.page-slider__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,

  pagination: {
    el: '.page-slider .swiper-pagination',
  },

  navigation: {
    nextEl: '.page-slider__slider .swiper-button-next',
    prevEl: '.page-slider__slider .swiper-button-prev',
  },

});

const blogSlider = new Swiper('.blog__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
});

const eventsSlider = new Swiper('.events__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
});

const buttonUp = document.querySelector('.button-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1000) {
    buttonUp.classList.add('active');
  } else {
    buttonUp.classList.remove('active');
  }
});

buttonUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

var acc = document.getElementsByClassName("accordion");

// Открываем первый аккордион при загрузке
if (acc.length > 0) {
  acc[0].classList.add("active");
  const panel = acc[0].nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
}

// Обработчики клика для всех аккордионов
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}