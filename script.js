const myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

// Function to display books in the library
function displayBooks() {
  const libraryContainer = document.querySelector("#library");
  libraryContainer.innerHTML = ""; // Clear existing content
  
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.dataset.index = index;

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read ? "Read" : "Not Read"}</p>
      <button class="toggle-read">Toggle Read Status</button>
      <button class="remove-book">Remove</button>
    `;

    // Add event listeners for buttons
    bookCard.querySelector(".toggle-read").addEventListener("click", () => toggleReadStatus(index));
    bookCard.querySelector(".remove-book").addEventListener("click", () => removeBook(index));

    libraryContainer.appendChild(bookCard);
  });
}

// Toggle read status
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

// Remove a book from the library
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Show/hide form
document.querySelector("#show-form-btn").addEventListener("click", () => {
  const form = document.querySelector("#new-book-form");
  form.style.display = form.style.display === "none" ? "block" : "none";
});

// Handle new book form submission
document.querySelector("#new-book-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from refreshing the page

  const title = document.querySelector("#title").value.trim();
  const author = document.querySelector("#author").value.trim();
  const pages = document.querySelector("#pages").value.trim();
  const read = document.querySelector("#read").checked;

  if (title && author && pages) { // Ensure required fields are filled
    addBookToLibrary(title, author, pages, read);
    document.querySelector("#new-book-form").reset(); // Reset form fields
    document.querySelector("#new-book-form").style.display = "none"; // Hide form after submission
  } else {
    alert("Please fill out all fields!");
  }
}); */


/* Initial dummy data for testing
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, 'yes');
addBookToLibrary('1984', 'George Orwell', 328, 'no'); 

