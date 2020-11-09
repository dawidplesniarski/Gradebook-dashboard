import React, {useState} from "react";
import {StyledFormTitle, StyledContentWrapper, DeleteCourseSubjectWrapper, SelectMenuWrapper, SmallNumberTextInput} from './DeleteCourseSubject.styles';
import axios from 'axios';
import SelectSemesterSubject from "../../Atoms/SelectSemesterSubject/SelectSemesterSubject";
import Button from "../../Atoms/Button/Button";
import {API_URL, TOKEN} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";

const DeleteCourseSubject = ({subjects}) => {
    const [subject, setSubject] = useState(null);
    const [semester, setSemester] = useState(1);
    const [alertVisible, setAlertVisible] = useState(false);

    const deleteSubject = (courseName) => {
        axios.put(`${API_URL}/course/deleteSubjectFromSemester`,{
            semester: semester - 1,
            courseName: courseName,
            subjectToRemove: subject
        },{
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(res => {
            if(res.data) {
                setAlertVisible(true);
            }
        });
    };

    return(
        <>
            {alertVisible && <AlertComponent type={'success'} message={`Przedmiot ${subject} został usunięty z kierunku ${subjects.course}`} onClick={() => setAlertVisible(false)}/>}
            <DeleteCourseSubjectWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Usuń przedmiot z danego semestru:</StyledFormTitle>
                    <SelectMenuWrapper>
                        <SmallNumberTextInput onChange={(event) => setSemester(event.target.value)}
                                              type={'number'}
                                              min={1}
                                              max={subjects.semesters.length}
                                              step={1}
                                              defaultValue={1}
                        />
                        <SelectSemesterSubject onChange={e => setSubject(e.target.value)} name={'Subjects'} data={subjects.semesters[semester-1]} placeholder={`Przedmioty z semestru ${semester}`}/>
                    </SelectMenuWrapper>
                    <Button disabled={!subject} onClick={async () => await deleteSubject(subjects.course)}>
                        Usuń przedmiot
                    </Button>
                </StyledContentWrapper>
            </DeleteCourseSubjectWrapper>
        </>
    );
};

export default DeleteCourseSubject;