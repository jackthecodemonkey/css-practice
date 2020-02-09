import React from 'react';
import './Message.scss';

const GetClassNameByErrorCode = code => {
    switch(code) {
        case 0: {
            return "message-warning";
        }

        case 1: {
            return "message-success";
        }

        default: {
            return "message-primary";
        }
    }
}

class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            message,
            code,
        } = this.props.message;
        const className = this.props.className || GetClassNameByErrorCode(code);

        return (
            <React.Fragment>
                {
                    this.props.showMessage &&
                    <div onClick={()=>this.props.onClick()} className={className}>
                        <span>{message}</span>
                        <span>X</span>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Message;
