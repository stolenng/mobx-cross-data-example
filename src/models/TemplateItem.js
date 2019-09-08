import { observable, action } from "mobx";

export default class TemplateItem {
    id = Math.random();
    @observable text = '';
    @observable editMode = false;

    constructor(text) {
        this.text = text;
    }

    @action
    setText(text) {
        this.text = text;
    }
}
