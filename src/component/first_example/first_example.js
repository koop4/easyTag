import React from 'react'
import './first_example.css';

const FirstExample = () => (
    <div className="subgrid-first">
        <div className="ui right labeled left icon input">
            <i className="mail icon"></i>
            <input type="text" placeholder="Enter address" />
            <a className="ui tag label"> Add contact </a>
        </div>
    </div>
);

export default FirstExample
