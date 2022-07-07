import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class ObserverElement extends PageElement {
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
                                DOM.tag({name: 'div', class: 'text', content: 'Спостерігач'}),
                            ]
                        }),
                        DOM.tag(
                            {
                                name : 'div',
                                content : DOM.tag(
                                    {
                                        name : 'textarea',
                                        attributes : {
                                            type : 'text',
                                            name : 'Result_textarea3',
                                            id : 'Result_textarea3'
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
                                            id : 'Obs_res',
                                            type : 'text',
                                            name : 'Obs_res'
                                        }
                                    }
                                )
                            }
                        ),

                    ]
                }
            )
    }
}