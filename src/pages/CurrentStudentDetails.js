import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import {getCurrentStudent} from "../actions/studentActions";
import Burger from "../components/Molecules/Hamburger/Burger";

const CurrentStudentDetails = ({studentReducer, getCurrentStudent}) => {
    useEffect(() => {
        getCurrentStudent(studentReducer.currentStudentId);
    },[])
    return (
        <div>
            <Burger/>
        </div>
    );
};

const mapStateToProps = (studentReducer) => {
    return studentReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentStudent: (studentId) => dispatch(getCurrentStudent(studentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CurrentStudentDetails));