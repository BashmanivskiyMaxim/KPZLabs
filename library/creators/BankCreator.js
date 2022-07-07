import {ElementCreator} from "./ElementCreator.js";
import {BankElement} from "../elements/BankElement.js";


export class BankCreator extends ElementCreator {
    create(params) {
        return new BankElement(params);
    }
}