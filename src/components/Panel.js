import React from 'react';

export default function Panel(props) {
    return (
        <div className="Panel">
            /////
            {props.heading}
            {props.children}
            /////
        </div>
    );
}