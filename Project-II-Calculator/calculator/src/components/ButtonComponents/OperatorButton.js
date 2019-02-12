import React from 'react';
import './Button.css';

const OperatorButton = props => {
    return (
        <button className={`opButton ${props.colors}`}>
            <i className={props.text}></i>
        </button>
    );
}

export default OperatorButton;