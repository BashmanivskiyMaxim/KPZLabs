import {ElementCreator} from "./ElementCreator.js";
import {SearchForm} from "../elements/SearchForm.js";

export class SearchCreator extends ElementCreator {
    create(params) {
        return new SearchForm(params);
    }
}