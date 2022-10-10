const   nextButton = document.querySelector('#next'),
        prevButton = document.querySelector("#prev"),
        sliderFirst = document.querySelector('#firstSlide'),
        sliderSecond = document.querySelector('#secondSlide');

let move = 0;

function doSwipe (firstSlide, secondSlide, move){
    sliderFirst.style.left = -move + 'px';
    sliderSecond.style.left = -move + 'px';
}

nextButton.addEventListener('click', () => {
    move += 395;

    if(move > 396){
        move = 0;
    }

    doSwipe(sliderFirst, sliderSecond, move);
});

prevButton.addEventListener('click', () => {
    move -= 395;

    if(move < 0){
        move = 395;
    }
   
    doSwipe(sliderFirst, sliderSecond, move);
});

const   prevButtonMobile = document.querySelector('#prev-mobile'),
        nextButtonMobile = document.querySelector('#next-mobile');
        windowWidth = document.documentElement.clientWidth;

        console.log(windowWidth < 1300);
        
nextButtonMobile.addEventListener('click', () => {
    if (windowWidth >= 1000){
        move += 323;

        console.log(move );


        if(move > 323){
            move = 0;
        }
    
        doSwipe(sliderFirst, sliderSecond, move);
    }else if(windowWidth < 1000){
        move += 315;

        console.log(move );


        if(move > 631){
            move = 0;
        }
    
        doSwipe(sliderFirst, sliderSecond, move);
    } 
});

prevButtonMobile.addEventListener('click', () => {
    if (windowWidth >= 1000){
        move -= 323;

        if(move > 323){
            move = 0;
        }
    
        doSwipe(sliderFirst, sliderSecond, move);
    }else if(windowWidth < 1000){
        move -= 315;

        if(move < 0){
            move = 630;
        }
    
        doSwipe(sliderFirst, sliderSecond, move);
    }
});