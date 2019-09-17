import { h, Component, render } from 'preact';
import templatesStore from "../mobx/TemplatesList";


class App extends Component {
    componentDidMount() {
        this.setState({ templates: templatesStore.getTemplates});
    }
    render(props, state) {
        if (!state.templates) {
            return null;
        }
        const items = this.state.templates.map( (item) => (
            h('li', {id:item.id}, 'Item '+item.text)
        ));
        return (
            h('ul', null, items)
        );
    }
}


const initPreact = () => {
    const app = h(App);
    render(app, document.getElementById('root-preact'));
    return app;
}

export default initPreact;
