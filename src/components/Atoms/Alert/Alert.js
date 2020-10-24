import React from "react";
import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';
import {Button} from "@material-ui/core";

const StyledAlertWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  align-items: center;
  z-index: 10;
`;


const AlertComponent = ({onClick, type, message}) => {
    return (
        <StyledAlertWrapper>
            <Alert severity={type} action={
                <Button color="inherit" size="small" onClick={onClick}>
                    zamknij
                </Button>
            }>
                {message}
            </Alert>
        </StyledAlertWrapper>
    );
};

export default AlertComponent;