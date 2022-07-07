import {ElementCreator} from "./ElementCreator.js";
import {GetLocationElement} from "../elements/GetLocationElement.js";

export class LocationCreator extends ElementCreator {
    create(params) {
        return new GetLocationElement(params);
    }
}