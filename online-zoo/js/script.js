body = document.querySelector('body');

burger_menu = document.querySelector('.header__menu');

burger = document.querySelector('.header__nav-mobile').addEventListener("click", function (e) {
    
    e.preventDefault();
    this.classList.toggle("active");

    if (this.classList.contains("active")){
        burger_menu.classList.add('active');
        body.classList.add('noscroll');
    }else{
        burger_menu.classList.remove('active');
        body.classList.remove('noscroll');
    }
})
