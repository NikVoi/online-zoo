body = document.querySelector('body');

burger = document.querySelector('.header__nav-mobile').addEventListener("click", function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    if ( this.classList.contains("active")){
        body.classList.add('noscroll'); 
    }
    else{
        body.classList.remove('noscroll');
    }
})


