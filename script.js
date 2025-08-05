const myLib = [];

function Book(title, author, pages, isRead) {
    if (!new.target) {
        throw Error("You must use the 'new' keyword to call the constructor.");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = crypto.randomUUID().slice(0, 6);

    this.info = function() {
        if (isRead) {
            return `${title} by ${author}, ${pages} pages, have been read.`;
        } else {
            return `${title} by ${author}, ${pages} pages, not read yet.`;
        }
    }
}


const modal = document.querySelector(".modal");

const add = document.querySelector(".add");
add.addEventListener("click", () => {
    modal.style.display = "flex";
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
    modal.style.display = "none";   
})




function showBook(book) {

    const table = document.querySelector("tbody");
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    cell1.textContent = book.id;
    const cell2 = newRow.insertCell(1);
    cell2.textContent = book.title;
    cell2.style.fontWeight = "600";
    const cell3 = newRow.insertCell(2);
    cell3.textContent = book.author;
    const cell4 = newRow.insertCell(3);
    cell4.textContent = book.pages;

    const cell5 = newRow.insertCell(4);
    const read = document.createElement("input");
    read.type = "checkbox";
    read.checked = book.isRead;
    cell5.appendChild(read);

    const cell6 = newRow.insertCell(5);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            const confirmRemove = confirm("Are you sure you want to remove this book from the library?");
            if (confirmRemove) {
                checkbox.closest("tr").remove();
            } else {
                checkbox.checked = false;
            }
        }
    })
    cell6.appendChild(checkbox);

}



const submit = document.querySelector(".submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.getElementById("form");
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value;
    const checked = document.getElementById("read").checked;

    if (title && author && pages) {
        const book = new Book(title, author, pages, checked);
        myLib.push(book);
        modal.style.display = "none";
        showBook(book);
        form.reset();
    }

})

const myBook = new Book("Jane Eyre", "Charlotte Bronte", 290, true);
showBook(myBook);
const anotherBook = new Book("In Search of Lost Time", "Marcel Proust", 4215, false);
showBook(anotherBook);
