import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class GetLocationElement extends PageElement {
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
                                DOM.tag({name: 'div', class: 'text', content: 'Отримати координати'}),
                            ]
                        }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'Amsterdam',
                                        name : 'button',
                                        attributes : {
                                            type : 'button',
                                            id : 'Amsterdam'
                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'London',
                                        name : 'button',
                                        attributes : {
                                            type : 'button',
                                            id : 'London'
                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'Paris',
                                        name : 'button',
                                        attributes : {
                                            type : 'button',
                                            id : 'Paris'
                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'Berlin',
                                        name : 'button',
                                        attributes : {
                                            type : 'button',
                                            id : 'Berlin'
                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: 'Кеш',
                                        name : 'button',
                                        attributes : {
                                            type : 'button',
                                            id : 'Cache'
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
                                            name : 'Result_textarea2',
                                            id : 'Result_textarea2'
                                        }
                                    }
                                )
                            })
                    ]
                }
            )
    }
}