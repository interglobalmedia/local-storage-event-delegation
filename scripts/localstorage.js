const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    // so that the page does not refresh
    e.preventDefault();
    /* 'this' is actual form tag (addItems), and '[name=item]' refers to the input with that attribute within the form. This way narrow down search even more instead of using a class. Wrapping whole value stored in text in parentheses makes sure that it executes first. And then call .value against it. That is going to give us the input and the input has property which is called value which is whatever the user has typed into the ipnut. */
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        // es6 shorthand property instead of text: text
        text,
        done: false
    };
    items.push(item);
    this.reset();
}
/* will create actual html. needs two things: 1. a list to populate which are stored in items array.  make value of plates an empty object in case if forget to pass in something, it won't break JS. It will just loop over an array of nothing and map function will work just fine. Don't use itemsList or items directly here because want populateList to be more resilient. Meaning could pass in ANY aray of plates, any destination HTML element (platesList) and it will work. 2. */
function populateList(plates, = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <label for="">${plate.text}</label>
            </li>
        `;
    }).join('');
}

addItems.addEventListener('submit', addItem);
