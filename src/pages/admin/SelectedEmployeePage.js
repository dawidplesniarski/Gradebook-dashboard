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
import DeleteEmployeeCourse from "../../components/Forms/DeleteEmployeeCourse/DeleteEmployeeCourse";
import AddEmployeeUniversity from "../../components/Forms/AddEmployeeUniversity/AddEmployeeUniversity";
import DeleteEmployeeUniversity from "../../components/Forms/DeleteEmployeeUniversity/DeleteEmployeeUniversity";
import Footer from "../../components/Molecules/Footer/Footer";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const SelectedEmployeePage = ({employeeReducer, history}) => {
    return(
        <>
            <Burger isAdminOpened={true}/>
            <BackButton onClick={() => history.push('/adminEmployeesPage')}/>
            <StyledWrapper>
                {employeeReducer.currentEmployee &&
                <>
                    <EditEmployeeForm employeeData={employeeReducer.currentEmployee}/>
                    <AddEmployeeSubject employeeData={employeeReducer.currentEmployee}/>
                    <DeleteEmployeeSubject employeeData={employeeReducer.currentEmployee}/>
                    <AddEmployeeCourse employeeData={employeeReducer.currentEmployee}/>
                    <DeleteEmployeeCourse employeeData={employeeReducer.currentEmployee}/>
                    <AddEmployeeUniversity employeeData={employeeReducer.currentEmployee}/>
                    <DeleteEmployeeUniversity employeeData={employeeReducer.currentEmployee}/>
                </>}
            </StyledWrapper>
            <Footer/>
        </>
    );
};

const mapStateToProps = ({employeeReducer}) => {
    return {employeeReducer};
}

export default connect(mapStateToProps)(withRouter(SelectedEmployeePage));