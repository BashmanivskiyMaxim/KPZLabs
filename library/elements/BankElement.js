import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class BankElement extends PageElement {
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
                                DOM.tag({name: 'div', class: 'text', content: 'Банк'}),
                            ]
                        }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(
                                    {
                                        name : 'input',
                                        attributes : {
                                            id : 'SearchBank',
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
                                        content: 'Порахувати',
                                        name : 'button',
                                        id : 'Movie',
                                        attributes : {
                                            id : 'Result_Search',
                                            type : 'button'

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
                                            name : 'Result_Bank',
                                            id : 'Result_Bank'
                                        }
                                    }
                                )
                            })
                    ]
                }
            )
    }
}