export default class Store {
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
    const books = Store.getbooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removebook(idFrombutton) {
    const books = Store.getbooks();

    const index = books.findIndex((book) => book.id === idFrombutton);
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
