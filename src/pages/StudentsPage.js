import React, {useState, useEffect} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import axios from 'axios';
import {API_URL} from "../utils/helpers";
import styled from 'styled-components';
import {getUniversities} from "../actions/universityActions";
import SideBar from "../components/SideBar/SideBar";
import Teacher from '../assets/images/teacher1.svg'
import UsersTable from "../components/Tables/UsersTable";

const StyledWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 50%;
`;

const StudentsPage = ({universityReducer}) => {
    const [studentsData, setStudentsData] = useState([]);

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
    },[]);

    return(
        <StyledWrapper>
            <SideBar/>
            <div className={'main-table-wrapper'}>
                <img className={'theme-image-container'} src={Teacher} alt={'teacher photo'}/>
                {studentsData.length > 0 ? <UsersTable data={studentsData}/> : <div/>}

            </div>
        </StyledWrapper>

    );
}

const mapStateToProps = (universityReducer) => {
    return universityReducer;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentsPage));
