
// create random number
const numberItem = (min, max) => {
   return value = Math.floor(Math.random() * (max - min + 1) + min);
};

let number = numberItem(8, 11)

// const value info about comment
const commentorFirst = {
    fullName: "Michael John",
    img: '/online-zoo/online-zoo/img/user/1.png',
    date: "Today",
    location: "location Austria",
    comment: 'The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
}

const commentorSecond = {
    fullName: "Oska Samborska",
    img: '/online-zoo/online-zoo/img/user/2.png',
    date: "Today",
    location: "location Russian ",
    comment: ' Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
}

const commentortherd = {
    fullName: "Fredericka Michelin",
    img: '/online-zoo/online-zoo/img/user/3.png',
    date: "Today",
    location: "location Armenia",
    comment: ' My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
}

const commentorFour = {
    fullName: "Mila Riksha",
    img: '/online-zoo/online-zoo/img/user/4.png',
    date: "Today",
    location: "location Amerika",
    comment: 'My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.',
}

// array of object info about comment
const peopleComment = [commentorFirst, commentorSecond, commentortherd, commentorFour];

let arrTest;

function create(size, arr) {
    let info = [];

    for (let i = 0; i < size; i++){
        const number = Math.floor(Math.random() * arr.length)

        info[i] = arr[number];
    }

    return info
}

arrTest = create(number, peopleComment)

const testimonialsWrapper = document.querySelector('.testimonials__wrapper');

for (let i = 0; i < number; i++){
// const HTML commetn block
const testimonialsItem = `<div class="testimonials__item">
                            <div class="user__img">
                                <img class="user__imgIco" src="${arrTest[i].img}" alt="user">
                            </div>

                            <div class="user__wrapper">
                                <div class="user__fullName">${arrTest[i].fullName}</div>

                                <div class="user__location">${arrTest[i].location}</div>

                                <div class="user__dot">•</div>
                                <div class="user__date">${arrTest[i].date}</div>
                            </div>

                            <div class="user__comment">
                                ${arrTest[i].comment}
                            </div>
                        </div>` 
    testimonialsWrapper.insertAdjacentHTML('afterbegin', testimonialsItem);
}