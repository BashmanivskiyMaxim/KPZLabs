import {DOM} from "../DOM.js";
import {PageElement} from "./PageElement.js";

export class FooterElement extends PageElement {
    constructor(params) {
        super(params);
    }
    build() {
        this.domElement = DOM.tag({

                name: 'div',
                class: 'footer_div', content:
                    [
                        DOM.tag({
                            name: 'footer',
                            class: 'footer1',
                            content: [
                                DOM.tag({
                                    name: 'h1',
                                    class: 'title1',
                                    attributes:
                                        {href: this.params.link},
                                    content: this.params.title
                                }),
                                DOM.tag({
                                    name: 'p', class: 'content',
                                    content: [
                                        DOM.tag({name: 'div', class: 'text', content: 'Text of footer'}),
                                    ]
                                })
                            ]
                        })
                    ]
            }
        );
    }
}