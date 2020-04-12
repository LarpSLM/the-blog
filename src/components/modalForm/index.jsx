import React, {Component} from 'react';
import style from "./style.css";
import Input from "../input";
import DefaultButton from "../defaultButton";
import {createPortal} from "react-dom";

function ModalWindow(props) {
    console.log(props)
    return (
        <div className={style.wrapper} onClick={props.onClose}>
            <div className={style.modalForm}>
                <div className={style.inputDiv}>
                    <div className={style.placeholder}>
                        <p>current</p>
                        {/*{changeIsRequired(login)}*/}
                    </div>
                    <Input
                        id="current"
                        value={props.current}
                        onChange={props.onChange}
                        // error={changeErr(login)}
                    />
                </div>
                <div className={style.inputDiv}>
                    <div className={style.placeholder}>
                        <p>new</p>
                        {/*{changeIsRequired(password)}*/}
                    </div>
                    <Input
                        id="new"
                        value={props.new}
                        onChange={props.onChange}
                        // error={this.changeErr(password)}
                    />
                </div>
                <div className={style.buttons}>
                    <DefaultButton name='Change'/>
                    <DefaultButton name='Close' onClick={props.onClose}/>
                </div>
            </div>
        </div>
    )

}

class Modalform extends Component {
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

export default Modalform;