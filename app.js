let myLibrary = [];

myLibrary.push ({
    title: "1984",
    author: "George Orwell",
    pages: 1982,
    read: true
})

myLibrary.push ({
    title: "Wrinkle in Time",
    author: "Jake Jillinhall",
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
    table.innerHTML = ""
    myLibrary.forEach(element => {
        let row = document.createElement("tr")
        table.append(row);

        let cone = document.createElement("td")
        let ctwo = document.createElement("td")
        let cthree = document.createElement("td")
        let cfour = document.createElement("td")
        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("button")
        deleteBtn.classList.add("del")
        deleteBtn.innerText = "Delete"
        let cfive = document.createElement("td")

        cfive.append(deleteBtn);

        cone.innerText = element.title;
        ctwo.innerText = element.author;
        cthree.innerText = element.pages;
        cfour.innerText = element.read;
        
        row.append(cone)
        row.append(ctwo)
        row.append(cthree)
        row.append(cfour)
        row.append(cfive)

        document.querySelector("form").reset()
    });
}

const closeAddBox = document.querySelector("span")
const openAddBox = document.querySelector(".addBook")

const sideBar = document.querySelector(".sidebar")
closeAddBox.addEventListener("click", function(e) {
    sideBar.classList.toggle("display");
})
openAddBox.addEventListener("click", function(e) {
    sideBar.classList.toggle("display");
})


const bookInput = document.querySelector("#bookInput")
const authorInput = document.querySelector("#authorInput")
const pageCount = document.querySelector("#pageCount")
const select = document.querySelector("#select")

const button = document.querySelector("#button")

button.addEventListener("click", function(event) {
    event.preventDefault();
    const mainForm = document.querySelector("form");
    if (mainForm[1].value == "" || mainForm[2].value == "" || mainForm[3].value == "") {
        alert("Please fill out all fields");
        return 0;
    }
    

    let title = mainForm[1].value
    let author = mainForm[2].value
    let pages = mainForm[3].value
    if (mainForm[4].value == "yes") {
        let read = true;
        let newAddition = new Book(title, author, pages, read);
        myLibrary.push(newAddition)
        addBookToLibrary();
    } else {
        let read = false;
        let newAddition = new Book(title, author, pages, read);
        myLibrary.push(newAddition)
        addBookToLibrary();
    }



});

let del = document.querySelectorAll("td");

del.forEach((useritem => {
    addEventListener("click", (e) => {
        console.log("Hello")
    
    })
}))

addBookToLibrary()


