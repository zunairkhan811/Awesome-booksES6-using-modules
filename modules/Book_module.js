export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = this.title + this.author;
  }
}