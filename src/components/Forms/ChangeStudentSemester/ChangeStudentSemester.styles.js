import styled from 'styled-components';

const ChangeSemesterFormWrapper = styled.div`
  margin-top: 30px;
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

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 35%;
  justify-content: space-between;
`;

const StyledUpgradeButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  &:hover {
    opacity: 50%;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormText = styled.p`
  font-family: Montserrat,serif;
  font-weight: normal;
  color: #282c34;
  font-size: 12px;
`;

export {ChangeSemesterFormWrapper, ButtonContent, StyledFormText, StyledUpgradeButton, ButtonsWrapper, StyledFormTitle, StyledContentWrapper};