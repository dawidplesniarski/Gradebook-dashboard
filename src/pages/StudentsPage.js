import React, {useState, useEffect} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import axios from 'axios';
import {API_URL} from "../utils/helpers";
import {getUniversities} from "../actions/universityActions";
import Teacher from '../assets/images/teacher1.svg'
import UsersTable from "../components/Tables/UsersTable";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import {UsersMainTableWrapper, MainPageContainer, StyledWrapper, UsersTableWrapper} from "../styles/MainPage.styles";
import SearchBar from "../components/Atoms/SearchBar/SearchBar";
import Burger from "../components/Molecules/Hamburger/Burger";
import BackButton from "../components/Atoms/BackButton/BackButton";
import Footer from "../components/Molecules/Footer/Footer";


const StudentsPage = ({universityReducer, history}) => {
    const [studentsData, setStudentsData] = useState([]);
    const [studentsFilter, setStudentsFilter] = useState('');

    function fetchAllStudents(university, course) {
        try {
            axios.get(`${API_URL}/users/findByUniversityAndCourse/${university}/${course}`).then(res => {
                setStudentsData(res.data);
            });
        } catch {
            console.log('error occured');
        }
    }

    useEffect(() => {
        fetchAllStudents(universityReducer.currentUniversity._id, universityReducer.currentCourse._id);
    }, []);

    return (
        <>
            <Burger/>
            <Footer/>
            <BackButton onClick={() => history.push('/mainPage')}/>
            <StyledWrapper>
                <MainPageContainer>
                    <UsersMainTableWrapper>
                        <img src={Teacher} alt={'teacher photo'}/>
                        <Grow in={(studentsData.length > 0)} timeout={300}>
                            <UsersTableWrapper>
                                <SearchBar placeholder={'Wyszukaj po nazwisku'} onChange={e => setStudentsFilter(e.target.value.toLowerCase())}/>
                                <Paper elevation={5}>
                                    <UsersTable data={studentsData.filter(student => student.lastName.toLowerCase().includes(studentsFilter))}/>
                                </Paper>
                            </UsersTableWrapper>
                        </Grow>
                    </UsersMainTableWrapper>
                </MainPageContainer>
            </StyledWrapper>
        </>


    );
}

const mapStateToProps = (universityReducer) => {
    return universityReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentsPage));
