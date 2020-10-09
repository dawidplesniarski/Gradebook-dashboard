import React from "react";
import styled from "styled-components";
import {withRouter} from "react-router";
import {connect} from "react-redux";

const StyledWrapper = styled.div`
height: 50%;
display: flex;
align-items: center;
flex-direction: column;
margin-top: 15%;
`;

const MainPage = ({loginReducer}) => {

    return (
        <StyledWrapper>
            { loginReducer.loginData ? <span>{loginReducer.loginData.employee.academicTitle}</span> : <span></span>}
            { loginReducer.loginData ? <span>{loginReducer.loginData.employee.name}</span> : <span></span>}
            { loginReducer.loginData ? <span>{loginReducer.loginData.employee.lastName}</span> : <span></span>}
        </StyledWrapper>
    );
}

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

export default connect(mapStateToProps)(withRouter(MainPage));