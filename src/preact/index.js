import {h, Component, render} from 'preact';
import templatesStore from "../mobx/TemplatesList";
import {autorun} from 'mobx';
import {LowerCaseText, UpperCaseText} from "../app/utils";

class App extends Component {
    state = {templates: []};

    componentDidMount() {
        autorun(() => this.updateComponent(templatesStore.getTemplates));
    }

    updateComponent = (templates) => {
        this.setState({templates: templates});
    }

    render() {
        const items = this.state.templates.map((template) => (
            h(Item, {template})
        ));
        return (
            h('div', null,
                h('div', {class: 'fw-header'}, `Preact - ${this.state.templates.length}`),
                items
            )
        );
    }
}

class Item extends Component {
    state = {text: ''};

    componentDidMount() {
        autorun(() => {
            this.setState({text: this.props.template.text});
        })
    }

    onInput = (e) => {
        this.props.template.setText(e.target.value);
    }

    render() {
        return (
            h('div', {class: 'fw-block'},
                h('textarea', {onInput: this.onInput, value: this.state.text}),
                h('div', {class: 'fw-texts'},
                    h('div', {class: 'lower-case'}, `${LowerCaseText} - ${this.state.text.toLowerCase()}`),
                    h('div', {class: 'upper-case'}, `${UpperCaseText} - ${this.state.text.toUpperCase()}`)
                ),
            )
        );
    }
}


const initPreact = () => {
    const app = h(App);
    render(app, document.getElementById('root-preact'));
}

export default initPreact;
