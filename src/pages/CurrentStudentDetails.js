import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {getCurrentStudent} from "../actions/studentActions";
import Burger from "../components/Molecules/Hamburger/Burger";
import {
    StudentDetailsWrapper,
    StyledParagraph,
    UserInfoBox,
    StyledAlbumNumber,
    StyledListElement,
    StyledList
} from "../styles/StudentDetails.styles";
import AddButton from "../components/Atoms/AddButton/AddButton";
import AddGradeForm from "../components/Forms/AddGrade/AddGradeForm";
import axios from "axios";
import {API_URL} from "../utils/helpers";
import BackButton from "../components/Atoms/BackButton/BackButton";

const CurrentStudentDetails = ({studentReducer, getCurrentStudent, universityReducer}) => {
    const [isOpen, setOpen] = useState(false);
    const [filterData, setFilterData] = useState([]);

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
        if(universityReducer.currentCourse && studentReducer.currentStudent){
            fetchStudentSubjects(universityReducer.currentCourse.courseName, studentReducer.currentStudent.albumNo);
        }
        getCurrentStudent(studentReducer.currentStudentId);
    }, [universityReducer.currentCourse, studentReducer.currentStudent]); // ! Put here arguments if you want to wait for redux !

    return (
        <StudentDetailsWrapper>
            <Burger/>
            <BackButton/>
            <AddButton onClick={() => setOpen(!isOpen)} open={isOpen}/>
            {studentReducer.currentStudent ?
                <UserInfoBox>
                    <img src={studentReducer.currentStudent.imageUrl} alt={'avatar'}/>
                    <StyledAlbumNumber>{studentReducer.currentStudent.albumNo}</StyledAlbumNumber>
                    <StyledParagraph>{studentReducer.currentStudent.name} {studentReducer.currentStudent.lastName}</StyledParagraph>
                    <StyledList>
                        {
                            studentReducer.currentStudent.courseId.map((e, index) =>
                                <StyledListElement>
                                    {e.courseName}, {studentReducer.currentStudent.semesters[index]} semestr
                                </StyledListElement>)
                        }
                    </StyledList>
                    {filterData.length > 0 ?
                        <AddGradeForm open={isOpen}
                                      studentAlbum={studentReducer.currentStudent.albumNo}
                                      studentSubjects={filterData}/>
                        : <></>}
                </UserInfoBox>
                :
                <></>
            }
        </StudentDetailsWrapper>
    );
};

const mapStateToProps = ({studentReducer, universityReducer}) => {
    return {studentReducer, universityReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentStudent: (studentId) => dispatch(getCurrentStudent(studentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CurrentStudentDetails));