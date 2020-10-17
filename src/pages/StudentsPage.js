import React, {useState, useEffect} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import axios from 'axios';
import {API_URL} from "../utils/helpers";
import {getUniversities} from "../actions/universityActions";
import SideBar from "../components/SideBar/SideBar";
import Teacher from '../assets/images/teacher1.svg'
import UsersTable from "../components/Tables/UsersTable";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import {MainTableWrapper, MainPageContainer, StyledWrapper, TableWrapper} from "../styles/MainPage.styles";


const StudentsPage = ({universityReducer}) => {
    const [studentsData, setStudentsData] = useState([]);

    function fetchAllStudents(university, course) {
        try {
            axios.get(`${API_URL}/users/findByUniversityAndCourse/${university}/${course}`).then(res => {
                setStudentsData(res.data);
            });
        } catch {
            console.log('error occured');
        }
    }

    useEffect(() => {
        fetchAllStudents(universityReducer.currentUniversity._id, universityReducer.currentCourse._id);
    }, []);

    return (
        <StyledWrapper>
            <MainPageContainer>
                <SideBar/>
                <MainTableWrapper>
                    <img src={Teacher} alt={'teacher photo'}/>
                    <Grow in={(studentsData.length > 0)} timeout={300}>
                        <div style={{width: '120%'}}>
                            <Paper elevation={5}>
                                <UsersTable data={studentsData}/>
                            </Paper>
                        </div>
                    </Grow>
                </MainTableWrapper>
            </MainPageContainer>
        </StyledWrapper>

    );
}

const mapStateToProps = (universityReducer) => {
    return universityReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentsPage));
