import React from 'react';

const Section = props => {
    const defaultClass = "main";
    const className = props.className || defaultClass;
    return (
        <section className={className}>
             { props.children }
        </section>
    );
}

export default Section;
