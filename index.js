"use strict"


document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    const headerBtn = document.querySelector('.header__right-btn');
    const callbackModal = document.getElementById('callbackModal');
    const callbackButtons = document.querySelectorAll('.header__right-btn, .nav__callback-btn');
    const closeButton = document.querySelector('.callback-modal__close');
    
    
    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        header.classList.toggle('active');
        headerBtn.classList.toggle('active');
        
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрытие при клике на ссылки
    document.querySelectorAll('.nav__item-link').forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            nav.classList.remove('active');
            header.classList.remove('active');
            headerBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });


     // Открытие модального окна
    callbackButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        callbackModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
      });
    });
    
    // Закрытие модального окна
    closeButton.addEventListener('click', function() {
      callbackModal.classList.remove('active');
      document.body.style.overflow = ''; // Восстанавливаем скролл
    });
    
    // Закрытие при клике вне модального окна
    callbackModal.addEventListener('click', function(e) {
      if (e.target === callbackModal) {
        callbackModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Обработка формы
    const callbackForm = document.querySelector('.callback-form');
    callbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Здесь можно добавить AJAX-отправку формы
      alert('Форма отправлена! Мы скоро вам перезвоним.');
      callbackModal.classList.remove('active');
      document.body.style.overflow = '';
    });

 


});

document.addEventListener('click', function(e) {
  // Проверяем, был ли клик по кнопке или её дочерним элементам
  const callbackBtn = e.target.closest('.btn-reset.header__right-btn.active');
  if (callbackBtn) {
    e.preventDefault();
    const modal = document.getElementById('callbackModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
});