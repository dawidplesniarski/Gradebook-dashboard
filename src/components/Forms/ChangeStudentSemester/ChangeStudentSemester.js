import React, {useState} from "react";
import SelectStudentCourses from "../../Atoms/SelectStudentCoursesMenu/SelectStudentCourses";
import {connect} from 'react-redux';
import ArrowUp from '../../../assets/images/arrow-up.png';
import ArrowDown from '../../../assets/images/arrow-down.png';
import axios from 'axios';
import {API_URL, TOKEN} from "../../../utils/helpers";
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
    const [increaseErrorAlertVisible, setIncreaseErrorAlertVisible] = useState(false);
    const [decreaseAlertVisible, setDecreaseAlertVisible] = useState(false);

    const increaseStudentSemester = () => {
        axios.post(`${API_URL}/users/increaseSemester`,{
            userId: studentReducer.currentStudent._id,
            courseName: courseName
        },{
            headers: {'Authorization': `Bearer ${TOKEN}`}
        })
            .then(setIncreaseAlertVisible(true))
            .catch(err => {
                console.log(err);
            })
    };

    const fetchTotalEcts = (courseName, album) => {
        const index = studentReducer.currentStudent.courseId.findIndex(i => i.courseName === courseName);
        const semester = studentReducer.currentStudent.semesters[index];
        axios.get(`${API_URL}/subject/totalEcts/${courseName}/${semester}/${album}`)
            .then(res =>{
                console.log(eval(res.data.ects / res.data.totalEcts))
            if(eval(res.data.ects / res.data.totalEcts) === 1) {
                console.log('semester increased')
                increaseStudentSemester();
            } else {
                setIncreaseErrorAlertVisible(true);
                console.log('cannot increase semester');
            }
        }).catch(err => {
            console.log(err);
        })
    }

    const decreaseStudentSemester = (successCallback) => {
        try {
            axios.post(`${API_URL}/users/decreaseSemester`,{
                userId: studentReducer.currentStudent._id,
                courseName: courseName
            },{
                headers: {'Authorization': `Bearer ${TOKEN}`}
            })
            successCallback();
        } catch (err) {
            console.log(err);
        }
    }

   return (
       <>
        {increaseAlertVisible && <AlertComponent type={'success'} message={`Semestr kierunku ${courseName} został zaliczony`} onClick={() => setIncreaseAlertVisible(false)}/>}
        {increaseErrorAlertVisible && <AlertComponent type={'error'} message={`Brak zaliczenia z kierunku ${courseName}`} onClick={() => setIncreaseErrorAlertVisible(false)}/>}
        {decreaseAlertVisible && <AlertComponent type={'success'} message={`Semestr z kierunku ${courseName} został cofnięty`} onClick={() => setDecreaseAlertVisible(false)}/>}
        <ChangeSemesterFormWrapper>
            <StyledFormTitle>Semestry studenta</StyledFormTitle>
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
                <StyledUpgradeButton onClick={async () => await fetchTotalEcts(courseName, studentReducer.currentStudent.albumNo)} disabled={!courseName}>
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