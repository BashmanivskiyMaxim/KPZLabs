export const TYPE_MUSIC = "music";
export const TYPE_MOVIE = "movie";
export const TYPE_TV = "tv";
export const TYPE_BOOK = "book";

export class CultureFacade {
    constructor(type) {
        this.type = type;
    }

    get(id) {
        switch (this.type) {
            case TYPE_MUSIC: {
                return this._tryToReturn(this._findMusic, id);
            }

            case TYPE_MOVIE: {
                return this._tryToReturn(this._findMovie, id);
            }

            case TYPE_TV: {
                return this._tryToReturn(this._findTVShow, id);
            }

            case TYPE_BOOK: {
                return this._tryToReturn(this._findBook, id);
            }

            default: {
                throw new Error("No type set!");
            }
        }
    }
    get _error() {
        return { status: 404, error: `No item with this id found` };
    }

    _tryToReturn(func, id) {
        const result = func.call(this, id);
        return result
    }
    _findMusic(id) {
        const db = new FetchMusic();
        return db.fetch(id);
    }

    _findMovie(id) {
        return new GetMovie(id);
    }

    _findTVShow(id) {
        return getTvShow(id);
    }

    _findBook(id) {
        return booksResource.find(item => item.id === id);
    }
}

export class FetchMusic {
    get resources() {
        return [
            { id: 1, title: "The Fragile" },
            { id: 2, title: "Alladin Sane" },
            { id: 3, title: "OK Computer" }
        ];
    }

    fetch(id) {
        return this.resources.find(item => item.id === id);
    }
}

export class GetMovie {
    constructor(id) {
        return this.resources.find(item => item.id === id);
    }

    get resources() {
        return [
            { id: 1, title: "Apocalypse Now" },
            { id: 2, title: "Die Hard" },
            { id: 3, title: "Big Lebowski" }
        ];
    }
}

export const getTvShow = function(id) {
    const resources = [
        { id: 1, title: "Twin Peaks" },
        { id: 2, title: "Luther" },
        { id: 3, title: "The Simpsons" }
    ];

    return resources.find(item => item.id === 1);
};

export const booksResource = [
    { id: 1, title: "Ulysses", year: "1955" },
    { id: 2, title: "Ham on Rye", year: "1975"  },
    { id: 3, title: "Quicksilver", year: "1999"  }
];

