import React, {useEffect, useState} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import axios from 'axios';
import {API_URL, compareArrays} from "../utils/helpers";
import {getUniversities} from "../actions/universityActions";
import UniversitiesTable from "../components/Tables/UniversitiesTable";
import CoursesTable from "../components/Tables/CoursesTable";
import Teacher from '../assets/images/teacher1.svg'
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import {MainTableWrapper, MainPageContainer, StyledWrapper, TableWrapper} from "../styles/MainPage.styles";
import SearchBar from "../components/Atoms/SearchBar/SearchBar";
import Burger from "../components/Molecules/Hamburger/Burger";

const MainPage = ({universityReducer, getUniversities, loginReducer}) => {

    const [coursesData, setCoursesData] = useState([]);
    const [filter, setFilter] = useState('');
    const [courseFilter, setCourseFilter] = useState('');

    function fetchAllCourses() {
        try {
            axios.get(`${API_URL}/course/findAll`).then(res => {
                setCoursesData(res.data);
            });
        } catch {
            console.log('Error occured');
        }
    }

    useEffect(() => {
        getUniversities();
        fetchAllCourses();
    }, []);
    return (
        <StyledWrapper>
            <MainPageContainer>
                <Burger/>
                <MainTableWrapper>
                    <img src={Teacher} alt={'teacher photo'}/>
                    {!universityReducer.currentUniversity ?
                        <Grow in={(universityReducer.universities.length > 0)}
                              timeout={300}>
                            <TableWrapper>
                                <SearchBar placeholder={'Wyszukaj uniwersytet'} onChange={e => setFilter(e.target.value)}/>
                                <Paper elevation={5}>
                                    <UniversitiesTable data={compareArrays(universityReducer.universities, loginReducer.loginData.employee.universityId)
                                        .filter(university => university.universityName.toLowerCase().includes(filter.toLowerCase()))}/>
                                </Paper>
                            </TableWrapper>
                        </Grow>
                        :
                        <Grow timeout={300} in={universityReducer.currentUniversity}>
                            <TableWrapper>
                                <SearchBar placeholder={'Wyszukaj kierunek'} onChange={e => setCourseFilter(e.target.value)}/>
                                <Paper elevation={5}>
                                    <CoursesTable data={compareArrays(coursesData, loginReducer.loginData.employee.courseId
                                        .filter(course => course.courseName.toLowerCase().includes(courseFilter.toLowerCase())))}/>
                                </Paper>
                            </TableWrapper>
                        </Grow>
                    }
                </MainTableWrapper>
            </MainPageContainer>
        </StyledWrapper>
    );
}

const mapStateToProps = ({loginReducer, universityReducer}) => {
    return {loginReducer, universityReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage));