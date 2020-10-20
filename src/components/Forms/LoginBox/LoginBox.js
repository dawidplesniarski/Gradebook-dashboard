import React from "react";
import { LoginBoxWrapper, StyledTitle } from './LoginBox.styles';
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";

const LoginBox = ({loginFunction, loginOnChange, passwordOnChange, buttonDisabled}) => {
    return(
        <LoginBoxWrapper>
            <StyledTitle>Login</StyledTitle>
            <TextInput onChange={loginOnChange} type={'text'} name={'login'} placeholder={'Podaj login'}/>
            <TextInput onChange={passwordOnChange} type={'password'} name={'password'} placeholder={'Podaj hasło'}/>
            <Button onClick={loginFunction} disabled={buttonDisabled}>Login</Button>
        </LoginBoxWrapper>
    );
};

export default LoginBox;