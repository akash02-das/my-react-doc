import React, {Component} from "react";

// Child component of Clock component
class Button extends Component {

    // Used shouldComponentUpdate life-cycle method for control re-rendering unless this component render costly
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {handler: currentChange, selectLanguage: currentLanguage} = this.props;
        const {handler: nextChange, selectLanguage: nextLanguage} = nextProps;

        if(currentChange === nextChange && currentLanguage === nextLanguage) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        console.log("Button Component Rendered")
        const { handler, selectLanguage } = this.props;

        return <button type="button" onClick={() => handler(selectLanguage)}>Change Language</button>
    }
}

export default Button;