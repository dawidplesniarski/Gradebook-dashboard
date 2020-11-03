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
import {Paper} from "@material-ui/core";
import Footer from "../../components/Molecules/Footer/Footer";
import AllStudentsImage from '../../assets/images/all-students.svg';

const StyledMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
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
                    <>
                        <img src={AllStudentsImage} alt={'students'}/>
                        <Paper elevation={5}>
                            <AllUsersTable data={studentsData}/>
                        </Paper>
                    </>

                    :
                    <AddStudentForm/>
                }
            </StyledMainPageContainer>
            <Footer/>
        </>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
}

export default connect(mapStateToProps)(withRouter(AdminStudentsPage));