import React, {Component} from 'react';
import {createPortal} from "react-dom";
import style from "./style.css";

function ModalWindow(props) {
    return (
        <div className={style.wrapper}>
            <p>{props.message}</p>
        </div>
    )

}

class ModalMessage extends Component {
    constructor(props) {
        super(props);
        this.elem = document.createElement('div');
        document.body.append(this.elem)
    }

    componentWillUnmount() {
        this.elem.remove()
    }

    render() {
        return (
            createPortal(<ModalWindow {...this.props}/>, this.elem)
        );
    }
}

export default ModalMessage;