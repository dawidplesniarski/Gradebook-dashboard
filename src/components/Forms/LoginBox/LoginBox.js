import React from "react";
import { LoginBoxWrapper } from './LoginBox.styles';
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";

const LoginBox = ({loginFunction, loginOnChange, passwordOnChange}) => {
    return(
        <LoginBoxWrapper>
            <h1>Login</h1>
            <TextInput onChange={loginOnChange} type={'text'} name={'login'} placeholder={'Podaj login'}/>
            <TextInput onChange={passwordOnChange} type={'password'} name={'password'} placeholder={'Podaj hasło'}/>
            <Button onClick={loginFunction}>Login</Button>
        </LoginBoxWrapper>
    );
};

export default LoginBox;