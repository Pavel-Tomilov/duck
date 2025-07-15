"use strict"


document.addEventListener('DOMContentLoaded', function() {
  const toggleMenu = document.querySelector('.burger');
  const menu = document.querySelector('.nav');

  toggleMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('open');

    // Блокировка прокрутки страницы
    if (menu.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Закрытие меню при клике на ссылку
  const navLinks = document.querySelectorAll('.nav__item-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      toggleMenu.classList.remove('active');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
});