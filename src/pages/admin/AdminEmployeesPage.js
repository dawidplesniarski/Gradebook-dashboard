import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import {getAllEmployees} from "../../actions/employeeActions";
import AllEmployeesTable from "../../components/Tables/AllEmployeesTable";
import {Paper} from "@material-ui/core";
import AddButton from "../../components/Atoms/AddButton/AddButton";
import AddEmployeeForm from "../../components/Forms/AddEmployeeForm/AddEmployeeForm";
import AllEmployeesImage from '../../assets/images/all-employees.svg';
import Footer from "../../components/Molecules/Footer/Footer";

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
    const [formVisible, setFormVisible] = useState(false);

    useEffect(() => {
        getAllEmployees();
    }, [])
    return (
        <>
            <Burger/>
            <AddButton open={formVisible} onClick={() => setFormVisible(!formVisible)}/>
            <BackButton onClick={() => history.push('/adminMainPage')}/>
            <StyledMainPageContainer>
                {!formVisible ?
                    <>
                        <img src={AllEmployeesImage} alt={'Employees'}/>
                        <Paper elevation={5}>
                            <AllEmployeesTable data={employeeReducer.allEmployees}/>
                        </Paper>
                    </> :
                    <AddEmployeeForm/>}
            </StyledMainPageContainer>
            <Footer/>
        </>
    );
};

const mapStateToProps = ({employeeReducer}) => {
    return {employeeReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllEmployees: () => dispatch(getAllEmployees())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminEmployeesPage));

