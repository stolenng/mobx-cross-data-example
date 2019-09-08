import { observable, computed, action } from "mobx";
import TemplateItem from "./TemplateItem";

class TemplateList {
    @observable.shallow templates = new Map();
    @observable counter = 0;

    constructor() {
        this.addTemplate('First Template!');
        this.addTemplate('Second Template!');
        this.addTemplate('Third Template!');
        this.addTemplate('LASTTT Template!');
    }

    @computed
    get getTemplates() {
        return Array.from(this.templates.values());
    }

    @action
    addTemplate = (text) => {
        this.templates.set(++this.counter, new TemplateItem(text));
    }
}

export default new TemplateList();
