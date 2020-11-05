import React, {useState} from "react";
import styled from 'styled-components';
import SelectStudentCourses from "../../Atoms/SelectStudentCoursesMenu/SelectStudentCourses";
import {connect} from 'react-redux';
import ArrowUp from '../../../assets/images/arrow-up.png';
import ArrowDown from '../../../assets/images/arrow-down.png';
import axios from 'axios';
import {API_URL} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";
import {
    ChangeSemesterFormWrapper,
    ButtonContent,
    StyledFormText,
    StyledUpgradeButton,
    ButtonsWrapper,
    StyledFormTitle,
    StyledContentWrapper} from './ChangeStudentSemester.styles'


const ChangeStudentSemester = ({studentReducer}) => {
    const [courseName, setCourseName] = useState(null);
    const [increaseAlertVisible, setIncreaseAlertVisible] = useState(false);
    const [decreaseAlertVisible, setDecreaseAlertVisible] = useState(false);

    const increaseStudentSemester = (successCallback) => {
        const token = localStorage.getItem('token');
        try {
            axios.post(`${API_URL}/users/increaseSemester`,{
                userId: studentReducer.currentStudent._id,
                courseName: courseName
            },{
                headers: {'Authorization': `Bearer ${token}`}
            })
            successCallback();
        } catch (err) {
            console.log(err);
        }
    }

    const decreaseStudentSemester = (successCallback) => {
        const token = localStorage.getItem('token');
        try {
            axios.post(`${API_URL}/users/decreaseSemester`,{
                userId: studentReducer.currentStudent._id,
                courseName: courseName
            },{
                headers: {'Authorization': `Bearer ${token}`}
            })
            successCallback();
        } catch (err) {
            console.log(err);
        }
    }

   return (
       <>
        {increaseAlertVisible && <AlertComponent type={'success'} message={`Semestr z kierunku ${courseName} został zaliczony`} onClick={() => setIncreaseAlertVisible(false)}/>}
        {decreaseAlertVisible && <AlertComponent type={'success'} message={`Semestr z kierunku ${courseName} został cofnięty`} onClick={() => setDecreaseAlertVisible(false)}/>}
        <ChangeSemesterFormWrapper>
            <StyledFormTitle>Zarządzaj kierunkami studenta</StyledFormTitle>
            <StyledContentWrapper>
                <SelectStudentCourses
                    onChange={(event) => setCourseName(event.target.value)}
                    name={'subjectName'}
                    placeholder={'Wybierz kierunek'}
                    data={studentReducer.currentStudent.courseId}/>
            </StyledContentWrapper>
            <ButtonsWrapper>
                <StyledUpgradeButton onClick={async () => await decreaseStudentSemester(() => setDecreaseAlertVisible(true))} disabled={!courseName}>
                    <ButtonContent>
                        <StyledFormText>Cofnij</StyledFormText>
                        <img src={ArrowDown} alt={'decrease'}/>
                    </ButtonContent>
                </StyledUpgradeButton>
                <StyledUpgradeButton onClick={async () => await increaseStudentSemester(() => setIncreaseAlertVisible(true))} disabled={!courseName}>
                    <ButtonContent>
                        <StyledFormText>Zalicz</StyledFormText>
                        <img src={ArrowUp} alt={'upgrade'}/>
                    </ButtonContent>
                </StyledUpgradeButton>
            </ButtonsWrapper>
        </ChangeSemesterFormWrapper>
       </>
   );
};

const mapStateToProps = ({studentReducer}) => {
    return {studentReducer};
};

export default connect(mapStateToProps)(ChangeStudentSemester);