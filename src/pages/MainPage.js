import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import SideBar from "../components/SideBar/SideBar";
import '../styles/MainPage.css'
import axios from 'axios';
import {API_URL} from "../utils/helpers";
import {getUniversities} from "../actions/universityActions";
import UniversitiesTable from "../components/Tables/UniversitiesTable";
import CoursesTable from "../components/Tables/CoursesTable";
import Teacher from '../assets/images/teacher1.svg'
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";


const StyledWrapper = styled.div`
height: 50%;
display: flex;
align-items: center;
flex-direction: column;
`;

const MainPage = ({universityReducer, getUniversities}) => {

    const [coursesData, setCoursesData] = useState([]);

    function fetchAllCourses() {
        try {
            axios.get(`${API_URL}/course/findAll`).then(res =>{
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
            <div className={'main-page-container'}>
                <SideBar/>
                <div className={'main-table-wrapper'}>
                    <img className={'theme-image-container'} src={Teacher} alt={'teacher photo'}/>
                    {!universityReducer.currentUniversity ?
                        <Grow in={(universityReducer.universities.length > 0)}
                              timeout={300}>
                            <div className={'table-wrapper'}>
                                <Paper elevation={5}>
                                    <UniversitiesTable data={universityReducer.universities}/>
                                </Paper>
                            </div>
                        </Grow>
                        :
                        <Grow timeout={300} in={universityReducer.currentUniversity}>
                            <div className={'table-wrapper'}>
                                <Paper elevation={5}>
                                    <CoursesTable data={coursesData}/>
                                </Paper>
                            </div>
                        </Grow>
                    }
                </div>
            </div>
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