import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import axios from 'axios';
import styled from 'styled-components';
import {getUniversities} from "../../../actions/universityActions";
import {API_URL, TOKEN} from "../../../utils/helpers";
import SelectUniversity from "../../Atoms/SelectUniversityMenu/SelectUniversityMenu";
import TextInput from "../../Atoms/TextInput/TextInput";
import {Paper} from "@material-ui/core";
import List from "@material-ui/core/List";
import {StyledListItemButton} from "../AddStudentForm/AddStudentForm.styles";
import AcademicTitleMenu from "../../AcademicTitleSelectMenu/AcademicTitleMenu";
import SelectCourseMenu from "../../Atoms/SelectCourseMenu/SelectCourseMenu";
import SelectMenu from "../../Atoms/SelectMenu/SelectMenu";
import Button from "../../Atoms/Button/Button";
import Switch from '@material-ui/core/Switch';
import AlertComponent from "../../Atoms/Alert/Alert";
import {
    StyledFormText,
    StyledSwitchWrapper,
    TextInputWrapper,
    StyledFormTitle,
    AddEmployeeFormWrapper
} from './AddEmployeForm.styles'

const AddEmployeeForm = ({getUniversities, universityReducer}) => {
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [login, setLogin] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [academictitle, setAcademicTitle] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [enabled, setEnabled] = useState(true);
    const [coursesData, setCoursesData] = useState([]);
    const [subjectsData, setSubjectsData] = useState([]);
    const [employeeUniversities, setEmployeeUniversities] = useState([]);
    const [employeeCourses, setEmployeeCourses] = useState([]);
    const [employeeSubjects, setEmployeeSubjects] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);

    const pushUniversityToArray = (universityId) => {
        setEmployeeUniversities(oldArray => [...oldArray, universityId]);
    };
    const deleteUniversityFromArray = (universityId) => {
        setEmployeeUniversities(employeeUniversities.filter((e) => (e !== universityId)));
    };
    const findUniversityNameById = (id) => {
        const index = universityReducer.universities.findIndex(i => i._id === id);
        return universityReducer.universities[index].universityName;
    };
    const pushCourseToArray = (courseId) => {
        setEmployeeCourses(oldArray => [...oldArray, courseId]);
    };
    const deleteCourseFromArray = (courseId) => {
        setEmployeeCourses(employeeCourses.filter((e) => (e !== courseId)));
    };
    const findCourseNameById = (id) => {
        const index = coursesData.findIndex(i => i._id === id);
        return coursesData[index].courseName;
    };
    const pushSubjectToArray = (subjectId) => {
        setEmployeeSubjects(oldArray => [...oldArray, subjectId]);
    };
    const deleteSubjectFromArray = (subjectId) => {
        setEmployeeSubjects(employeeSubjects.filter((e) => (e !== subjectId)));
    };
    const findSubjectNameById = (id) => {
        const index = subjectsData.findIndex(i => i._id === id);
        return subjectsData[index].subjectName;
    };

    const fetchAllCourses = () => {
        try {
            axios.get(`${API_URL}/course/findAll`).then(res => {
                setCoursesData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const fetchAllSubjects = () => {
        try {
            axios.get(`${API_URL}/subject/findAll`).then(res => {
                setSubjectsData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const addNewEmployee = () => {
        axios.post(`${API_URL}/employee/addEmployee`, {
            academicTitle: academictitle,
            name: name,
            lastName: lastName,
            isAdmin: isAdmin,
            enabled: enabled,
            login: login,
            password: password,
            universityId: employeeUniversities,
            courseId: employeeCourses,
            subjectId: employeeSubjects,
            email: email,
            imageUrl: imageUrl
        },{
            headers: {'Authorization': `Bearer ${TOKEN}`}
        })
            .then(setAlertVisible(true))
            .catch(err => {
                console.log(err);
            });

    }

    useEffect(() => {
        getUniversities();
        fetchAllCourses();
        fetchAllSubjects();
    }, []);

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} onClick={() => setAlertVisible(false)}
                                             message={'Pracownik został dodany pomyślnie'}/>}
            <AddEmployeeFormWrapper>
                <StyledFormTitle>Dodaj nowego pracownika</StyledFormTitle>
                <TextInputWrapper>
                    <AcademicTitleMenu onChange={e => setAcademicTitle(e.target.value)} name={'Academic title'}
                                       placeholder={'Tytuł naukowy'}/>
                    <TextInput onChange={e => setName(e.target.value)} type={'text'} name={'Name'}
                               placeholder={'Imie'}/>
                    <TextInput onChange={e => setLastName(e.target.value)} type={'text'} name={'Last Name'}
                               placeholder={'Nazwisko'}/>
                    <TextInput onChange={e => setLogin(e.target.value)} type={'text'} name={'Login'}
                               placeholder={'Login'}/>
                    <TextInput onChange={e => setPassword(e.target.value)} type={'text'} name={'Password'}
                               placeholder={'Hasło'}/>
                    <TextInput onChange={e => setEmail(e.target.value)} type={'text'} name={'Email'}
                               placeholder={'Email'}/>
                    <TextInput onChange={e => setImageUrl(e.target.value)} type={'text'} name={'Avatar'}
                               placeholder={'Zdjęcie'}/>
                    <StyledSwitchWrapper>
                        <StyledFormText>Aktywny:</StyledFormText>
                        <Switch size={'normal'} checked={enabled} onChange={() => setEnabled(!enabled)}/>
                    </StyledSwitchWrapper>
                    <StyledSwitchWrapper>
                        <StyledFormText>Administrator:</StyledFormText>
                        <Switch size={'normal'} checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)}/>
                    </StyledSwitchWrapper>
                    <StyledFormText>Wybierz uczelnie:</StyledFormText>
                    {universityReducer.universities.length > 0 &&
                    <SelectUniversity
                        onChange={(event) => pushUniversityToArray(event.target.value)}
                        name={'university'}
                        placeholder={'Dodaj uczelnie'}
                        data={universityReducer.universities}
                    />}
                </TextInputWrapper>
                <Paper elevation={5}
                       style={{height: 100, width: 350, overflow: 'auto', textAlign: "center", marginBottom: 30}}>
                    <List height={200}>
                        {
                            employeeUniversities.map((element) =>
                                <StyledListItemButton
                                    onClick={() => deleteUniversityFromArray(element)}>
                                    {findUniversityNameById(element)}
                                </StyledListItemButton>
                            )
                        }
                    </List>
                </Paper>
                <TextInputWrapper>
                    <StyledFormText>Wybierz kierunki:</StyledFormText>
                    {coursesData.length > 0 &&
                    <SelectCourseMenu onChange={e => pushCourseToArray(e.target.value)}
                                      data={coursesData}
                                      name={'Courses'}
                                      placeholder={'Kierunki'}/>}
                </TextInputWrapper>
                <Paper elevation={5}
                       style={{height: 100, width: 350, overflow: 'auto', textAlign: "center", marginBottom: 30}}>
                    <List height={200}>
                        {
                            employeeCourses.map((element) =>
                                <StyledListItemButton
                                    onClick={() => deleteCourseFromArray(element)}>
                                    {findCourseNameById(element)}
                                </StyledListItemButton>
                            )
                        }
                    </List>
                </Paper>
                <TextInputWrapper>
                    <StyledFormText>Wybierz przedmioty:</StyledFormText>
                    {subjectsData.length > 0 &&
                    <SelectMenu onChange={e => pushSubjectToArray(e.target.value)}
                                name={'Subjects'}
                                data={subjectsData}
                                placeholder={'Przedmioty'}/>}
                </TextInputWrapper>
                <Paper elevation={5}
                       style={{height: 100, width: 350, overflow: 'auto', textAlign: "center", marginBottom: 30}}>
                    <List height={200}>
                        {
                            employeeSubjects.map((element) =>
                                <StyledListItemButton
                                    onClick={() => deleteSubjectFromArray(element)}>
                                    {findSubjectNameById(element)}
                                </StyledListItemButton>
                            )
                        }
                    </List>
                </Paper>
                <Button onClick={async () => await addNewEmployee()}
                        disabled={!name || !lastName || !academictitle || !login || !password || !email}>
                    Dodaj pracownika
                </Button>
            </AddEmployeeFormWrapper>
        </>
    );
};

const mapStateToProps = ({universityReducer}) => {
    return {
        universityReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployeeForm);