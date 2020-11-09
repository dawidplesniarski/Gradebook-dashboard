import React, {useEffect, useState} from "react";
import axios from 'axios';
import {
    AddCourseWrapper,
    StyledContentWrapper,
    StyledFormTitle,
    StyledFormText,
    StyledListWrapper,
    StyledSemesterCounter,
    StyledAddButton
} from './AddCourseForm.styles';
import TextInput from "../../Atoms/TextInput/TextInput";
import {API_URL} from "../../../utils/helpers";
import List from "@material-ui/core/List";
import {Paper} from '@material-ui/core';
import SelectSubjectMenu from "../../Atoms/SelectSubjectMenu/SelectSubjectMenu";
import {StyledListItemButton} from "../AddStudentForm/AddStudentForm.styles";
import PlusIcon from '../../../assets/images/plus.png';
import Button from "../../Atoms/Button/Button";

const AddCourseForm = () => {
    const [subjectsData, setSubjectsData] = useState([]);
    const [courseName, setCourseName] = useState(null);
    const [semesters, setSemesters] = useState([]);
    const [semesterSubjects, setSemesterSubjects] = useState([]);
    const [index, setIndex] = useState(1);

    const pushSemesterSubjectsToSemesters = (subjects) => {
        setSemesters(oldArr => [...oldArr, subjects]);
        setIndex(index + 1);
        setSemesterSubjects([]);
    };
    const pushSubject = (subject) => {
        setSemesterSubjects(oldArr => [...oldArr, subject]);
    };
    const deleteSubject = (subjectName) => {
        setSemesterSubjects(semesterSubjects.filter((e) => (e !== subjectName)));
    };

    const fetchSubjects = () => {
        axios.get(`${API_URL}/subject/findAll`)
            .then(res => {
                setSubjectsData(res.data);
            }).catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        fetchSubjects();
    }, [])
    return (
        <>
            <AddCourseWrapper>
                <StyledContentWrapper>
                    <StyledFormTitle>Dodaj nowy kierunek:</StyledFormTitle>
                    <TextInput onChange={e => setCourseName(e.target.value)} type={'text'} name={'Course'}
                               placeholder={'Nazwa kierunku'}/>
                    <StyledFormText>Dodaj przedmioty:</StyledFormText>
                    {subjectsData.length > 0 &&
                    <SelectSubjectMenu onChange={e => pushSubject(e.target.value)} name={'Subject'}
                                       placeholder={'Dodaj przedmiot'} data={subjectsData}/>
                    }
                    <StyledListWrapper>
                        <StyledSemesterCounter>
                            <span>{index}</span>
                        </StyledSemesterCounter>
                        <Paper elevation={5}
                               style={{
                                   height: 100,
                                   width: 350,
                                   overflow: 'auto',
                                   textAlign: "center",
                                   marginRight: 10,
                                   marginLeft: 10
                               }}>
                            <List height={200}>
                                {
                                    semesterSubjects.map((element) =>
                                        <StyledListItemButton
                                            onClick={() => deleteSubject(element)}>
                                            {element}
                                        </StyledListItemButton>
                                    )
                                }
                            </List>
                        </Paper>
                        <StyledAddButton onClick={() => pushSemesterSubjectsToSemesters(semesterSubjects)} disabled={semesterSubjects.length === 0}>
                            <img src={PlusIcon} alt={'plus'}/>
                        </StyledAddButton>
                    </StyledListWrapper>
                    <Button disabled={!courseName || semesters.length === 0}>
                        Dodaj kierunek
                    </Button>
                </StyledContentWrapper>
            </AddCourseWrapper>
        </>
    );
};

export default AddCourseForm;