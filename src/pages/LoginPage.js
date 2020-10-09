import React, {useState, } from 'react';
import styled from 'styled-components';
import '../styles/LoginPage.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {loginFunction} from "../actions/loginActions";
import Spinner from "../components/Spinner/Spinner";
import {Link} from "react-router-dom";
import TextInput from "../components/TextInput/TextInput";

const StyledWrapper = styled.div`
height: 50%;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 15%;
`;

const LoginPage = ({loginFunction, loginReducer, history}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    return (
        <StyledWrapper>
            <h1>Login</h1>
            <TextInput onChange={event => setLogin(event.target.value)} type={'text'} name={'login'} placeholder={'Podaj login'}/>
            <TextInput onChange={event => setPassword(event.target.value)} type={'password'} name={'password'} placeholder={'Podaj hasło'}/>
            <button className={'LoginButton'} onClick={() => loginFunction(login, password, () => history.push('/mainPage'))}>Login</button>

        </StyledWrapper>
    );
};

const mapStateToProps = ({ loginReducer}) => {
    return { loginReducer };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginFunction: (login, password, successCallback) => dispatch(loginFunction(login, password, successCallback)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage));