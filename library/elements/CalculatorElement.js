import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class CalculatorElement extends PageElement {
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
                                DOM.tag({name: 'div', class: 'text', content: 'Калькулятор'}),
                            ]
                        }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(
                                    {
                                        name : 'input',
                                        attributes : {
                                            id : 'FirstEl',
                                            type : 'text',
                                            name : 'FirstEl'
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
                                        content: '+',
                                        name : 'button',
                                        id : 'operation1',
                                        attributes : {
                                            id : 'operation1',
                                            type : 'button',
                                            value : '+'

                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: '-',
                                        name : 'button',
                                        attributes : {
                                            id : 'operation2',
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
                                        content: '*',
                                        name : 'button',
                                        id : 'operation3',
                                        attributes : {
                                            type : 'button',
                                            id : 'operation3',

                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(

                                    {
                                        content: '/',
                                        name : 'button',
                                        id : 'operation4',
                                        attributes : {
                                            type : 'button',
                                            id : 'operation4',
                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(
                                    {
                                        name : 'input',
                                        attributes : {
                                            type : 'text',
                                            name : 'Result_input',
                                            id : 'Result_input'
                                        }
                                    }
                                )
                            }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(
                                    {
                                        content: '<==',
                                        name : 'button',
                                        attributes : {
                                            type : 'button',
                                            id : 'undo'
                                        }
                                    }
                                )
                            })
                    ]
                }
            )
    }
}