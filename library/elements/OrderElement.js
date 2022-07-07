import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class OrderElement extends PageElement {
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
                                DOM.tag({name: 'div', class: 'text', content: 'Замовлення'}),
                            ]
                        }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(
                                    {
                                        name : 'input',
                                        attributes : {
                                            id : 'price',
                                            type : 'text',
                                            name : 'input_order',
                                            placeholder : "price"
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
                                        name : 'input',
                                        attributes : {
                                            id : 'dest',
                                            type : 'text',
                                            name : 'input_order',
                                            placeholder : "dest"
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
                                        name : 'input',
                                        attributes : {
                                            id : 'vag',
                                            type : 'text',
                                            name : 'input_order',
                                            placeholder : "weight"
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
                                        content: 'OrderCompany1',
                                        name : 'button',
                                        attributes : {
                                            type : 'button',
                                            id : 'order1',
                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'OrderCompany2',
                                        name : 'button',
                                        id : 'GetBooks',
                                        attributes : {
                                            type : 'button',
                                            id : 'order2',
                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'OrderCompany3',
                                        name : 'button',
                                        id : 'GetBooks',
                                        attributes : {
                                            type : 'button',
                                            id : 'order3',
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
                                            id : 'Result_textareaOrder'
                                        }
                                    }
                                )
                            })
                    ]
                }
            )
    }
}