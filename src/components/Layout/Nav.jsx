import React from 'react';

const Nav = props => {
    return (
        <nav className="bg-primary">
            <h1>
                Tender
            </h1>
            {props.children}
            <ul>
                <li>View Tender</li>
                <li>Add New</li>
            </ul>
        </nav>
    );
}

export default Nav;
