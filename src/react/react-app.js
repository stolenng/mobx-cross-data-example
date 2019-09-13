import React from "react";
import TemplatesContainer from "./TemplatesController";
import {Provider} from 'mobx-react';
import {render} from "react-dom";
import templatesStore from "../mobx/TemplatesList";

const initReact = () => {
    return  render(
        <div>
            <Provider store={templatesStore}>
                <TemplatesContainer/>
            </Provider>
        </div>,
        document.getElementById("root-react")
    );
};

export default initReact;
