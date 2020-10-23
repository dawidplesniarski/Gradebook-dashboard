import React from "react";
import styled from 'styled-components';
import Alert from '@material-ui/lab/Alert';
import {Button} from "@material-ui/core";

const StyledAlertWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 800px;
  top: 50%;
  left: 50%
`;

const AlertComponent = ({onClick, type}) => {
    return(
        <StyledAlertWrapper>
            <Alert severity={type} action={
                <Button color="inherit" size="small" onClick={onClick}>
                    zamknij
                </Button>
            }>
                Pytanie zostało dodane
            </Alert>
        </StyledAlertWrapper>
    );
};

export default AlertComponent;