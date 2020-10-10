import React from 'react';
import {ButtonWrapper} from "./Button.styles";

const Button = ({onClick, children}) => {
    return(
        <ButtonWrapper
        onClick={onClick}>
            {children}
        </ButtonWrapper>
    );
};

export default Button;