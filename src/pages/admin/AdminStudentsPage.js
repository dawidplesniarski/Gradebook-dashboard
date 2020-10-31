import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import AddStudentForm from "../../components/Forms/AddStudentForm/AddStudentForm";

const StyledMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const AdminStudentsPage = ({loginReducer, history}) => {
    const [studentsData, setStudentsData] = useState([]);

    const fetchAllStudents = () => {

    }

    return(
        <>
            <Burger isAdminOpened={true}/>
            <BackButton onClick={() => history.push('/adminMainPage')}/>
            <StyledMainPageContainer>
                <AddStudentForm/>
            </StyledMainPageContainer>
        </>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
}

export default connect(mapStateToProps)(withRouter(AdminStudentsPage));