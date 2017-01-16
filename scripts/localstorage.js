const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

// try get from localStorage, and if not there, fall back to empty array.
const items = JSON.parse(localStorage.getItem('items')) || [];

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
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}
/* will create actual html. needs two things: 1. a list to populate which are stored in items array.  make value of plates an empty object in case if forget to pass in something, it won't break JS. It will just loop over an array of nothing and map function will work just fine. Don't use itemsList or items directly here because want populateList to be more resilient. Meaning could pass in ANY aray of plates, any destination HTML element (platesList) and it will work. 2. */
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggleDone(e) {
    // e.target.matches() new api in browser.
    /* skip unless it's an input. only getting input checks. good example of event delegation where we listen for a click on something higher (here ul), and then inside we check if it's the actual target we want. */
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    // visually update what is on the page
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

// does not exist yet on page load
populateList(items, itemsList);
