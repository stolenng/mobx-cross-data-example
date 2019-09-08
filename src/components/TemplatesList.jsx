import React from "react";
import { observer } from "mobx-react";
import {Input} from 'antd';

const {TextArea} = Input;

@observer
class TemplatesList extends React.Component {
    render() {
        const {templates} = this.props;

        return (
            <div>
                {'---- REACT ----'}
                {'-- Templates  TEXT--'}
                <br/>
                <br/>
                <br/>
                {templates.map(template => {
                    return (
                        <div key={template.id} style={{marginBottom: '15px'}}>
                            <TextArea defaultValue={template.text} row={4} onChange={((e) => template.setText(e.target.value))}/>
                            <span style={{marginRight: '15px'}}>{`OMG LOWER CASE - ${template.text.toLowerCase()}`}</span>
                            <span>{`OMG UPPER CASE - ${template.text.toUpperCase()}`}</span>
                        </div>

                    )
                })}
            </div>
        );
    }
}

export default TemplatesList;
