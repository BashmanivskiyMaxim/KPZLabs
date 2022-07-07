import {FooterFactory} from "./ConcreteFactories/FooterFactory.js";
import {HeaderFactory} from "./ConcreteFactories/HeaderFactory.js";

export function AbstractElementFactory(type) {
    switch (type) {
        case 'footer': return new FooterFactory();
        case 'header': return new HeaderFactory();
        default: return null;
    }
}



