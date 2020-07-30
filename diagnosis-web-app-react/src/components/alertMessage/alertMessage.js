import React from 'react';
import './alertMessage.css'


class AlertMessage extends React.Component {

    componentDidMount = () => {
        setTimeout(() => {
            for (let element of document.getElementsByClassName("popupMessage"))
                element.style.display = "none";
            this.props.clearParentState();
        }, 5000);
    }

    render () {
        return(
            <div className="popupMessage">
                <div id="wrapper" className={ this.props.messageClass }>
                    { this.props.message }
                </div>
            </div>
        )
    }
}


export default AlertMessage;
