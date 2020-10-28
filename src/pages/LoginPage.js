import React, {useEffect, useState} from 'react';
import '../styles/LoginPage.css'
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {loginFunction} from "../actions/loginActions";
import Wave from '../assets/images/wave1.svg';
import MainPhoto from '../assets/images/login_page_photo1.svg';
import MaleAvatar from '../assets/images/male-avatar1.svg';
import LoginBox from "../components/Forms/LoginBox/LoginBox";
import AlertComponent from "../components/Atoms/Alert/Alert";


const LoginPage = ({loginFunction, loginReducer, history}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [errorAlertvisible, setErrorAlertVisible] = useState(false);


    return (
        <>
            {errorAlertvisible ?
                <AlertComponent type={'error'} message={'Nieprawidłowy login albo hasło'}
                                onClick={() => setErrorAlertVisible(false)}/>
                : <></>}
            <div className={'container'}>
                <div className={'img'}>
                    <img src={MainPhoto} alt={'Main photo'}/>
                </div>
                <div className={'login-container'}>
                    <img className={'avatar'} src={MaleAvatar} alt={'avatar'}/>
                    <LoginBox
                        loginFunction={() => loginFunction(login, password, () => history.push('/mainPage'), () => console.log('Error'))}
                        passwordOnChange={event => setPassword(event.target.value)}
                        loginOnChange={event => setLogin(event.target.value)}
                        buttonDisabled={login === '' || password === ''}
                    />
                </div>
                <img className={'Wave'} src={Wave} alt={'wave'}/>
            </div>
        </>

    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password, successCallback, errorCallback) => dispatch(loginFunction(login, password, successCallback, errorCallback)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));