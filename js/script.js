const headerBurger = document.querySelector('.header__open');
const headerMobile = document.querySelector('.header-mobile');
const headerMobileBg = document.querySelector('.header-mobile__bg');
const headerMobileClose = document.querySelector('.header-mobile__close');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerMobile.classList.toggle('active');
});

headerMobileBg.addEventListener('click', () => {
  headerBurger.classList.remove('active');
  headerMobile.classList.remove('active');
})

headerMobileClose.addEventListener('click', () => {
  headerBurger.classList.remove('active');
  headerMobile.classList.remove('active');
})

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-modal]');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal');
      const modalWindow = document.getElementById(modalId);
      if (modalWindow) {
        const modal = modalWindow.closest('.modal');
        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      }
    });
  });

  function closeModal(modal) {
    modal.classList.remove('active');
    if (!document.querySelector('.modal.active')) {
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.modal__close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });

  document.querySelectorAll('.modal__bg').forEach(bg => {
    bg.addEventListener('click', () => {
      const modal = bg.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });
});

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
  centeredSlidesBounds: true,
  loop: false,
  initialSlide: 1,

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
  centeredSlidesBounds: true,
  loop: false,
  breakpoints: {
    700: {
      spaceBetween: 16,
      initialSlide: 2,

    },
    1: {
      centeredSlides: false,
      centeredSlidesBounds: false,
    }
  },
});

const eventsSlider = new Swiper('.events__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    1100: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    }
  },
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
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.modal__tab');
  const contents = document.querySelectorAll('.modal__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      // Удаляем класс active у всех вкладок
      tabs.forEach(t => t.classList.remove('active'));
      // Добавляем класс active к текущей вкладке
      tab.classList.add('active');

      // Убираем active у всех содержимых
      contents.forEach(c => c.classList.remove('active'));
      // Добавляем active к содержимому по индексу
      contents[index].classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.compare__tab');
  const contents = document.querySelectorAll('.compare__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      // Удаляем класс active у всех вкладок
      tabs.forEach(t => t.classList.remove('active'));
      // Добавляем класс active к текущей вкладке
      tab.classList.add('active');

      // Убираем active у всех содержимых
      contents.forEach(c => c.classList.remove('active'));
      // Добавляем active к содержимому по индексу
      contents[index].classList.add('active');
    });
  });
});

if (document.querySelector('.help__int')) {
 document.addEventListener('DOMContentLoaded', function() {
  const helpInt = document.querySelector('.help__int');
  const helpLeft = document.querySelector('.help__left');
  if (helpInt && helpLeft) {
    helpInt.addEventListener('click', function() {
      this.style.display = 'none';
      helpLeft.style.display = 'block';
    });
  }
});
}

if (document.querySelector('.phone')) {
  var phoneInputs = document.querySelectorAll('.phone');

  phoneInputs.forEach(phoneInput => {
    phoneInput.onfocus = function (e) {
      e.target.setAttribute('placeholder', '+7 (000) 000-00-00');
    };

    phoneInput.addEventListener('focusout', function (e) {
      e.target.setAttribute('placeholder', '');
    });
    phoneInput.addEventListener('keydown', function (event) {
      if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
        event.preventDefault();
      }

      var mask = '+7 (111) 111-11-11';

      if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        var currentString = this.value;
        var currentLength = currentString.length;

        if (/[0-9]/.test(event.key)) {
          if (mask[currentLength] == '1') {
            this.value = currentString + event.key;
          } else {
            for (var i = currentLength; i < mask.length; i++) {
              if (mask[i] == '1') {
                this.value = currentString + event.key;
                break;
              }

              currentString += mask[i];
            }
          }
        }
      }
    });
  });
}