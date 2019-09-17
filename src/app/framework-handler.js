import templatesStore from "../mobx/TemplatesList";
import {autorun} from 'mobx';
import initAngularJS from "../angular-js/angular-js-app";
import initVue from "../vue/vue-app";
import initReact from "../react/react-app";
import initPreact from '../preact/preact-app';

let reactApp, vueApp, preactApp;

export const initReactions = () => {
    autorun(
        () => updateFrameworks(templatesStore.getTemplates)
    );
};

const updateFrameworks = (templates) => {
    console.log('update frameworks')
    //Vue
    vueApp.$data.templates = templates;

    //Angular JS
    const angularScope = angular.element(document.getElementsByClassName('angular-js-scope')).scope();
    if (angularScope) {
        angularScope.templates = templates;
        angularScope.updateValues();
        angularScope.$evalAsync();
    }

    //Preact
    console.log(preactApp.nodeName.forceUpdate())
    preactApp.forceUpdate();
};

export const init = () => {
    reactApp = initReact();
    vueApp = initVue();
    preactApp = initPreact();
    initAngularJS();
    initReactions();
};
