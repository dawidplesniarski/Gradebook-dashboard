import styled from 'styled-components';

const AddStudentFormWrapper = styled.div`
  //position: fixed;
  background-color: #FFF;
  //left : 30%;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  align-items: center;
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 800px) {
    width: 400px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
`;

const TextInputWrapper = styled.div`
  width: 80%;
`;

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
`;

const StyledFormText = styled.p`
  font-family: Montserrat,serif;
  font-weight: normal;
  font-size: 20px;
`;

const StyledSwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledListItemButton = styled.button`
  font-family: Montserrat,serif;
  font-weight: normal;
  font-size: 1rem;
`;

export {AddStudentFormWrapper, TextInputWrapper, StyledFormText, StyledSwitchWrapper, StyledFormTitle, StyledListItemButton};