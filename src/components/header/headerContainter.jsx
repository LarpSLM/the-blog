import React from 'react';
import Header from './index';
import avatar from 'src/assets/user.jpg';
import style from './style.css'

const arrLink = [
    {
        name: 'Home',
        to: '/',
    },
    {
        name: 'Registration',
        to: '/auth/sign-up',
    },
    {
        name: 'My posts',
        to: '/my-posts',
    },
    {
        name: 'Add post',
        to: '/new-post/',
    },
    {
        name: 'About',
        to: '/about',
    },
];

function getLink(user, path, arr) {
    let link = [];

    if (user !== undefined && user !== null) {
         arr.forEach(elem => {
            if(elem.name === 'Registration') {
                return;
            } else {
                link.push(elem);
            }
        })
    } else {
        arr.forEach(elem => {
            if(elem.name === 'Add post' || elem.name === 'My posts') {
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
        if (el.to === path) {
            el.className = style.active
        }
    });
    return link;
}

export default function HeaderContainer(props) {
    const user = props.user;
    const arr = getLink(user, props.activeLink, arrLink);
    if (user !== undefined && user !== null) {
        return <Header login={user.login}
                       avatar={`http://school-blog.ru/images/${user.avatar}`}
                       button='Log out'
                       logout={props.logout}
                       link={arr}
        />
    } else {
        return <Header login='NoName'
                       avatar={avatar}
                       button='Sign In'
                       link={arr}/>
    }
}