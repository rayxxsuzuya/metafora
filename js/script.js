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

if (document.querySelector('.help__open')) {
  document.querySelector('.help__open').addEventListener('click', function () {
    document.querySelector('.help__search.mobile').style.display = 'block';
  })
}

const isMobile = window.innerWidth <= 700;

const pageSlider = new Swiper('.page-slider__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,
  initialSlide: 1,
 

  pagination: {
    el: '.page-slider .swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.page-slider__slider .swiper-button-next',
    prevEl: '.page-slider__slider .swiper-button-prev',
  },

  autoplay: isMobile ? {
    delay: 2000,
    disableOnInteraction: false,
  } : false,
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
      initialSlide: 0,
      spaceBetween: 16,
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
      loop: false,
    }
  },
});

const priceSlider = new Swiper('.price__slider', {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: false,
  breakpoints: {
    1100: {
      slidesPerView: 4,
    },
    800: {
      slidesPerView: 3,
    },
    1: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    }
  },
});

const poinSlider = new Swiper('.poin__slider', {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  breakpoints: {
    1000: {
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

  autoplay: isMobile ? {
    delay: 2000,
    disableOnInteraction: false,
  } : false,
});

const keySlider = new Swiper('.key__slider', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  
  breakpoints: {
    900: {
      spaceBetween: 0,
    },
    1: {
      spaceBetween: 16,
      slidesPerView: 'auto',
    },
  },

  autoplay: isMobile ? {
    delay: 2000,
    disableOnInteraction: false,
  } : false,
});

const compareSlider1 = new Swiper('.compare__slider.first', {
  slidesPerView: 4,
  spaceBetween: 8,
  loop: false,
  
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
      spaceBetween: 8,
    },
    }
  },
);

const compareSlider2 = new Swiper('.compare__slider.second', {
  slidesPerView: 4,
  spaceBetween: 8,
  loop: false,
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
      spaceBetween: 8,
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
  document.addEventListener('DOMContentLoaded', function () {
    const helpInt = document.querySelector('.help__int');
    const helpLeft = document.querySelector('.help__left');
    if (helpInt && helpLeft) {
      helpInt.addEventListener('click', function () {
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

document.querySelectorAll('.videos__right').forEach(container => {
  const calendarBtn = container.querySelector('.videos__calendar');
  const calendarWrapper = container.querySelector('.calendarWrapper');
  const monthYear = container.querySelector('.monthYear');
  const prevBtn = container.querySelector('.prevMonth');
  const nextBtn = container.querySelector('.nextMonth');
  const daysContainer = container.querySelector('.days');

  // Проверка наличия элементов
  if (!calendarBtn || !calendarWrapper || !monthYear || !prevBtn || !nextBtn || !daysContainer) {
    console.warn('Некоторые элементы не найдены внутри контейнера', container);
    return;
  }

  // Инициализация текущей даты
  const today = new Date();
  let displayedMonth = today.getMonth();
  let displayedYear = today.getFullYear();
  let selectedDate = new Date(today); // создаем копию даты

  // Функция обновления текста кнопки
  function updateButtonText() {
    const d = selectedDate.getDate().toString().padStart(2, '0');
    const m = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
    const y = selectedDate.getFullYear();
    calendarBtn.textContent = `${d}.${m}.${y}`;
  }

  // Обновляем кнопку с текущей датой
  updateButtonText();

  // Отрисовка календаря с текущими значениями
  renderCalendar(displayedMonth, displayedYear);

  // Обработчик открытия/скрытия календаря
  calendarBtn.addEventListener('click', () => {
    if (calendarWrapper.style.display === 'none' || calendarWrapper.style.display === '') {
      calendarWrapper.style.display = 'block';
      if (selectedDate) {
        displayedMonth = selectedDate.getMonth();
        displayedYear = selectedDate.getFullYear();
      }
      renderCalendar(displayedMonth, displayedYear);
    } else {
      calendarWrapper.style.display = 'none';
    }
  });

  // Обработчики переключения месяцев
  prevBtn.addEventListener('click', () => {
    if (displayedMonth === 0) {
      displayedMonth = 11;
      displayedYear--;
    } else {
      displayedMonth--;
    }
    renderCalendar(displayedMonth, displayedYear);
  });

  nextBtn.addEventListener('click', () => {
    if (displayedMonth === 11) {
      displayedMonth = 0;
      displayedYear++;
    } else {
      displayedMonth++;
    }
    renderCalendar(displayedMonth, displayedYear);
  });

  // Функция для удаления активных дней
  function clearActiveDays() {
    container.querySelectorAll('.day').forEach(d => d.classList.remove('active'));
  }

  // Основная функция рендера календаря
  function renderCalendar(month, year) {
    daysContainer.innerHTML = '';

    const monthNames = [
      'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    monthYear.textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1);
    const startDay = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const totalCells = startDay + daysInMonth;
    const totalRows = Math.ceil(totalCells / 7);
    const totalCellsNeeded = totalRows * 7;

    let date = 1;

    for (let i = 0; i < totalCellsNeeded; i++) {
      const cell = document.createElement('div');
      cell.className = 'day';

      if (i < startDay || date > daysInMonth) {
        cell.innerHTML = '';
      } else {
        const currentDate = date; // сохраняем текущее значение для замыкания
        cell.innerHTML = currentDate;

        if (
          selectedDate &&
          selectedDate.getFullYear() === year &&
          selectedDate.getMonth() === month &&
          selectedDate.getDate() === currentDate
        ) {
          cell.classList.add('active');
        }

        cell.addEventListener('click', () => {
          clearActiveDays();
          cell.classList.add('active');
          selectedDate = new Date(year, month, currentDate);
          updateButtonText();
        });

        date++;
      }
      daysContainer.appendChild(cell);
    }
  }
});