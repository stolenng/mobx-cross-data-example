import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import TemplateList from "./models/TemplatesList";
import TemplatesContainer from "./components/TemplatesController";
import {Provider} from 'mobx-react';
import {reaction, autorun} from 'mobx';

const store = new TemplateList();
store.addTemplate('First Template!');
store.addTemplate('Second Template!');
store.addTemplate('Third Template!');
store.addTemplate('LASTTT Template!');
const templates = store.getTemplates;




render(
  <div>
      <Provider store={store}>
        <TemplatesContainer  />
      </Provider>
      <DevTools/>
  </div>,
    document.getElementById("root-react")
);

const getLength = () => templates.length;

const wow = new Vue({
    el: '#root-vue',
    data: {
        templates: store.getTemplates,
        length: getLength(),
        message: 'nani'
    },
    template: "<div> VUE <div>{{length}} {{message}}</div> <div v-for=\"t in templates\">{{t.text}}</div></div>",
    mounted: () => console.log('yo')
});

reaction(
    () => store.getTemplates.length,
    (len) => {
        console.log(templates,len, templates.length)
        wow.$data.length = len;
    }
);

reaction(
    () => store.getTemplates,
    templ => {
        console.log('tfi', templ)
        wow.$data.templates = templ;
    }
)

setTimeout(() => {
    store.addTemplate('SUPRISE Template!');
    console.log(wow, 'added');
    wow.$forceUpdate()
}, 3500)




window.vm = wow;
window.store = store;
