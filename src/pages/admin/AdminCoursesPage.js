import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {getCourses} from "../../actions/courseActions";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import Footer from "../../components/Molecules/Footer/Footer";

const StyledCoursesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const SearchBarWrapper = styled.div`
  width: 40%;
`;

const AdminCoursesPage = ({courseReducer, getCourses, history}) => {

    useEffect(() => {
        getCourses();
    },[]);
    return(
        <>
            <Burger isAdminOpened={true}/>
            <BackButton onClick={() => history.push('/adminMainPage')}/>
            <StyledCoursesPageContainer>
                <span>{courseReducer.courses.length}</span>
            </StyledCoursesPageContainer>
            <Footer/>
        </>
    );
};

const mapStateToProps = ({courseReducer}) => {
    return {courseReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: () => dispatch(getCourses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminCoursesPage));