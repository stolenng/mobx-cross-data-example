import React from "react";
import { observer } from "mobx-react";
import {Input} from 'antd';
import {LowerCaseText, UpperCaseText} from "../app/utils";

const {TextArea} = Input;

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
                            <TextArea value={template.text} row={4} onChange={((e) => template.setText(e.target.value))}/>
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
