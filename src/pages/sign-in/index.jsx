import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';
import {Link} from 'react-router-dom';
import style from './style.css'
import DefaultButton from "../../components/defaultButton";

class SignIn extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
        signInAction: PropTypes.func.isRequired,
    };

    onSubmit = () => {
        const { dataForm } = this.props;
        this.props.signInAction(dataForm);
    };

    changeIsRequired = (arg) => {
        switch (arg) {
            case 400:
            case true:
                return <p className={style.error}>is required</p>;
            case 'not found':
                return <p className={style.error}>not found</p>;
            case 401:
                return <p className={style.error}>incorrect</p>
        }
    }

    changeErr = (arg) => {
        if (arg !== false && arg !== '') {
            return 'error';
        }
    }

    render() {
        const { login, password} = this.props.errors
        return (
            <>
                <div className={style.input}>
                    <div className={style.inputDiv}>
                        <div className={style.placeholder}>
                            <p>login</p>
                            {this.changeIsRequired(login)}
                        </div>
                        <Input
                            id="login"
                            value={this.props.dataForm.login}
                            onChange={this.props.changeFieldAction}
                            onBlur={() => {
                                this.props.checkLogin(this.props.dataForm.login)
                            }}
                            error={this.changeErr(login)}
                        />
                    </div>
                    <div className={style.inputDiv}>
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
                        <Link to='/auth/sign-up'>
                            <DefaultButton name='Sing-Up?'/>
                        </Link>
                    </div>
                    <div className={style.right}>
                        <DefaultButton name='Sing-In' onClick={this.onSubmit}/>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    dataForm: state.signIn.dataForm,
    errors: state.signIn.errors
});

export default connect(mapStateToProps, Actions)(SignIn);
