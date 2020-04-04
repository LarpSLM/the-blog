import React, {Component} from 'react';
import style from './style.css';
import img from "../../pages/defaultPage/user.jpg";
import {NavLink} from "react-router-dom";
import DefaultButton from "../defaultButton";

export default class Header extends Component {
    render() {
        return (
            <div className={style.menu}>
                <div className={style.profile}>
                    <h1>Hello,</h1>
                    <div className={style.avatar}>
                        <img src={img} alt="no-avatar"/>
                    </div>
                    <h2>store.Jack</h2>
                    <DefaultButton name='Log out'/>
                </div>
                <div className={style.nav}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/new-post'>Add post</NavLink>
                    <NavLink to='/auth/sign-up'>Registration</NavLink>
                </div>
                <div>
                    <p className={style.copyright}><i className="far fa-copyright"></i> 2020. <br/> All rights reserved.
                    </p>
                </div>
            </div>
        )
    }
}
