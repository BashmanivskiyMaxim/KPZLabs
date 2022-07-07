import {ElementCreator} from "../../creators/ElementCreator.js";
import {HeaderElement} from "../../elements/HeaderElement.js";

export class HeaderFactory{
    constructor(){
        return new HeaderElementCreator
    }
}
export class HeaderElementCreator extends ElementCreator {
    create(params) {
        return new HeaderElement(params);
    }
}