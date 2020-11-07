import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import styled from "styled-components";
import EditEmployeeForm from "../../components/Forms/EditEmployeeForm/EditEmployeeForm";
import AddEmployeeSubject from "../../components/Forms/AddEmployeeSubject/AddEmployeeSubject";
import DeleteEmployeeSubject from "../../components/Forms/DeleteEmployeeSubject/DeleteEmployeeSubject";
import AddEmployeeCourse from "../../components/Forms/AddEmployeeCourse/AddEmployeeCourse";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedEmployeePage = ({employeeReducer, history}) => {
    return(
        <>
            <Burger/>
            <BackButton onClick={() => history.push('/adminEmployeesPage')}/>
            <StyledWrapper>
                {employeeReducer.currentEmployee &&
                <>
                    <EditEmployeeForm employeeData={employeeReducer.currentEmployee}/>
                    <AddEmployeeSubject employeeData={employeeReducer.currentEmployee}/>
                    <DeleteEmployeeSubject employeeData={employeeReducer.currentEmployee}/>
                    <AddEmployeeCourse employeeData={employeeReducer.currentEmployee}/>
                </>}
            </StyledWrapper>
        </>
    );
};

const mapStateToProps = ({employeeReducer}) => {
    return {employeeReducer};
}

export default connect(mapStateToProps)(withRouter(SelectedEmployeePage));