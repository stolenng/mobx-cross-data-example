import {h, Component, render} from 'preact';
import templatesStore from "../mobx/TemplatesList";
import {autorun} from 'mobx';

class App extends Component {
    componentDidMount() {
        autorun(() => this.updateComponent(templatesStore.getTemplates));
    }

    updateComponent = (templates) => {
        this.setState({templates: templates});
    }

    render(props, state) {
        if (!state.templates) {
            return null;
        }
        const items = this.state.templates.map((item) => (
            h('li', {id: item.id}, 'Item ' + item.text)
        ));
        return (
            h('ul', null, items)
        );
    }
}


const initPreact = () => {
    const app = h(App);
    render(app, document.getElementById('root-preact'));
}

export default initPreact;
