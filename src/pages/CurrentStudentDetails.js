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

const CurrentStudentDetails = ({studentReducer, getCurrentStudent}) => {
    const [isOpen, setOpen] = useState(false);
    useEffect(() => {
        getCurrentStudent(studentReducer.currentStudentId);
    }, [])

    return (
        <StudentDetailsWrapper>
            <Burger/>
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
                </UserInfoBox>
                :
                <></>
            }
        </StudentDetailsWrapper>
    );
};

const mapStateToProps = (studentReducer) => {
    return studentReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentStudent: (studentId) => dispatch(getCurrentStudent(studentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CurrentStudentDetails));