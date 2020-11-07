import React from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedUniversityPage = ({history, universityReducer}) => {
  return(
      <>
          <Burger isAdminOpened={true}/>
          <BackButton onClick={() => history.push('/adminUniversitiesPage')}/>
          <StyledWrapper>
              {universityReducer.currentUniversity && <span>{universityReducer.currentUniversity.universityName}</span>}
          </StyledWrapper>
      </>
  );
};

const mapStateToProps = ({universityReducer}) => {
    return {universityReducer};
}

export default connect(mapStateToProps)(withRouter(SelectedUniversityPage));