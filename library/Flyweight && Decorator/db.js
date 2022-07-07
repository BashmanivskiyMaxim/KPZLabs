import {BookFactory} from "./Flyweight.js";
import {Book} from "./Flyweight.js";


export function getBooks() {

    let DecoratedBook = function (book, available) {
        this.book = book;
        this.name = book.name;
        this.price = book.price;
        this.author = book.author
        this.book.available = available
        this.year = book.year

        this.say = function () {
            return this.book
        };
    }

    const factory = new BookFactory();

    const Moby_Dick_2000 = factory.createBook('100', 'Moby_Dick', 'Herman Melville', 2000);
    const Moby_Dick = factory.createBook('50', 'Moby_Dick', 'Herman Melville', 1978);
    let War_Peace = factory.createBook('100', 'War_Peace', 'Leo Tolstoy', 2011);
    let War_Peace1 = factory.createBook('1001', 'War_Peace', 'Leo Tolstoy1', 2012);
    const Hamlet = factory.createBook('100', 'Hamlet', 'William Shakespeare', 2009);
    const Meant_to_Be = factory.createBook('400', 'Meant_to_Be', 'Emily Giffin', 2005);

    console.log(factory._Books);

    let book_decorated = new Book('100', '1984', 'Джордж Оруел', '2000')
    let decorated = new DecoratedBook(book_decorated, 'true')
    let obj = decorated.say()



    console.log(decorated.say())


    console.log(Moby_Dick_2000 === Moby_Dick); // true

    let getBooks = document.getElementById('GetBooks')
    let Result_textarea = document.getElementById('Result_textarea1')
    

    getBooks.addEventListener('click', function getRes() {
        Result_textarea.value = JSON.stringify(factory._Books) + '\n\n' + JSON.stringify(obj)
    })
}

