import React from 'react';
import './Header.css';
import moment from 'moment';

function HeaderTitle() {
    return (
        <div className="titleDisplay">
                <h4>Lambda School</h4>
                <p className="stamps">@LambdaSchool - { date }</p>
        </div>
    );
}

export default HeaderTitle;

let date = moment().format("MMM Do YY"); 
