import React from 'react';
import Header from './index';
import avatar from '../../pages/defaultPage/user.jpg'

export default function HeaderContainer(props) {
    const user = props.user;
    if (user !== undefined && user !== null) {
        return <Header login={user.login}
                       avatar={user.avatar}
                       button='Log out'
                       logout={props.logout}/>
    } else {
        return <Header login='NoName' avatar={avatar} button='Sign In'/>
    }
}