import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainPageContainer = styled.div`
   display: flex;
   align-items: center;
   width: 50%;
`;

const MainTableWrapper = styled.div`
   display: flex;
   width: 100%;
   margin-top: 30px;
   flex-direction: column;
   align-items: center;
   img {
   width: 60%;
   margin-bottom: 20px;
   }
`;

const TableWrapper = styled.div`
  text-align: center;
  @media(min-width: 1000px) {
  width: 100%;
  }
`;

const UsersTableWrapper = styled.div`
  text-align: center;
  @media(min-width: 1000px) {
  width: 120%;
  }
`;

const UsersMainTableWrapper = styled.div`
   display: flex;
   margin-top: 30px;
   flex-direction: column;
   align-items: center;
   img {
   width: 60%;
   margin-bottom: 20px;
   }
`;

export {StyledWrapper, MainPageContainer, MainTableWrapper, TableWrapper, UsersTableWrapper, UsersMainTableWrapper};