import React, {useState,} from 'react';
import styled from 'styled-components';
import '../styles/LoginPage.css'
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {loginFunction} from "../actions/loginActions";
import Wave from '../assets/wave.svg';
import MainPhoto from '../assets/login_page_photo.svg';
import MaleAvatar from '../assets/male-avatar.svg';
import LoginBox from "../components/Forms/LoginBox/LoginBox";

const StyledWrapper = styled.div`
width: 100vw;
height: 100vh;
display: grid;
align-items: center;
grid-template-columns: repeat(2, 1fr);
`;

const LoginPage = ({loginFunction, loginReducer, history}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    return (
        <div className={'container'}>
            <div className={'img'}>
                <img src={MainPhoto}/>
            </div>
            <div className={'login-container'}>
                <img className={'avatar'} src={MaleAvatar} alt={'avatar'}/>
                <LoginBox
                    loginFunction={() => loginFunction(login, password, () => history.push('/mainPage'))}
                    passwordOnChange={event => setPassword(event.target.value)}
                    loginOnChange={event => setLogin(event.target.value)}
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