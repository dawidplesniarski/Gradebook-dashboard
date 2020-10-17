import React, {useState,} from 'react';
import styled from 'styled-components';
import '../styles/LoginPage.css'
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {loginFunction} from "../actions/loginActions";
import Wave from '../assets/images/wave1.svg';
import MainPhoto from '../assets/images/login_page_photo1.svg';
import MaleAvatar from '../assets/images/male-avatar1.svg';
import LoginBox from "../components/Forms/LoginBox/LoginBox";


const LoginPage = ({loginFunction, loginReducer, history}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className={'container'}>
            <div className={'img'}>
                <img src={MainPhoto} alt={'Main photo'}/>
            </div>
            <div className={'login-container'}>
                <img className={'avatar'} src={MaleAvatar} alt={'avatar'}/>
                <LoginBox
                    loginFunction={() => loginFunction(login, password, () => history.push('/mainPage'))}
                    passwordOnChange={event => setPassword(event.target.value)}
                    loginOnChange={event => setLogin(event.target.value)}
                    buttonDisabled={login === '' || password === ''}
                />
            </div>
            <img className={'Wave'} src={Wave} alt={'wave'}/>
        </div>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password, successCallback) => dispatch(loginFunction(login, password, successCallback)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));