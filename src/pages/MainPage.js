import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import axios from 'axios';
import SideBar from "../components/SideBar/SideBar";
import '../styles/MainPage.css'
import {getUniversities} from "../actions/universityActions";
import UniversitiesTable from "../components/Tables/UniversitiesTable";
import Teacher from '../assets/images/teacher1.svg'
import {API_URL} from "../utils/helpers";
import CoursesTable from "../components/Tables/CoursesTable";

const StyledWrapper = styled.div`
height: 50%;
display: flex;
align-items: center;
flex-direction: column;
`;

const MainPage = ({loginReducer, universityReducer, getUniversities}) => {
    const [courses, setCourses] = useState([]);

    function getCourses () {
        try {
            axios.get(`${API_URL}/course/findAll`).then(res => {
                setCourses(res.data)
            });
        } catch (err) {

        }
    }

    useEffect(() => {
        getUniversities();
    }, []);
    return (
        <StyledWrapper>
            <div className={'main-page-container'}>
                <SideBar/>
                <div className={'table-wrapper'}>
                    <img className={'theme-image-container'} src={Teacher} alt={'teacher photo'}/>
                    {universityReducer.universities.length > 0 ? <UniversitiesTable data={universityReducer.universities}/> : <div/>}
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