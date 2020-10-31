import React from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import Burger from "../../components/Molecules/Hamburger/Burger";
import StudentIcon from '../../assets/images/students-cap.png';
import BriefCaseIcon from '../../assets/images/briefcase.png';


const StyledMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const MenuIconsRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-around;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
    }
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: 0;
  &:hover {
    img {
      opacity: 50%;
    }
  }
`;

const StyledIconDescription = styled.p`
  font-family: Montserrat,serif;
  font-weight: normal;
  font-size: 1.5rem;
`;

const AdminMainPage = ({loginReducer}) => {
  return(
      <>
          <Burger isAdminOpened={true}/>
          <StyledMainPageContainer>
              <MenuIconsRow>
                  <StyledButton>
                      <StyledIconDescription>
                          Studenci
                      </StyledIconDescription>
                      <img src={StudentIcon} alt={'student'}/>
                  </StyledButton>
                  <StyledButton>
                      <StyledIconDescription>
                          Pracownicy
                      </StyledIconDescription>
                      <img src={BriefCaseIcon} alt={'employee'}/>
                  </StyledButton>
              </MenuIconsRow>
          </StyledMainPageContainer>
      </>
  );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
}

export default connect(mapStateToProps)(withRouter(AdminMainPage));