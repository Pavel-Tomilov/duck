document.addEventListener('DOMContentLoaded', function() {
  
  const burgerBtn = document.querySelector('.burger-btn');
  const nav = document.querySelector('.nav');
  const header = document.querySelector('.header');
  const callbackModal = document.getElementById('callbackModal');
  
  if (!burgerBtn || !nav || !callbackModal) {
    console.error('Не найдены основные элементы:', {
      burgerBtn, nav, callbackModal
    });
    return;
  }

  burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    if (header) header.classList.toggle('active');
    
  
    document.body.style.overflow = 
      nav.classList.contains('active') ? 'hidden' : '';
  });

  
  document.querySelectorAll('.nav__item-link').forEach(link => {
    link.addEventListener('click', function(e) {
      if (!this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
      }
      
      burgerBtn.classList.remove('active');
      nav.classList.remove('active');
      if (header) header.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  const callButtons = [
    document.querySelector('.header__right-btn'),
    document.querySelector('.mobile-btn')
  ].filter(btn => btn); 

  callButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      callbackModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      if (nav.classList.contains('active')) {
        burgerBtn.classList.remove('active');
        nav.classList.remove('active');
        if (header) header.classList.remove('active');
      }
    });
  });

  const closeButton = callbackModal.querySelector('.callback-modal__close');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      callbackModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  callbackModal.addEventListener('click', function(e) {
    if (e.target === this) {
      callbackModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

 
  const callbackForm = document.querySelector('.callback-form');
  if (callbackForm) {
    callbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Форма отправлена! Мы скоро вам перезвоним.');
      callbackModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
});