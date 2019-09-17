import templatesStore from '../mobx/TemplatesList';
import {UpperCaseText, LowerCaseText} from '../app/utils';
import {autorun} from 'mobx';

const VueComponent = {
    el: '#root-vue',
    mounted: function () {
        autorun(() => {
            this.$set(this, 'templates', templatesStore.getTemplates)
        });
    },
    data: {
        templates: templatesStore.getTemplates
    },
    template: `
        <div> 
            <div class="fw-header">Vue - {{templates.length}}</div>
            <div class="fw-block" v-for="template in templates">
                   <textarea v-model="template.text"  @change="((e) => template.setText(e.target.value))"/>
                    <div class="fw-texts">
                        <div class="lower-case">${LowerCaseText} - {{template.text.toLowerCase()}}</div>
                        <div class="upper-case">${UpperCaseText} - {{template.text.toUpperCase()}}</div>
                    </div>
            </div>
        </div>
    `
};

const initVue = () => {
    return new Vue(VueComponent);
};

export default initVue;
