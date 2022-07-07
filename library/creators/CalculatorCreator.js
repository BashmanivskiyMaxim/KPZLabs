import {ElementCreator} from "./ElementCreator.js";
import {CalculatorElement} from "../elements/CalculatorElement.js";

export class CalculatorCreator extends ElementCreator {
    create(params) {
        return new CalculatorElement(params);
    }
}