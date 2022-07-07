import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class dbBooksElement extends PageElement {
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
                                DOM.tag({name: 'div', class: 'text', content: 'Бібліотека'}),
                            ]
                        }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'отримати',
                                        name : 'button',
                                        id : 'GetBooks',
                                        attributes : {
                                            type : 'button',
                                            id : 'GetBooks',
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
                                            name : 'Result_textarea1',
                                            id : 'Result_textarea1'
                                        }
                                    }
                                )
                            })
                    ]
                }
            )
    }
}