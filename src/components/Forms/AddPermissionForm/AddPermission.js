import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {API_URL, compareSubjectArrays, getEmployeeSubjects} from "../../../utils/helpers";
import SelectTestCategory from "../../Atoms/SelectTestCategory/SelectTestCategory";
import {connect} from 'react-redux';
import axios from "axios";
import SelectStudentMenu from "../../Atoms/SelectStudentMenu/SelectStudentMenu";
import List from "@material-ui/core/List";
import {Paper} from "@material-ui/core";
import Button from '../../Atoms/Button/Button'
import {
    AddPermissionFormWrapper,
    ButtonWrapper,
    StyledListItemText,
    StyledSmallText,
    SelectMenuWrapper,
    StyledFormTitle
} from './AddPermission.styles'
import AlertComponent from "../../Atoms/Alert/Alert";
import {StyledWrapper} from "../AddGrade/AddGradeForm.styles";

const AddPermission = ({loginReducer}) => {
    const [subjectsData, setSubjectsData] = useState([]);
    const [studentsData, setStudentsData] = useState([]);
    const [subject, setSubject] = useState('');
    const [studentAlbums, setStudentAlbums] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const employeeSubjects = getEmployeeSubjects(loginReducer.loginData.employee.subjectId);

    const fetchSubjects = () => {
        try {
            axios.get(`${API_URL}/subject/findAll`).then(res => {
                setSubjectsData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const fetchStudents = () => {
        try {
            axios.get(`${API_URL}/users/findAll`).then(res => {
                setStudentsData(res.data);
            });
        } catch (err) {
            console.log(err);
        }
    };

    const addTestPermission = (successCallback, errorCallback) => {
        try {
            axios.post(`${API_URL}/permission/addPermission`, {
                category: subject,
                userAlbums: studentAlbums
            });
            successCallback();
        } catch {
            errorCallback();
        }
        ;
    };

    function pushAlbumToArrays(album) {
        setStudentAlbums(oldArray => [...oldArray, album])
    };

    useEffect(() => {
        fetchSubjects();
        fetchStudents();
    }, []);

    return (
        <AddPermissionFormWrapper>
            {alertVisible === true ? <AlertComponent type={'success'} onClick={() => setAlertVisible(!alertVisible)} message={'Uprawnienia zostały dodane pomyślnie'}/> : <></>}
            {errorAlertVisible === true ? <AlertComponent type={'error'} onClick={() => setAlertVisible(!alertVisible)} message={'Wystąpił błąd podczas dodawania uprawnień'}/> : <></>}
            <StyledFormTitle>
                Nadaj uprawnienia
            </StyledFormTitle>
            <SelectMenuWrapper>
                <SelectTestCategory
                    onChange={(event) => setSubject(event.target.value)}
                    name={'subjectName'}
                    placeholder={'Temat'}
                    data={compareSubjectArrays(subjectsData, employeeSubjects)}
                />
                <SelectStudentMenu
                    onChange={(event) => pushAlbumToArrays(event.target.value)}
                    name={'albumNo'}
                    placeholder={'Dodaj studenta'}
                    data={studentsData}/>
            </SelectMenuWrapper>
            <StyledSmallText>Albumy studentów:</StyledSmallText>
            <Paper elevation={5} style={{height: 100, width: 250, overflow: 'auto', textAlign: "center"}}>
                <List height={200}>
                    {
                        studentAlbums.map((element) =>
                            <StyledListItemText>
                                {element}
                            </StyledListItemText>
                        )
                    }
                </List>
            </Paper>
            <ButtonWrapper>
                <Button
                    onClick={async () => await addTestPermission(
                        () => {
                            setAlertVisible(true)
                        },
                        () => {
                            setErrorAlertVisible(true)
                        })}
                >
                    Dodaj uprawnienia
                </Button>
            </ButtonWrapper>
        </AddPermissionFormWrapper>
    );
};

const mapStateToProps = (loginReducer) => {
    return loginReducer;
};
export default connect(mapStateToProps)(AddPermission);