import React from 'react';
import Header from './index';
import avatar from '../../pages/defaultPage/user.jpg'
import {connect} from "react-redux";
import * as Action from "./action";
import style from './style.css'

const arrLink = [
    {
        name: 'Home',
        id: 'home',
        to: '/',
    },
    {
        name: 'Registration',
        id: 'registration',
        to: '/auth/sign-up',
    },
    {
        name: 'My posts',
        id: 'myPosts',
        to: '/my-posts',
    },
    {
        name: 'Add post',
        id: 'newpost',
        to: '/new-post',
    },
    {
        name: 'About',
        id: 'about',
        to: '/about',
    },
];

function getLink(user, id, arr) {
    let link = [];

    if (user !== undefined && user !== null) {
         arr.forEach(elem => {
            if(elem.id === 'registration') {
                return;
            } else {
                link.push(elem);
            }
        })
    } else {
        arr.forEach(elem => {
            if(elem.id === 'newpost' || elem.id === 'myPosts') {
                return;
            } else {
                link.push(elem);
            }
        })
    }
    link.map(el => {
        if(el.className) {
            delete el.className;
        }
        if (el.id === id) {
            el.className = style.active
        }
    });
    return link;
}

function HeaderContainer(props) {
    const user = props.user;
    const arr = getLink(user, props.activeLink, arrLink);
    if (user !== undefined && user !== null) {
        if (user.avatar === 'avatar-5f2b3d1ae33fd5f566bd6eeeec45d874.svg') {
            user.avatar = avatar;
        }
        return <Header login={user.login}
                       avatar={user.avatar}
                       button='Log out'
                       logout={props.logout}
                       activeLink={props.changeActiveLink}
                       link={arr}
        />
    } else {
        return <Header login='NoName'
                       avatar={avatar}
                       button='Sign In'
                       activeLink={props.changeActiveLink}
                       link={arr}/>
    }
}


const mapStateToProps = (state) => ({
    activeLink: state.defaultPage.activeLink
});

export default connect(mapStateToProps, Action)(HeaderContainer);