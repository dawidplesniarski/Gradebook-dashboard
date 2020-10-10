import React, {useState,} from 'react';
import styled from 'styled-components';
import '../styles/LoginPage.css'
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {loginFunction} from "../actions/loginActions";
import TextInput from "../components/Atoms/TextInput/TextInput";
import Wave from '../assets/wave.svg';
import LoginBox from "../components/Forms/LoginBox/LoginBox";
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
        <div>
            <StyledWrapper>
                <LoginBox
                    loginFunction={() => loginFunction(login, password, () => history.push('/mainPage'))}
                    passwordOnChange={event => setPassword(event.target.value)}
                    loginOnChange={event => setLogin(event.target.value)}
                />
            </StyledWrapper>
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