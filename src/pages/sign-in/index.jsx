import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Input from 'src/components/input';
import * as Actions from './actions';
import {Link} from 'react-router-dom';
import style from './style.css'
import API from 'src/API'
import DefaultButton from "../../components/defaultButton";

class SignIn extends Component {
    static propTypes = {
        dataForm: PropTypes.object.isRequired,
        changeFieldAction: PropTypes.func.isRequired,
    };

    onSubmit = () => {
        const { dataForm } = this.props;
        API.user.signIn(dataForm)
            .then(response => {console.log(response.data)})
            .catch(error => {console.log(error)})
    };

    render() {
        return (
            <>
                <div className={style.input}>
                    <div className={style.inputDiv}>
                        <p>login</p>
                        <Input
                            id="login"
                            value={this.props.dataForm.login}
                            onChange={this.props.changeFieldAction}
                        />
                    </div>
                    <div className={style.inputDiv}>
                        <p>password</p>
                        <Input
                            id="password"
                            value={this.props.dataForm.password}
                            onChange={this.props.changeFieldAction}
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
});

export default connect(mapStateToProps, Actions)(SignIn);
