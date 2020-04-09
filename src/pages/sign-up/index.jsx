import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';
import style from './style.css'
import {Link} from 'react-router-dom';
import DefaultButton from "../../components/defaultButton";

class SignUp extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
        signUp: PropTypes.func.isRequired,
    };

    changeIsRequired = (arg) => {
        if (arg === true) {
            return <p className={style.error}>is required</p>;
        } else if (arg === 'not unique'){
            return <p className={style.error}>not unique</p>
        }
    }

    changeErr = (arg) => {
        if (arg !== false) {
            return 'error';
        }
    }

    render() {
        const {login, email, firstName, password } = this.props.errors;
        return (
            <>
                <div className={style.input}>
                    <div>
                        <div className={style.placeholder}>
                            <p>login</p>
                            {this.changeIsRequired(login)}
                        </div>
                        <Input
                            id="login"
                            value={this.props.dataForm.login}
                            onChange={this.props.changeFieldAction}
                            onBlur={() => {
                                this.props.checkLogin(this.props.dataForm.login);
                            }}
                            error={this.changeErr(login)}
                        />
                    </div>
                    <div>
                        <div className={style.placeholder}>
                            <p>e-mail</p>
                            {this.changeIsRequired(email)}
                        </div>
                        <Input
                            id="email"
                            value={this.props.dataForm.email}
                            onChange={this.props.changeFieldAction}
                            error={this.changeErr(email)}
                        />
                    </div>
                    <div>
                        <div className={style.placeholder}>
                            <p>firstname</p>
                            {this.changeIsRequired(firstName)}
                        </div>
                        <Input
                            id="firstName"
                            value={this.props.dataForm.firstName}
                            onChange={this.props.changeFieldAction}
                            error={this.changeErr(firstName)}
                        />
                    </div>
                    <div>
                        <div className={style.placeholder}>
                            <p>password</p>
                            {this.changeIsRequired(password)}
                        </div>
                        <Input
                            id="password"
                            value={this.props.dataForm.password}
                            onChange={this.props.changeFieldAction}
                            error={this.changeErr(password)}
                        />
                    </div>

                </div>
                <div className={style.buttonSing}>
                    <div className={style.left}>
                        <Link to='/auth/sign-in'>
                            <DefaultButton name='Sing-In?'/>
                        </Link>
                    </div>
                    <div className={style.right}>
                        <DefaultButton onClick={() => {
                            this.props.signUp(this.props.dataForm)
                        }} name='Sing-Up'/>
                    </div>
                </div>
            </>

        );
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.singUp.dataForm,
    errors: state.singUp.errors
});

export default connect(mapStateToProps, Actions)(SignUp);
