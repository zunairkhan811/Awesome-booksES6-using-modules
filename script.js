import { DateTime } from './modules/luxon.js';
import Ui from './modules/ui_module.js';
import Store from './modules/store_module.js';
import Book from './modules/Book_module.js';

document.addEventListener('DOMContentLoaded', Ui.displaybooks);

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (title === '' || author === '') {
      alert('Please fill in all fields'); // eslint-disable-line
  } else {
    const book = new Book(title, author);

    Ui.addbooktolist(book);

    Store.addbook(book);

    Ui.clearFields();
  }
});

document.querySelector('#book-addition').addEventListener('click', (e) => {
  Ui.deletebook(e.target);
  Store.removebook(e.target.getAttribute('data-modal'));
});

// current date & time
const date = document.getElementById('date');
const displayDate = () => {
  const dt = DateTime.now();
  date.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
  setInterval(displayDate, 1000);
};

displayDate(date);
