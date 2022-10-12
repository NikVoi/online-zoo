const   items = document.querySelectorAll('.input__item'),
        itemPrice = document.querySelectorAll('.input__price'),
        input = document.querySelector('#input');

        // console.log(itemPrice.innerHTML.replace('$',''))
// search el for input value
input.addEventListener('input', function (){
    let getValueInput = input.value
    
    itemPrice.forEach(price =>{
        if (Number(getValueInput) === Number(price.innerHTML.replace('$',''))){
            let ind = price.parentElement;

            items.forEach(item => {
                deleteElement(item)

                if (!ind.hasAttribute('active')) {
                    addElement(ind);
                }
            });
        }
    })
})

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

// max leght 4 simvol 
const inputBox = document.querySelector('.pink__input');

inputBox.oninput = function() {
    this.value = this.value.substr(0, 4);
}