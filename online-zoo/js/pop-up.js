const   items = document.querySelectorAll('.testimonials__item'),   
        commentShow = document.querySelector('.popUp'),
        closeButton = document.querySelector('.popUp__button'),
        commentPos = document.querySelector('.popUp__content');

items.forEach(item => {
    item.addEventListener("click", (e) =>{
        const commentItem = item;

        const comentInfo = {
            imgSrc:     commentItem.querySelector('.user__imgIco').getAttribute('src'),
            fullName:   commentItem.querySelector('.user__fullName').innerText,
            laction:    commentItem.querySelector('.user__location').innerText,
            date:       commentItem.querySelector('.user__date').innerText,
            comment:    commentItem.querySelector('.user__comment').innerText
        }

        const commentItemSkeleton = `<div class="testimonials__itemPop">
                                        <div class="user__img">
                                            <img class="user__imgIco" src="${comentInfo.imgSrc}" alt="user">
                                        </div>

                                        <div class="user__wrapper">
                                            <div class="user__fullName">${comentInfo.fullName}</div>

                                            <div class="user__location">${comentInfo.laction}</div>

                                            <div class="user__dot">•</div>
                                            <div class="user__date">${comentInfo.date}</div>
                                        </div>

                                        <div class="user__commentPop">
                                            ${comentInfo.comment}
                                        </div>
                                    </div>`;

        e.preventDefault();
        commentShow.classList.add("active");

        commentPos.insertAdjacentHTML('afterbegin', commentItemSkeleton);

        if (commentShow.classList.contains("active")){
            body.classList.add('noscroll');
        }else{
            body.classList.remove('noscroll');
        }
    })
});


closeButton.addEventListener('click', function () {
    if (commentShow.classList.contains("active")){
        commentShow.classList.remove("active")
        body.classList.remove('noscroll');
    }
});