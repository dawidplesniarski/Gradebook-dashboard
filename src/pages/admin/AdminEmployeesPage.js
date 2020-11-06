import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import {getAllEmployees} from "../../actions/employeeActions";

const StyledMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const AdminEmployeesPage = ({history, getAllEmployees, employeeReducer}) => {

    useEffect(() => {
        getAllEmployees();
    },[])
    return (
        <>
            <Burger/>
            <BackButton onClick={() => history.push('/adminMainPage')}/>
            <StyledMainPageContainer>
                {employeeReducer.allEmployees.length > 0 && <span>{employeeReducer.allEmployees.length}</span>}
            </StyledMainPageContainer>
        </>
    );
};

const mapStateToProps = ({employeeReducer}) => {
    return {employeeReducer};
};

const mapDispatchToProps = (dispatch) => {
    return{
        getAllEmployees: () => dispatch(getAllEmployees())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminEmployeesPage));

