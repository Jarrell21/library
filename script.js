const addNewBookBtn = document.querySelector('#addnew-book-btn');
const listOfBooks = document.querySelector('.list-of-books');

// Variables for the pop-up form when adding a book
const disableDiv = document.querySelector('#disableDiv');
const form = document.querySelector('.popup-form');
const formHeader= document.querySelector('#form-header');
const formTitleInput = document.querySelector('#title');
const formAuthorInput = document.querySelector('#author');
const formPagesInput = document.querySelector('#pages');
const formIsReadYes = document.querySelector('#yes');
const formIsReadNo = document.querySelector('#no');
const formAddBtn = document.querySelector('#add-btn');
const formCancelBtn = document.querySelector('#cancel-btn');

// Event listeners
addNewBookBtn.addEventListener('click', addNewBook);
formAddBtn.addEventListener('click', addBook);
formCancelBtn.addEventListener('click', closeForm);

// Storage for all the books added
let myLibrary = [];

// Constructor for the books
function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

function addNewBook(){
    formHeader.textContent = 'Add book';
    formAddBtn.textContent = 'Add';
    openForm();
}

// Function for the add button in the pop-up form
function addBook(){
    const bookTitle = formTitleInput.value;
    const bookAuthor = formAuthorInput.value;
    const bookPages = formPagesInput.value;
    let bookHaveRead;
    if(formIsReadNo.checked){
        bookHaveRead = formIsReadNo.value;
    }
    else if(formIsReadYes.checked){
        bookHaveRead = formIsReadYes.value;
    }

    if(bookTitle == '' ||
        bookAuthor == '' ||
        bookPages == ''){
        alert('Form incomplete!');
        return;
    }

    const book = new Book(bookTitle, bookAuthor, bookPages, bookHaveRead);
    if(checkBook(book) === true) {
        return;
    }
    myLibrary.push(book);
    closeForm();
    displayBooks();
}

function checkBook(newBook){
    myLibrary.forEach(book => {
        if(book.title === newBook.title && book.author === newBook.author){
            alert('That book is already in the library!');
            return true;
        }
        else return false;
    })
    
}

// Function that 'pops-up' the form
function openForm(){
    disableDiv.style.display = 'flex';
    form.style.display = 'flex';
}

// Function that closes the form
function closeForm(){
    form.style.display = 'none';
    disableDiv.style.display = 'none';
    formTitleInput.value = '';
    formAuthorInput.value = '';
    formPagesInput.value = '';
}

// Function that displays the books in the page
function displayBooks(){
    listOfBooks.textContent = '';
    myLibrary.forEach(book =>{
        const bookCard = document.createElement('div');
        const bookCardTitle = document.createElement('p');
        const bookCardAuthor = document.createElement('p');
        const bookCardPages = document.createElement('p');
        const bookCardIsRead = document.createElement('p');
        const editBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        bookCard.classList.add('book-card');

        bookCardTitle.textContent = `Title: ${book.title}`;
        bookCardAuthor.textContent = `Author: ${book.author}`;
        bookCardPages.textContent = `Pages: ${book.pages}`;
        bookCardIsRead.textContent = book.isRead;
        editBtn.textContent = 'Edit';
        removeBtn.textContent = 'Remove';

        removeBtn.style.background = 'rgb(255, 123, 123)';

        editBtn.addEventListener('click', ()=>{
            formHeader.textContent = 'Edit book';
            formAddBtn.textContent = 'Edit';
            openForm();
        });

        removeBtn.addEventListener('click', ()=>{
            listOfBooks.removeChild(bookCard);
            myLibrary = myLibrary.filter(value => value !== book);
        });

        bookCard.appendChild(bookCardTitle);
        bookCard.appendChild(bookCardAuthor);
        bookCard.appendChild(bookCardPages);
        bookCard.appendChild(bookCardIsRead);
        bookCard.appendChild(editBtn);
        bookCard.appendChild(removeBtn);
        listOfBooks.appendChild(bookCard);
    });
}
