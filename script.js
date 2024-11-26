const bookshelf = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.read}`
  }
}

function addBook(title, author, pages, read) {
  bookshelf.push(new Book(title, author, pages, read));
  displayBook()
}

addBook('To Kill a Mockingbird', 'Harper Lee', '324', 'no');
addBook('Pride and Prejudice', 'Jane Austen', '294', 'no');
addBook('Moby Dick', 'Herman Melville', '585', 'yes');

function displayBook() {
  const library = document.querySelector('.library');

  bookshelf.forEach( book => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.textContent = `${book.info()}`
  library.appendChild(card)

  })
}
displayBook()


/*const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Toggle read status method
Book.prototype.toggleRead = function () {
  this.read = this.read === 'yes' ? 'no' : 'yes';
};

// Add a book to the library
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

// Display books in the library
function displayBooks() {
  const libraryDiv = document.getElementById('library');
  libraryDiv.innerHTML = ''; // Clear current display

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <p><strong>Title:</strong> ${book.title}</p>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.read}</p>
      <button class="toggle-read" data-index="${index}">Toggle Read</button>
      <button class="remove-book" data-index="${index}">Remove</button>
    `;
    libraryDiv.appendChild(bookCard);
  });

  // Add event listeners for buttons
  document.querySelectorAll('.toggle-read').forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      myLibrary[index].toggleRead();
      displayBooks();
    });
  });

  document.querySelectorAll('.remove-book').forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      myLibrary.splice(index, 1);
      displayBooks();
    });
  });
}

// Handle the New Book form
const bookFormDialog = document.getElementById('bookFormDialog');
const newBookButton = document.getElementById('newBook');
const bookForm = document.getElementById('bookForm');
const cancelForm = document.getElementById('cancelForm');

newBookButton.addEventListener('click', () => bookFormDialog.showModal());
cancelForm.addEventListener('click', () => bookFormDialog.close());

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;

  addBookToLibrary(title, author, pages, read);
  bookFormDialog.close();
  bookForm.reset();
});

// Initial dummy data for testing
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, 'yes');
addBookToLibrary('1984', 'George Orwell', 328, 'no'); */

