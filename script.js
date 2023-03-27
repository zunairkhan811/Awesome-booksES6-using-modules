/* eslint-disable max-classes-per-file */
class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.id = this.title + this.author;
    }
  }
  
  class store {
    static getbooks() {
      let books;
      if (localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
      return books;
    }
  
    static addbook(book) {
      const books = store.getbooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    static removebook(idFrombutton) {
      const books = store.getbooks();
  
      const index = books.findIndex((book) => book.id === idFrombutton);
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
    }
  }
  
  class ui {
    static displaybooks() {
      const books = store.getbooks();
      books.forEach((book) => ui.addbooktolist(book));
    }
  
    static addbooktolist(book) {
      const list = document.querySelector('#book-addition');
      const div = document.createElement('div');
      div.innerHTML = `
      <p>${book.title}</p>
      <p>by</p>
      <p>${book.author}</p>
      <Button data-modal=${book.id} class="remove-btn">Remove</Button>
      `;
      list.appendChild(div);
    }
  
    static deletebook(el) {
      if (el.classList.contains('remove-btn')) {
        el.parentElement.remove();
      }
    }
  
    static clearFields() {
      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
    }
  }
  
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
  
  function displayDate() {
    const date = document.getElementById('date');
    date.innerHTML = Date();
  
    setInterval(displayDate, 1000);
  }
  
  displayDate(date);
  