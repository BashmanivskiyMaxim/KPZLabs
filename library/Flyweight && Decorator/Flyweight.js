// flyweight class
export class Book {
    constructor(price, name, author, year) {
        this.price = price;
        this.name = name;
        this.author = author;
        this.year = year;
    }
}

// factory for flyweight objects
export class BookFactory {
    constructor() {
        this._Books = [];
    }

    createBook(price, name, author, year) {
        let Book1 = this.getBook(name);
        if (Book1) {
            return Book1;
        } else {
            const newBook = new Book(price, name, author, year);
            this._Books.push(newBook);
            return newBook;
        }
    }

    getBook(name) {
        return this._Books.find(Book => Book.name === name);
    }
}

// usage
