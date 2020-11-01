import React from "react";
import styled from 'styled-components';
import {connect} from "react-redux";
import {withRouter} from "react-router";

const SelectedStudentPage = ({studentReducer}) => {
    return(
        <>
            <span>{studentReducer.currentStudentId}</span>
        </>
    )
};

const mapStateToProps = ({studentReducer}) => {
    return {studentReducer};
}

export default connect(mapStateToProps)(withRouter(SelectedStudentPage));