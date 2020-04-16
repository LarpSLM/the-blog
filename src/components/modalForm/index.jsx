import React, {Component} from 'react';
import style from "./style.css";
import Input from "../input";
import {createPortal} from "react-dom";

function ModalWindow (props) {
    return (
        <div className={style.wrapper} onClick={props.onClose}>
            <div className={style.modalForm} onClick={event => {
                event.preventDefault();
                event.stopPropagation();
            }}>
                <div className={style.inputDiv}>
                    <div className={style.placeholder}>
                        <p>current</p>
                        {props.notificationErrors(props.current)}
                    </div>
                    <Input
                        id="currentPassword"
                        value={props.current}
                        onChange={props.onChange}
                        // error={changeErr(login)}
                    />
                </div>
                <div className={style.inputDiv}>
                    <div className={style.placeholder}>
                        <p>new</p>
                        {props.notificationErrors(props.new)}
                    </div>
                    <Input
                        id="newPassword"
                        value={props.new}
                        onChange={props.onChange}
                        // error={this.changeErr(password)}
                    />
                </div>
                <div className={style.buttons}>
                    <button onClick={props.onSend}>Change</button>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )

}

class ModalForm extends Component {
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

export default ModalForm;