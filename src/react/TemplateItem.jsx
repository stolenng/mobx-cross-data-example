import React from "react";
import { observer } from "mobx-react";
import {LowerCaseText, UpperCaseText} from "../app/utils";

@observer
class TemplateItem extends React.Component {
    render() {
        const {templates} = this.props;

        return (
            <div>
                <div className="fw-header">React - {templates.length}</div>
                {templates.map(template => {
                    return (
                        <div className="fw-block" key={template.id}>
                            <textarea value={template.text} onChange={((e) => template.setText(e.target.value))}/>
                            <div className="fw-texts">
                                <div className="lower-case">{LowerCaseText} - {template.text.toLowerCase()}</div>
                                <div className="upper-case">{UpperCaseText} - {template.text.toUpperCase()}</div>
                            </div>
                        </div>

                    )
                })}
            </div>
        );
    }
}

export default TemplateItem;
