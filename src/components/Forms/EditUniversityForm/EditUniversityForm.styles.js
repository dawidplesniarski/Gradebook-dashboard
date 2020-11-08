import styled from 'styled-components';

const EditUniversityFormWrapper = styled.div`
  background-color: #fafafa;
  border: 1px solid #606060;
  width: 700px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 1rem;
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
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

export {EditUniversityFormWrapper, StyledFormTitle, TextInputWrapper};