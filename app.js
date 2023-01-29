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
