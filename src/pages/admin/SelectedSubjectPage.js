import React, {useState} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import Footer from "../../components/Molecules/Footer/Footer";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const SelectedSubjectPage = ({history, subjectReducer}) => {
  return(
      <>
          <Burger isAdminOpened={true}/>
          <BackButton onClick={() => history.push('/adminSubjectsPage')}/>
          <StyledWrapper>
              {subjectReducer.currentSubject && <span>{subjectReducer.currentSubject.subjectDetails.ects}</span>}
          </StyledWrapper>
          <Footer/>
      </>
  );
};

const mapStateToProps = ({subjectReducer}) => {
    return {subjectReducer};
}

export default connect(mapStateToProps)(withRouter(SelectedSubjectPage));