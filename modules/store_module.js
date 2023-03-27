export default class store {
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