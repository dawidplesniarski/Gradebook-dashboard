import React, {useState} from "react";
import {EditCourseFormWrapper, StyledFormTitle, TextInputWrapper} from './EditCourseForm.styles';
import axios from 'axios';
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";
import AlertComponent from "../../Atoms/Alert/Alert";
import {API_URL, TOKEN} from "../../../utils/helpers";

const EditCourseForm = ({courseData}) => {
    const [courseName, setCourseName] = useState(courseData.course.courseName);
    const [alertVisible, setAlertVisible] = useState(false);

    const editCourseData = (course) => {
        axios.put(`${API_URL}/course/editCourseData`,{
            courseName: course,
            newCourseName: courseName
        },{
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(res => {
            if(res.data) {
                setAlertVisible(true);
            }
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Kierunek został zaktualizowany'} onClick={() => setAlertVisible(false)}/>}
            <EditCourseFormWrapper>
                <StyledFormTitle>Edycja kierunku: {courseData.course.courseName}</StyledFormTitle>
                <TextInputWrapper>
                    <TextInput onChange={e => setCourseName(e.target.value)} type={'text'} name={'Corse'}
                               defaultValue={courseData.course.courseName}/>
                </TextInputWrapper>
                <Button disabled={!courseName} onClick={async () => await editCourseData(courseData.course.courseName)}>
                    Zaktualizuj
                </Button>
            </EditCourseFormWrapper>
        </>
    );
};

export default EditCourseForm;