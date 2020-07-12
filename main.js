function makeBook() {
    "use strict";
    class Book {
      constructor(title, author) {
        this.title = title;
        this.author = author;
      }
      get Title() {
        // lowercase version to ref the property
        return "Title: " + this.title;
      }
      set Title(newTitle) {
        this.title = newTitle;
      }
      get Author() {
        // lowercase version to ref the property
        return "Author: " + this.author;
      }
      set Author(newAuthor) {
        this.author = newAuthor;
      }
    }
    return Book;
  }

  var Book = makeBook();
  var pp = new Book("Pride and Prejudice", "Jane Austin");
  var h = new Book("Hamlet", "William Shakespear");
  var wp = new Book("War and Peace", "Leo Tolstoy");
  console.log(h.title); 
  h.title = "Hamlet"
  console.log(h.author) 
  // remove the "get" prefix
  console.log( h.Title)
  // remove the "get" prefix
  console.log( h.Author)