import React from 'react';
import './spinner.scss';

class Spinner extends React.Component {
    render() {
        const className = this.props.loader || "lds-ripple";
        return (
            <div className={className}><div></div><div></div></div>
        );
    }
}

export default Spinner;
