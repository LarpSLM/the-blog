import React, {Component} from 'react';
import style from "./style.css";
import {connect} from "react-redux";
import * as Actions from "./actions";
import LoaderPage from "../../components/loaderPage/loaderPage";

class Profile extends Component {
    componentDidMount() {
        if(this.props.user !== null) {
            const authorId = this.props.user.id
            this.props.getUserInfo(authorId)
        } else {
            setTimeout(() => {
                {
                    const authorId = this.props.user.id;
                    this.props.getUserInfo(authorId)
                }
            }, 2000)
        }
    }

    render() {
        const {userInfo} = this.props.profile;
        return (
            <>
                {userInfo !== null ? <div className={style.wrapper}>
                    <div className={style.form}>
                        <h1>You profile</h1>
                        <div className={style.info}>
                            <div className={style.avatar}>
                                <img src={`http://school-blog.ru/images/${userInfo.avatar}`} alt=""/>
                            </div>
                            <span>Login:</span>
                            <span>Password:</span>
                            <span>E-mail:</span>
                            <span>Firs name:</span>
                            <span>Last name:</span>
                            <span>Data:</span>
                            <span>Posts:</span>
                            <span>Like:</span>
                            <span>Dislike:</span>
                            <p>{userInfo.login}</p>
                            <button>Change</button>
                            <p>{userInfo.email}</p>
                            <p>{userInfo.firstName}</p>
                            <p>{userInfo.lastName}</p>
                            <p>{userInfo.registrationDate.slice(0,10)}</p>
                            <p>{userInfo.postsCount}</p>
                            <p>{userInfo.likesCount}</p>
                            <p>{userInfo.dislikesCount}</p>

                        </div>
                    </div>
                </div> : <LoaderPage/>}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.app.user,
        profile: state.profile
    }
}

export default connect(mapStateToProps, Actions)(Profile);

