import { observable, computed, reaction, action, autorun } from "mobx";
import TemplateItem from "./TemplateItem";

export default class TemplateList {
    @observable.shallow templates = new Map();
    @observable counter = 0;

    @computed
    get getTemplates() {
        return Array.from(this.templates.values());
    }

    @action
    addTemplate = (text) => {
        this.templates.set(++this.counter, new TemplateItem(text));
    }
}
