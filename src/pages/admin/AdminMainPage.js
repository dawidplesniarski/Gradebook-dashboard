import React from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from "react-router";


const StyledMainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const AdminMainPage = ({loginReducer}) => {
  return(
      <StyledMainPageContainer>
          <span>Admin</span>
          <span>{loginReducer.loginData.employee.lastName}</span>
      </StyledMainPageContainer>
  );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
}

export default connect(mapStateToProps)(withRouter(AdminMainPage));