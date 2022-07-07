import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class SearchForm extends PageElement {
    constructor(params) {
        super(params);
    }

    build() {
        this.domElement =
            DOM.tag(
                {
                    name : 'form',
                    attributes : {
                        action : '',
                        method : 'post'
                    },
                    content : [
                        DOM.tag({
                            name: 'b', class: 'content',
                            content: [
                                DOM.tag({name: 'div', class: 'text', content: 'Пошук'}),
                            ]
                        }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(
                                    {
                                        name : 'input',
                                        attributes : {
                                            id : 'Search',
                                            type : 'text',
                                            name : 'Search'
                                        }
                                    }
                                )
                            }
                        ),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'Movie',
                                        name : 'button',
                                        id : 'Movie',
                                        attributes : {
                                            id : 'Movie',
                                            type : 'button',
                                            value : 'Movie'

                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'Music',
                                        name : 'button',
                                        attributes : {
                                            id : 'Music',
                                            type : 'button',


                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'TV',
                                        name : 'button',
                                        id : 'TV',
                                        attributes : {
                                            type : 'button',
                                            id : 'TV',

                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'Books',
                                        name : 'button',
                                        id : 'Books',
                                        attributes : {
                                            type : 'button',
                                            id : 'Books',
                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(
                                    {
                                        name : 'textarea',
                                        attributes : {
                                            type : 'text',
                                            name : 'Result_textarea',
                                            id : 'Result_textarea'
                                        }
                                    }
                                )
                            })
                    ]
                }
            )
    }
}