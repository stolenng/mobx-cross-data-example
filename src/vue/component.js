import templatesStore from '../mobx/TemplatesList';
import {UpperCaseText, LowerCaseText} from '../utils/utils';

const VueComponent = {
    el: '#root-vue',
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

export default VueComponent;
