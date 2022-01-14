const addBookBtn = document.querySelector('#add-book-btn');
const listOfBooks = document.querySelector('.list-of-books');





// Event listener for add book button
addBookBtn.addEventListener('click', addBook);

function addBook(){
    const titleInput = prompt('Title: ');
    const authorInput = prompt('Author: ');
    const pagesInput = prompt('Pages: ');
    const isReadInput = prompt('Have you read the book? ');

    const newBook = document.createElement('div');
    newBook.classList.add('book-card');

    const newBookTitle = document.createElement('p');
    newBook.classList.add('book-title');
    newBookTitle.textContent = `Title: ${titleInput}`;

    const newBookAuthor = document.createElement('p');
    newBook.classList.add('book-author');
    newBookAuthor.textContent = `Author: ${authorInput}`;

    const newBookPages = document.createElement('p');
    newBook.classList.add('book-pages');
    newBookPages.textContent = `Pages: ${pagesInput}`;

    const newBookIsRead = document.createElement('p');
    newBook.classList.add('book-isRead');
    newBookIsRead.textContent = `Already read: ${isReadInput}`;

    const removeBookBtn = document.createElement('button');
    removeBookBtn.classList.add('remove-book-btn')
    removeBookBtn.textContent = 'Remove';


    newBook.appendChild(newBookTitle);
    newBook.appendChild(newBookAuthor);
    newBook.appendChild(newBookPages);
    newBook.appendChild(newBookIsRead);
    newBook.appendChild(removeBookBtn);
    listOfBooks.appendChild(newBook);
}

// Storage of all the books added
let myLibrary = [];

// Constructor for the books
function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = function(){
        if (isRead === true) return 'already read';
        return 'not read yet';
    }
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${this.isRead()}`;
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const spiderMan = new Book('The Spiderman', 'Steven Seagull', 300, true);

console.log(theHobbit.info());
console.log(spiderMan.info());