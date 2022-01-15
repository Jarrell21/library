const addBookBtn = document.querySelector('#add-book-btn');
const listOfBooks = document.querySelector('.list-of-books');

// Event listener for add book button
addBookBtn.addEventListener('click', addBook);

// Storage of all the books added
let myLibrary = [];

// Constructor for the books
function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addBook(){
    const bookTitle = prompt('Title: ');
    const bookAuthor = prompt('Author: ');
    const bookPages = prompt('Number of pages: ');
    const bookHaveRead = prompt('Have you read the book?');

    const book = new Book(bookTitle, bookAuthor, bookPages, bookHaveRead);
    myLibrary.push(book);

    displayBooks();
}

function displayBooks(){
    listOfBooks.textContent = '';
    myLibrary.forEach(book =>{
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const bookCardTitle = document.createElement('p');
        bookCardTitle.textContent = `Title: ${book.title}`;

        const bookCardAuthor = document.createElement('p');
        bookCardAuthor.textContent = `Author: ${book.author}`;

        const bookCardPages = document.createElement('p');
        bookCardPages.textContent = `Pages: ${book.pages}`;

        const bookCardIsRead = document.createElement('button');
        bookCardIsRead.textContent = book.isRead;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';

        bookCard.appendChild(bookCardTitle);
        bookCard.appendChild(bookCardAuthor);
        bookCard.appendChild(bookCardPages);
        bookCard.appendChild(bookCardIsRead);
        bookCard.appendChild(removeBtn);
        listOfBooks.appendChild(bookCard);
    })
}
