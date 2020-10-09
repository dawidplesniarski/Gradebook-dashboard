import React, {useState, } from 'react';
import styled from 'styled-components';
import '../styles/LoginPage.css'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {loginFunction} from "../actions/loginActions";
import Spinner from "../components/Spinner/Spinner";

const StyledWrapper = styled.div`
height: 50%;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 15%;
`;

const LoginPage = ({loginFunction, loginReducer}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    return (
        <StyledWrapper>
            <h1>Login</h1>
            {loginReducer.isLoading && <Spinner/>}
            <input className={'LoginPage-Input'} onChange={event => setLogin(event.target.value)} placeholder={'Podaj login'}/>
            <input className={'LoginPage-Input'} onChange={event => setPassword(event.target.value)} placeholder={'Podaj hasło'} type={'password'}/>
            <button className={'LoginButton'} onClick={() => loginFunction(login, password, () => setMessage('Success'))}>Login</button>
            {/*<span>{message}</span>*/}
            {/*{loginReducer.loginData ? <span>{loginReducer.loginData.employee.lastName}</span> : <span></span>}*/}
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