import Store from './store_module.js';

export default class Ui {
  static displaybooks() {
    const books = Store.getbooks();
    books.forEach((book) => Ui.addbooktolist(book));
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
