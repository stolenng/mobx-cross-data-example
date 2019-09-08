import React from "react";
import {render} from "react-dom";
import templatesStore from "./mobx/TemplatesList";
import TemplatesContainer from "./react/TemplatesController";
import {Provider} from 'mobx-react';
import VueComponent from './vue/component';
import {reaction} from 'mobx';
import {LowerCaseText, UpperCaseText} from "./utils/utils";

let reactApp, vueApp, angularJsScope;

const initReact = () => {
    reactApp = render(
        <div>
            <Provider store={templatesStore}>
                <TemplatesContainer/>
            </Provider>
        </div>,
        document.getElementById("root-react")
    );
};

const initVue = () => {
    vueApp = new Vue(VueComponent);
};

const initAngularJS = () => {
    angular.module("app", []).directive('list', function () {
       return {
           controller: function ($scope) {
               $scope.LowerCaseText = LowerCaseText;
               $scope.UpperCaseText = UpperCaseText;
               $scope.templates = templatesStore.getTemplates;
               $scope.setText = function (text) {
                   console.log(text);
               };
           },
           templateUrl: 'src/angular-js/list.html'
       }
    });
};

const initReactions = () => {
    reaction(
        () => templatesStore.getTemplates,
        templates => updateFrameworks(templates)
    );
};

const updateFrameworks = (templates) => {
    console.log('update framework')
    //Vue
    vueApp.$data.templates = templates;

    //Angular JS
    const angularScope = angular.element(document.getElementsByClassName('angular-js-scope')).scope();
    console.log(angularScope, 'test')
    angularScope.templates = templates;
    angularScope.$apply();
};

const init = () => {
    initReact();
    initVue();
    initAngularJS();
    initReactions();
};

setTimeout(() => {
    templatesStore.addTemplate('SUPRISE Template!');
}, 3500)


init();

//debugging
window.vueApp = vueApp;
window.angularJsApp = angularJsScope;
window.store = templatesStore;
