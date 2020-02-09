import React from 'react';
import './table.scss';

const Table = props => {
    const className = props.className || "table-primary";
    return (
        <table className={className}>
            {props.children}
        </table>
    );
}

export default Table;
