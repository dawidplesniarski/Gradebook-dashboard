import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import '../styles/LoginPage.css'

const StyledWrapper = styled.div`
height: 50%;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 15%;
`;

const LoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <StyledWrapper>
            <h1>Login</h1>
            <input className={'LoginPage-Input'} onChange={text => setLogin(text)} placeholder={'Podaj login'}/>
            <input className={'LoginPage-Input'} placeholder={'Podaj hasło'} type={'password'}/>
            <button className={'LoginButton'} onClick={() => console.log(`${login}`)}>Login</button>
        </StyledWrapper>
    );
};

export default LoginPage;