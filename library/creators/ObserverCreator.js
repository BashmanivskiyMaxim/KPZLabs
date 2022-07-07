import {ElementCreator} from "./ElementCreator.js";
import {ObserverElement} from "../elements/ObserverElement.js";

export class ObserverCreator extends ElementCreator {
    create(params) {
        return new ObserverElement(params);
    }
}