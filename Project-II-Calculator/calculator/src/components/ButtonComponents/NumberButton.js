import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className={`numButton ${props.colors}`}>
            { props.text }   
        </button>
    );
}

export default NumberButton;