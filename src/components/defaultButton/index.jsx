import React from 'react';
import style from './style.css' // не удалять

function DefaultButton(props) {
    return (
        <button onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export default DefaultButton;