import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import AddStudentForm from "../../components/Forms/AddStudentForm/AddStudentForm";
import axios from 'axios';
import {API_URL} from "../../utils/helpers";
import AddButton from "../../components/Atoms/AddButton/AddButton";
import AllUsersTable from "../../components/Tables/AllUsersTable";

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
    const [formVisible, toggleForm] = useState(false);

    const fetchAllStudents = () => {
        try {
            axios.get(`${API_URL}/users/findAll`).then(res => {
                setStudentsData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAllStudents();
    }, []);

    return (
        <>
            <Burger isAdminOpened={true}/>
            <BackButton onClick={() => history.push('/adminMainPage')}/>
            <AddButton onClick={() => toggleForm(!formVisible)} open={formVisible}/>
            <StyledMainPageContainer>
                {!formVisible ?
                    <AllUsersTable data={studentsData}/>
                    :
                    <AddStudentForm/>
                }
            </StyledMainPageContainer>
        </>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
}

export default connect(mapStateToProps)(withRouter(AdminStudentsPage));