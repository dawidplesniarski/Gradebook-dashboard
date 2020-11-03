import React from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import Burger from "../../components/Molecules/Hamburger/Burger";
import StudentIcon from '../../assets/images/students-cap.png';
import BriefCaseIcon from '../../assets/images/briefcase.png';
import UniversityIcon from '../../assets/images/university.png';
import SubjectsIcon from '../../assets/images/reading-book.png';
import CoursesIcon from '../../assets/images/wind-rose.png';
import AdminBaner from '../../assets/images/admin-text.svg';
import Footer from "../../components/Molecules/Footer/Footer";


const StyledMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const MenuIconsRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-around;
  img {
    width: 200px;
    height: 200px;
  }
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
  @media (max-width: 850px) {
    font-size: 1.1rem;
  }
`;

const AdminMainPage = ({loginReducer, history}) => {
  return(
      <>
          <Burger isAdminOpened={true}/>
          <StyledMainPageContainer>
              <img src={AdminBaner} alt={'admin'}/>
              <MenuIconsRow>
                  <StyledButton onClick={() => history.push('/adminStudentsPage')}>
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
              <MenuIconsRow>
                  <StyledButton>
                      <StyledIconDescription>
                          Uczelnie
                      </StyledIconDescription>
                      <img src={UniversityIcon} alt={'uczelnia'}/>
                  </StyledButton>
                  <StyledButton>
                      <StyledIconDescription>
                          Przedmioty
                      </StyledIconDescription>
                      <img src={SubjectsIcon} alt={'przedmioty'}/>
                  </StyledButton>
              </MenuIconsRow>
              <MenuIconsRow>
                  <StyledButton>
                      <StyledIconDescription>
                          Kierunki
                      </StyledIconDescription>
                      <img src={CoursesIcon} alt={'kierunki'}/>
                  </StyledButton>
              </MenuIconsRow>
          </StyledMainPageContainer>
          <Footer/>
      </>
  );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
}

export default connect(mapStateToProps)(withRouter(AdminMainPage));