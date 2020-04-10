import React, {Component} from 'react';
import style from './style.css';
import {Link} from "react-router-dom";
import DefaultButton from "../defaultButton";

export default class Header extends Component {
    render() {
        return (
            <div className={style.menu}>
                <div className={style.profile}>
                    <h1>Hello,</h1>
                    <div className={style.avatar}>
                        <img src={this.props.avatar} alt="no-avatar"/>
                    </div>
                    <h2>{this.props.login}</h2>
                    {this.props.button === 'Log out'
                        ? <DefaultButton onClick={this.props.logout} name={this.props.button}/>
                        : <Link to='/auth/sign-in'><DefaultButton name={this.props.button}/></Link>}

                </div>
                <div className={style.nav}>
                    {
                        this.props.link.map(el => {
                            return <Link key={el.name}
                                         to={el.to}
                                         id={el.id}
                                         className={el.className}>{el.name}
                            </Link>
                        })
                    }
                </div>
                <div>
                    <p className={style.copyright}><i className="far fa-copyright"></i> 2020. <br/> All rights reserved.
                    </p>
                </div>
            </div>
        )
    }
}
