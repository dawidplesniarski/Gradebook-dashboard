import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getUniversities} from "../actions/universityActions";

const StudentPage = (studentReducer) => {
    useEffect(() => {
        console.log(studentReducer.currentStudent)
    },[])
    return(
        <div>
            {studentReducer.currentStudent && <span>{studentReducer.currentStudent.name}</span>}
            {studentReducer.currentStudent && <span>{studentReducer.currentStudent.lastName}</span>}
        </div>
    );
};

const mapStateToProps = ({studentReducer}) => {
    return studentReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(withRouter(StudentPage));