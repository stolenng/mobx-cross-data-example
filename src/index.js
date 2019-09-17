import templatesStore from "./mobx/TemplatesList";
import {init} from './app/framework-handler';

setTimeout(() => {
    templatesStore.addTemplate('SUPRISE Template!');
}, 3500)

init();

//debugging
window.store = templatesStore;
