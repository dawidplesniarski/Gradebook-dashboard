import React from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import EditUniversityForm from "../../components/Forms/EditUniversityForm/EditUniversityForm";
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

const SelectedUniversityPage = ({history, universityReducer}) => {
  return(
      <>
          <Burger isAdminOpened={true}/>
          <BackButton onClick={() => history.push('/adminUniversitiesPage')}/>
          <StyledWrapper>
              {universityReducer.currentUniversity && <EditUniversityForm universityData={universityReducer.currentUniversity}/>}
          </StyledWrapper>
          <Footer/>
      </>
  );
};

const mapStateToProps = ({universityReducer}) => {
    return {universityReducer};
}

export default connect(mapStateToProps)(withRouter(SelectedUniversityPage));