"use strict"


document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        header.classList.toggle('active');
        
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Закрытие при клике на ссылки
    document.querySelectorAll('.nav__item-link').forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            nav.classList.remove('active');
            header.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});