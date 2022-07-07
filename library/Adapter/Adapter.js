
import {AddCommand} from "../Command/Command.js";
import {MultiplyCommand} from "../Command/Command.js";
import {DivideCommand} from "../Command/Command.js";
import {SubtractCommand} from "../Command/Command.js";
import {Calculator1} from "../Command/Command.js";

class CalculatorAdapter {
    constructor() {
        this.calculator = new Calculator1();
    }
    operation(num1, operation) {
        switch (operation) {
            case "add":
                return this.calculator.executeCommand(new AddCommand(num1))
            case "multiplication":
                return this.calculator.executeCommand(new MultiplyCommand(num1))
            case "division":
                return this.calculator.executeCommand(new DivideCommand(num1))
            case "minus":
                return this.calculator.executeCommand(new SubtractCommand(num1))
            case "undo":
                return this.calculator.undo()
            case "get_value":
                return this.calculator.value
            default:
                return NaN;
        }
    }
}

export default CalculatorAdapter;

