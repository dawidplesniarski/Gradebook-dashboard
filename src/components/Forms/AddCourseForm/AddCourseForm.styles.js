import styled from 'styled-components';

const AddCourseWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #FBFBFB;
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
  justify-content: space-between;
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

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledSemesterCounter = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f1f0f0;
  border: 1px solid #b8b8b8;
  span {
    font-family: Montserrat,serif;
    font-weight: Bold;
    font-size: 20px;
  }
`;

const StyledAddButton = styled.button`
  background-color: transparent;
  border: 0;
  img {
    width: 50px;
    height: 50px;
  }
  &:hover {
    opacity: 70%;
  }
`;

export {AddCourseWrapper, StyledContentWrapper, StyledFormTitle, StyledFormText, StyledListWrapper, StyledSemesterCounter, StyledAddButton};