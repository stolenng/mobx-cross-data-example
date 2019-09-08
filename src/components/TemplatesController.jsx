import React from "react";
import {observer} from "mobx-react";
import TemplatesList from "./TemplatesList";
import {inject} from "mobx-react";

@inject('store')
@observer
class TemplatesContainer extends React.Component {
    render() {
        const templates = this.props.store.getTemplates;

        return (
            <div>
                <TemplatesList templates={templates || []}/>
            </div>
        );
    }
}

export default TemplatesContainer;
