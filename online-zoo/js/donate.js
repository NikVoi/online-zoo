const items = document.querySelectorAll('.input__item');


items.forEach(item => {
    item.addEventListener('click', function () {

        deleteElement(item)

        if (!item.hasAttribute('active')) {
            addElement(item);
        }
    })
})

let deleteElement = (element) => { 
    items.forEach(item => {
        item.classList.remove('active')
    });
}

let addElement = (element) => {
    element.classList.add('active')
}

const inputBox = document.querySelector('.pink__input');

inputBox.oninput = function() {
    this.value = this.value.substr(0, 4);
}