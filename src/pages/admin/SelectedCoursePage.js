import React, {useState} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import {connect} from 'react-redux';
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import Footer from "../../components/Molecules/Footer/Footer";
import EditCourseForm from "../../components/Forms/EditCourseForm/EditCourseForm";
import DeleteCourseSubject from "../../components/Forms/DeleteCourseSubject/DeleteCourseSubject";
import AddCourseSubject from "../../components/Forms/AddCourseSubject/AddCourseSubject";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const SelectedCoursePage = ({history, courseReducer}) => {
  return (
      <>
          <Burger isAdminOpened={true}/>
          <BackButton onClick={() => history.push('/adminCoursesPage')}/>
          <StyledWrapper>
              {courseReducer.currentCourse &&
                  <>
                      <EditCourseForm courseData={courseReducer.currentCourse}/>
                      <AddCourseSubject subjects={courseReducer.currentCourse.courseSubjects}/>
                      <DeleteCourseSubject subjects={courseReducer.currentCourse.courseSubjects}/>
                  </>
              }
          </StyledWrapper>
          <Footer/>
      </>
  );
};

const mapStateToProps = ({courseReducer}) => {
    return {courseReducer};
};

export default connect(mapStateToProps)(withRouter(SelectedCoursePage));