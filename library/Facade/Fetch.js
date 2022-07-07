import {booksResource, FetchMusic, GetMovie, getTvShow, TYPE_BOOK, TYPE_TV} from "./Facade.js";
import {CultureFacade} from "./Facade.js";
import {TYPE_MUSIC} from "./Facade.js";
import {TYPE_MOVIE} from "./Facade.js";

export function getFetch() {


    let search = document.getElementById('Search')
    let movie = document.getElementById('Movie')
    let music = document.getElementById('Music')
    let TV = document.getElementById('TV')
    let Books = document.getElementById('Books')
    let Result_textarea = document.getElementById('Result_textarea')

    const m = new FetchMusic();
    const f = new GetMovie()
    const b = booksResource
    const t = new getTvShow()

    movie.addEventListener('click', function getRes() {
        const Get_movie = new CultureFacade(TYPE_MOVIE);
        Result_textarea.value = JSON.stringify(Get_movie.get(parseInt(search.value)))
    })
    music.addEventListener('click', function getRes() {
        const Get_music = new CultureFacade(TYPE_MUSIC);
        Result_textarea.value = JSON.stringify(Get_music.get(parseInt(search.value)))
    })
    TV.addEventListener('click', function getRes() {
        const Get_TV = new CultureFacade(TYPE_TV);
        Result_textarea.value = JSON.stringify(Get_TV.get(parseInt(search.value)))
    })
    Books.addEventListener('click', function getRes() {
        const Get_book = new CultureFacade(TYPE_BOOK);
        Result_textarea.value = JSON.stringify(Get_book.get(parseInt(search.value)))
    })
}