import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {getCurrentStudent} from "../actions/studentActions";
import Burger from "../components/Molecules/Hamburger/Burger";
import styled from 'styled-components';
import Avatar from '../assets/images/male-avatar1.svg'

const StudentDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  padding-top: 30px;
`;
const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  img {
  width: 150px;
  height: 150px;
  border-radius: 100px;
  }
  @media(max-width: 768px) {
  img {
    width: 70px;
    height: 70px;
    border-radius: 50px;
  }
  }
`;
const StyledParagraph = styled.p`
  font-family: Helvetica,serif;
  font-size: 20px;
`;

const CurrentStudentDetails = ({studentReducer, getCurrentStudent}) => {
    useEffect(() => {
        getCurrentStudent(studentReducer.currentStudentId);
    }, [])
    return (
        <StudentDetailsWrapper>
            <Burger/>
            {studentReducer.currentStudent ?
                <UserInfoBox>
                    <img src={studentReducer.currentStudent.imageUrl} alt={'avatar'}/>
                    <StyledParagraph>{studentReducer.currentStudent.name}</StyledParagraph>
                    <StyledParagraph>{studentReducer.currentStudent.lastName}</StyledParagraph>
                    <ul>
                        {
                            studentReducer.currentStudent.courseId.map((e) => <li>{e.courseName}</li>)
                        }
                    </ul>
                </UserInfoBox> :
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