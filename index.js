document.addEventListener('DOMContentLoaded', function() {
  // 1. Получаем элементы с проверкой
  const burgerBtn = document.querySelector('.burger-btn');
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.header');
  const callbackModal = document.getElementById('callbackModal');
  
  // Проверяем критически важные элементы
  if (!burgerBtn || !nav || !callbackModal) {
    console.error('Не найдены основные элементы:', {
      burgerBtn, nav, callbackModal
    });
    return;
  }

  // 2. Обработчик бургер-меню
  burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    if (header) header.classList.toggle('active');
    
    // Блокируем скролл при открытом меню
    document.body.style.overflow = 
      nav.classList.contains('active') ? 'hidden' : '';
  });

  // 3. Закрытие меню по клику на ссылки
  document.querySelectorAll('.nav__item-link').forEach(link => {
    link.addEventListener('click', function(e) {
      // Если ссылка ведет на якорь (#section), не предотвращаем поведение
      if (!this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
      }
      
      // Закрываем меню
      burgerBtn.classList.remove('active');
      nav.classList.remove('active');
      if (header) header.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // 4. Все кнопки для открытия модалки (только те, которые есть)
  const callButtons = [
    document.querySelector('.header__right-btn'),
    document.querySelector('.mobile-btn')
  ].filter(btn => btn); // Удаляем null-элементы

  callButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      callbackModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Закрываем меню, если оно открыто
      if (nav.classList.contains('active')) {
        burgerBtn.classList.remove('active');
        nav.classList.remove('active');
        if (header) header.classList.remove('active');
      }
    });
  });

  // 5. Закрытие модалки
  const closeButton = callbackModal.querySelector('.callback-modal__close');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      callbackModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Закрытие по клику вне модалки
  callbackModal.addEventListener('click', function(e) {
    if (e.target === this) {
      callbackModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // 6. Обработчик формы (если есть)
  const callbackForm = document.querySelector('.callback-form');
  if (callbackForm) {
    callbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Здесь может быть AJAX-запрос
      alert('Форма отправлена! Мы скоро вам перезвоним.');
      callbackModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});