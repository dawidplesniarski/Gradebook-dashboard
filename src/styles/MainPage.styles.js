import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainPageContainer = styled.div`
   display: flex;
   align-items: center;
   width: 50%;
   padding-left: 8%;
   @media screen and (max-width: 900px) {
   margin-left: 100px;
   }
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
  width: 100%;
  text-align: center;
`;

export {StyledWrapper, MainPageContainer, MainTableWrapper, TableWrapper};