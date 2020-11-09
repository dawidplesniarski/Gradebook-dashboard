import styled from 'styled-components';

const AddCourseSubjectWrapper = styled.div`
  margin-top: 20px;
  background-color: #fafafa;
  border-radius: 15px;
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

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
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

const SelectMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const SmallNumberTextInput = styled.input`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0;
  text-align: center;
  background-color: #EEEEEE;
  font-family: Montserrat,serif;
  font-weight: bold;
`;

export {StyledFormTitle, StyledContentWrapper, AddCourseSubjectWrapper, SelectMenuWrapper, SmallNumberTextInput};