import React from "react";
import {observer} from "mobx-react";
import TemplateItem from "./TemplateItem";
import {inject} from "mobx-react";

@inject('store')
@observer
class TemplatesContainer extends React.Component {
    render() {
        const templates = this.props.store.getTemplates;

        return (
            <div>
                <TemplateItem templates={templates || []}/>
            </div>
        );
    }
}

export default TemplatesContainer;
