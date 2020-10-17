import React, {useEffect, useState} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import SideBar from "../components/SideBar/SideBar";
import axios from 'axios';
import {API_URL, compareArrays} from "../utils/helpers";
import {getUniversities} from "../actions/universityActions";
import UniversitiesTable from "../components/Tables/UniversitiesTable";
import CoursesTable from "../components/Tables/CoursesTable";
import Teacher from '../assets/images/teacher1.svg'
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import {MainTableWrapper, MainPageContainer, StyledWrapper, TableWrapper} from "../styles/MainPage.styles";

const MainPage = ({universityReducer, getUniversities, loginReducer}) => {

    const [coursesData, setCoursesData] = useState([]);

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
                <SideBar/>
                <MainTableWrapper>
                    <img src={Teacher} alt={'teacher photo'}/>
                    {!universityReducer.currentUniversity ?
                        <Grow in={(universityReducer.universities.length > 0)}
                              timeout={300}>
                            <TableWrapper>
                                <Paper elevation={5}>
                                    <UniversitiesTable data={compareArrays(universityReducer.universities, loginReducer.loginData.employee.universityId)}/>
                                </Paper>
                            </TableWrapper>
                        </Grow>
                        :
                        <Grow timeout={300} in={universityReducer.currentUniversity}>
                            <TableWrapper>
                                <Paper elevation={5}>
                                    <CoursesTable data={coursesData}/>
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