import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";

const SelectedEmployeePage = ({employeeReducer, history}) => {
    return(
        <>
            <Burger/>
            <BackButton onClick={() => history.push('/adminEmployeesPage')}/>
            {employeeReducer.currentEmployee && <span>{employeeReducer.currentEmployee.name}</span>}
        </>
    );
};

const mapStateToProps = ({employeeReducer}) => {
    return {employeeReducer};
}

export default connect(mapStateToProps)(withRouter(SelectedEmployeePage));