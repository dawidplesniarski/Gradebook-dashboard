import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import Burger from "../components/Molecules/Hamburger/Burger";
import BackButton from "../components/Atoms/BackButton/BackButton";
import axios from 'axios';
import {connect} from "react-redux";
import {API_URL, compareGradesArrays, getEmployeeSubjects} from "../utils/helpers";
import GradesTable from "../components/Tables/GradesTable";

const StudentGradesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StudentGradesPage = ({history, studentReducer, universityReducer, loginReducer}) => {
    const [studentGradesData, setStudentGradesData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const employeeSubjects = getEmployeeSubjects(loginReducer.loginData.employee.subjectId);

    const fetchStudentGrades = (studentAlbum) => {
        try {
            axios.get(`${API_URL}/grades/findByAlbum/${studentAlbum}`).then(res => {
               setStudentGradesData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const fetchStudentSubjects = (courseName, albumNo) => {
        try {
            axios.get(`${API_URL}/subject/findByStudent/${courseName}/${albumNo}`).then(res => {
                setFilterData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchStudentSubjects(universityReducer.currentCourse.courseName, studentReducer.currentStudent.albumNo);
        fetchStudentGrades(studentReducer.currentStudent.albumNo);
    }, []);

    return(
        <StudentGradesWrapper>
            <Burger/>
            <BackButton onClick={() => history.push('/studentDetails')}/>
            {studentGradesData.length > 0 && filterData.length > 0 ? <GradesTable data={compareGradesArrays(studentGradesData, filterData)} employeeSubjects={employeeSubjects}/> : <></>}
        </StudentGradesWrapper>
    );
};

const mapStateToProps = ({studentReducer, universityReducer, loginReducer}) => {
    return {studentReducer, universityReducer, loginReducer};
}

export default connect(mapStateToProps)(withRouter(StudentGradesPage));