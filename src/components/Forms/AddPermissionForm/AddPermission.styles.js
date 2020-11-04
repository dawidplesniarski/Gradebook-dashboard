import styled from 'styled-components';

const AddPermissionFormWrapper = styled.div`
  background-color: #FFF;
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

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
`;

const SelectMenuWrapper = styled.div`
  width: 75%;
`;

const StyledSmallText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 1.2rem;
`;

const StyledListItemButton = styled.button`
  font-family: Montserrat,serif;
  font-weight: normal;
  font-size: 1rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 75%;
  text-align: center;
`;

export {AddPermissionFormWrapper, ButtonWrapper, StyledListItemButton, StyledSmallText, SelectMenuWrapper, StyledFormTitle};