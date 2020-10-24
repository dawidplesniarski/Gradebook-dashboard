import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import Burger from "../components/Molecules/Hamburger/Burger";
import BackButton from "../components/Atoms/BackButton/BackButton";
import axios from 'axios';
import {connect} from "react-redux";
import {API_URL} from "../utils/helpers";
import GradesTable from "../components/Tables/GradesTable";

const StudentGradesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StudentGradesPage = ({history, studentReducer}) => {
    const [studentGradesData, setStudentGradesData] = useState([]);

    const fetchStudentGrades = (studentAlbum) => {
        try {
            axios.get(`${API_URL}/grades/findByAlbum/30785`).then(res => {
               setStudentGradesData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchStudentGrades('30785');
    }, []);

    return(
        <StudentGradesWrapper>
            <Burger/>
            <BackButton onClick={() => history.push('/studentDetails')}/>
            {studentGradesData.length > 0 ? <GradesTable data={studentGradesData}/> : <></>}
        </StudentGradesWrapper>
    );
};

const mapStateToProps = ({studentReducer}) => {
    return {studentReducer};
}

export default connect(mapStateToProps)(withRouter(StudentGradesPage));