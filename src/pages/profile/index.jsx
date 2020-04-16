import React, {Component} from 'react';
import style from "./style.css";
import {connect} from "react-redux";
import * as Actions from "./actions";
import LoaderPage from "../../components/loaderPage/loaderPage";
import ModalForm from "../../components/modalForm";
import ModalMessage from "../../components/animatedMessage";

class Profile extends Component {
    componentDidMount() {
        if (this.props.user !== null) {
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

    changeDataForm = ({ fieldId, value }) => {
        const result = value.replace(/\W/gm, '');
        this.props.changeDataForm({ fieldId, value: result })
    }

    notificationErrors = (arg) => {
        if (arg === '') {
            return <p>is required</p>
        }
        if (arg.length < 3) {
            return <p>minlength 3</p>
        }
    }

    showErrors = (arg) => {
        if (arg === '' || arg.length < 3) {
            return 'error'
        }
    }


    render() {
        const {userInfo, dataForm, errors, responseStatus} = this.props.profile;
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
                            <button onClick={this.props.openModalWindow}>Change</button>
                            <p>{userInfo.email}</p>
                            <p>{userInfo.firstName}</p>
                            <p>{userInfo.lastName}</p>
                            <p>{userInfo.registrationDate.slice(0, 10)}</p>
                            <p>{userInfo.postsCount}</p>
                            <p>{userInfo.likesCount}</p>
                            <p>{userInfo.dislikesCount}</p>

                        </div>
                    </div>
                </div> : <LoaderPage/>}
                {this.props.profile.modalWindow && <ModalForm onClose={this.props.closeModalWindow}
                                                              onChange={this.changeDataForm}
                                                              dataForm={dataForm}
                                                              errors={errors}
                                                              onSend={() => {
                                                                  this.props.sendChangePassword(dataForm)
                                                              }}
                                                              notificationErrors={this.notificationErrors}
                                                              showErrors={this.showErrors}
                />}
                {this.props.profile.changeSuccess
                && <ModalMessage content={responseStatus.success ? <p>password changed</p> : <p>current password incorrect</p>}
                                 didMountModalMessage={this.props.modalMessageClose}/>}
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

