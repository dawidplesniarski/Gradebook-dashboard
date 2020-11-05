import styled from "styled-components";

const AddStudentFormWrapper = styled.div`
  background-color: #FFF;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  align-items: center;
  margin-bottom: 10px;
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
  @media(max-width: 768px) {
    font-size: 20px;
  }
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

export {StyledFormTitle, StyledSwitchWrapper, StyledFormText, TextInputWrapper, AddStudentFormWrapper};