import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class HeaderElement extends PageElement {
    constructor(params) {
        super(params);
    }
    build() {
        this.domElement = DOM.tag({

                name: 'div',
                class: 'header_div', content:
                    [
                        DOM.tag({
                            name: 'header',
                            class: 'header1',
                            content: [
                                DOM.tag({
                                    name: 'h1',
                                    class: 'title1',
                                    attributes:
                                        {textAlign: 'left'},
                                    content: this.params.title
                                }),
                                DOM.tag({
                                    name: 'p', class: 'content',
                                    content: [
                                        DOM.tag({name: 'div', class: 'text', content: 'Text of Header'}),
                                    ]
                                })
                            ]
                        })
                    ]
            }
        );
    }
}