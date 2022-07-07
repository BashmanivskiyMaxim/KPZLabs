import {ElementCreator} from "./ElementCreator.js";
import {dbBooksElement} from "../elements/dbBooksElement.js";

export class dbBooksCreator extends ElementCreator {
    create(params) {
        return new dbBooksElement(params);
    }
}