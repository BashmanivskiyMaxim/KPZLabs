import {ElementCreator} from "./ElementCreator.js";
import {OrderElement} from "../elements/OrderElement.js";

export class OrderCreator extends ElementCreator {
    create(params) {
        return new OrderElement(params);
    }
}