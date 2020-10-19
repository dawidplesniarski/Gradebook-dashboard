import React, {useEffect} from "react";
import {StudentInfoWrapper} from "./StudentInfo.styles";
import {connect} from "react-redux";
import {getCurrentStudent} from "../../../actions/studentActions";

const StudentInfo = ({studentReducer, getCurrentStudent}) => {
    useEffect(() => {
        getCurrentStudent(studentReducer.currentStudentId);
    },[]);
    return (
        <div>
            {studentReducer.currentStudent ?
                <StudentInfoWrapper>
                    <span>{studentReducer.currentStudent.name}</span>
                    <span>{studentReducer.currentStudent.lastName}</span>
                </StudentInfoWrapper> :
                <div/>}
        </div>
    );
};

const mapStateToProps = (studentReducer) => {
    return studentReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentStudent: (studentId) => dispatch(getCurrentStudent(studentId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentInfo);