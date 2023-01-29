let myLibrary = [];

myLibrary.push ({
    title: "1984",
    author: "George Orwell",
    pages: 1982,
    read: true
})

myLibrary.push ({
    title: "Wrinkle in Time",
    author: "Jake Lamotta",
    pages: 2007,
    read: false
})


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let haveRead;
        if (this.read == true) {
            haveRead = "this has been read";
        } else {
            haveRead = "this has not been read yet";
        }

        return(`This book is called ${this.title} by ${this.author}, ${this.pages} pages, ${haveRead}`);        
    }
}

const table = document.querySelector("#tableBod");

function addBookToLibrary() {
    myLibrary.forEach(element => {
        let row = document.createElement("tr")
        table.append(row);

        let cone = document.createElement("td")
        let ctwo = document.createElement("td")
        let cthree = document.createElement("td")
        let cfour = document.createElement("td")

        cone.innerText = element.title;
        ctwo.innerText = element.author;
        cthree.innerText = element.pages;
        cfour.innerText = element.read;
        
        row.append(cone)
        row.append(ctwo)
        row.append(cthree)
        row.append(cfour)
    });
}

addBookToLibrary()


