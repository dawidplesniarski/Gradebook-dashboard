import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {getCurrentStudent} from "../actions/studentActions";
import Burger from "../components/Molecules/Hamburger/Burger";
import DefaultAvatar from '../assets/images/default-user.png';
import {
    StudentDetailsWrapper,
    StyledParagraph,
    UserInfoBox,
    StyledAlbumNumber,
    StyledListElement,
    StyledList,
    ImageWrapper,
    CheckMarksButtonWrapper
} from "../styles/StudentDetails.styles";
import AddButton from "../components/Atoms/AddButton/AddButton";
import AddGradeForm from "../components/Forms/AddGrade/AddGradeForm";
import axios from "axios";
import {addGradeFormSubjects, API_URL} from "../utils/helpers";
import BackButton from "../components/Atoms/BackButton/BackButton";
import Button from "../components/Atoms/Button/Button";

const CurrentStudentDetails = ({studentReducer, getCurrentStudent, universityReducer, loginReducer, history}) => {
    const [isOpen, setOpen] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const [filteredSubjects, setFilteredSubjects] = useState([]);

    const fetchStudentSubjects = (courseName, albumNo) => {
        try {
            axios.get(`${API_URL}/subject/findByStudent/${courseName}/${albumNo}`).then(res => {
                setFilterData(res.data);
            });
        } catch (err) {
            console.log(err);
        } finally {
            if(filterData.length > 0){
                setFilteredSubjects(addGradeFormSubjects(loginReducer.loginData.employee.subjectId, filterData));
            }
        }
    };
    useEffect(() => {
        if (universityReducer.currentCourse && studentReducer.currentStudent) {
            fetchStudentSubjects(universityReducer.currentCourse.courseName, studentReducer.currentStudent.albumNo);
        }
        getCurrentStudent(studentReducer.currentStudentId);
    }, [universityReducer.currentCourse, studentReducer.currentStudent]); // ! Put here arguments if you want to wait for redux !

    return (
        <StudentDetailsWrapper>
            <Burger/>
            <BackButton onClick={() => history.push('/studentsPage')}/>
            <AddButton onClick={() => setOpen(!isOpen)} open={isOpen}/>
            {studentReducer.currentStudent ?
                <UserInfoBox>
                    {studentReducer.currentStudent.imageUrl !== '' ?
                        <ImageWrapper src={studentReducer.currentStudent.imageUrl} alt={'avatar'}/> :
                        <ImageWrapper src={DefaultAvatar} alt={'avatar'}/>}
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
                    <CheckMarksButtonWrapper>
                        <Button onClick={() => history.push('/studentGrades')}>
                            Sprawdź oceny {studentReducer.currentStudent.name} {studentReducer.currentStudent.lastName}
                        </Button>
                    </CheckMarksButtonWrapper>
                    {filterData.length > 0 ?
                        <AddGradeForm open={isOpen}
                                      studentAlbum={studentReducer.currentStudent.albumNo}
                                      studentSubjects={filteredSubjects}/>
                        : <></>}
                </UserInfoBox>
                :
                <></>
            }
        </StudentDetailsWrapper>
    );
};

const mapStateToProps = ({studentReducer, universityReducer, loginReducer}) => {
    return {studentReducer, universityReducer, loginReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentStudent: (studentId) => dispatch(getCurrentStudent(studentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CurrentStudentDetails));