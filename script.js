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