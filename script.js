const myLib = [];

function Book(title, author, pages, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' keyword to call the constructor.");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID();

    this.info = function() {
        if (isRead) {
            return `${title} by ${author}, ${pages} pages, have been read.`;
        } else {
            return `${title} by ${author}, ${pages} pages, not read yet.`;
        }
    }
}

function addBookToLibrary() {

}