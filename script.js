import { DateTime } from './modules/luxon.js';
import ui from './modules/ui_module.js';
import store from './modules/store_module.js';
import Book from './modules/Book_module.js';

document.addEventListener('DOMContentLoaded', ui.displaybooks);

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (title === '' || author === '') {
      alert('Please fill in all fields'); // eslint-disable-line
  } else {
    const book = new Book(title, author);

    ui.addbooktolist(book);

    store.addbook(book);

    ui.clearFields();
  }
});

document.querySelector('#book-addition').addEventListener('click', (e) => {
  ui.deletebook(e.target);
  store.removebook(e.target.getAttribute('data-modal'));
});

// current date & time
const date = document.getElementById('date');
const displayDate = () => {
  const dt = DateTime.now();
  date.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
  setInterval(displayDate, 1000);
};

displayDate(date);
