import React from 'react';

import  style from './style.css';

var MyButtonCompents = (props => {


    var itemHtml = props.items.map(function (listItem, i) {
        return <li key={i}>{listItem} </li>;
    });

    return <div>
        <ul>{itemHtml}</ul>
        <button onClick={props.onClick}>New Item</button>
    </div>;
});


export default MyButtonCompents;