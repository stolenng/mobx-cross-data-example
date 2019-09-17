import templatesStore from "./mobx/TemplatesList";
import initReact from './react';
import initVue from './vue';
import initAngularJS from './angular-js';
import initPreact from "./preact";

initReact();
initVue();
initAngularJS();
initPreact();

setTimeout(() => {
    templatesStore.addTemplate('SUPRISE Template!');
}, 3500)


//debugging
window.store = templatesStore;
