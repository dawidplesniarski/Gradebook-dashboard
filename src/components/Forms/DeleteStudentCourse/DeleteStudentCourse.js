import React, {useState} from "react";
import {connect} from 'react-redux';
import axios from 'axios';
import {StyledFormTitle, StyledContentWrapper, DeleteStudentCourseWrapper} from './DeleteStudentCourse.styles';
import SelectStudentCourses from "../../Atoms/SelectStudentCoursesMenu/SelectStudentCourses";
import Button from "../../Atoms/Button/Button";
import {API_URL, TOKEN} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";

const DeleteStudentCourse = ({studentReducer}) => {
    const [courseName, setCourseName] = useState(null);
    const [alertVisible, setAlertVisible] = useState(false);

    const deleteCourse = () => {
        try {
            axios.post(`${API_URL}/users/deleteUserCourse`, {
                userId: studentReducer.currentStudent._id,
                courseName: courseName
            }, {
                headers: {'Authorization': `Bearer ${TOKEN}`}
            }).then(setAlertVisible(true));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Kierunek został usunięty pomyślnie'}
                                             onClick={() => setAlertVisible(false)}/>}
            <DeleteStudentCourseWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Usuń kierunek studiów</StyledFormTitle>
                    {studentReducer.currentStudent && <SelectStudentCourses
                        onChange={e => setCourseName(e.target.value)}
                        name={'Course'}
                        placeholder={'Wybierz kierunek'}
                        data={studentReducer.currentStudent.courseId}/>}
                    <Button disabled={!courseName} onClick={async () => await deleteCourse()}>
                        Usuń kierunek
                    </Button>
                </StyledContentWrapper>
            </DeleteStudentCourseWrapper>
        </>
    );
};

const mapStateToProps = ({studentReducer}) => {
    return {studentReducer};
}

export default connect(mapStateToProps)(DeleteStudentCourse);