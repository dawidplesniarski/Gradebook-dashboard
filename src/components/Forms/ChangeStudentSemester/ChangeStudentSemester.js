import React, {useState} from "react";
import styled from 'styled-components';
import SelectStudentCourses from "../../Atoms/SelectStudentCoursesMenu/SelectStudentCourses";
import {connect} from 'react-redux';
import ArrowUp from '../../../assets/images/arrow-up.png';
import ArrowDown from '../../../assets/images/arrow-down.png';
import axios from 'axios';
import {API_URL} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";

const ChangeSemesterFormWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #FFF;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  align-items: center;
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 800px) {
    width: 400px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 35%;
  justify-content: space-between;
`;

const StyledUpgradeButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  &:hover {
    opacity: 50%;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormText = styled.p`
  font-family: Montserrat,serif;
  font-weight: normal;
  color: #282c34;
  font-size: 12px;
`;


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
                        <img src={ArrowDown} alt={'degrade'}/>
                    </ButtonContent>
                </StyledUpgradeButton>
                <StyledUpgradeButton onClick={async () => await increaseStudentSemester(() => setIncreaseAlertVisible(true))} disabled={!courseName}>
                    <ButtonContent>
                        <StyledFormText>Zalicz</StyledFormText>
                        <img src={ArrowUp} alt={'degrade'}/>
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