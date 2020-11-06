import React, {useState, useEffect} from "react";
import TextInput from "../../Atoms/TextInput/TextInput";
import Button from "../../Atoms/Button/Button";
import Switch from '@material-ui/core/Switch';
import axios from 'axios';
import styled from 'styled-components';
import AcademicTitleMenu from "../../AcademicTitleSelectMenu/AcademicTitleMenu";
import {API_URL, TOKEN} from "../../../utils/helpers";
import AlertComponent from "../../Atoms/Alert/Alert";

const EditEmployeeFormWrapper = styled.div`
  background-color: #FFF;
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  align-items: center;
  margin-bottom: 10px;
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

const TextInputWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledFormText = styled.p`
  font-family: Montserrat,serif;
  font-weight: normal;
  font-size: 20px;
`;

const StyledSwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EditEmployeeForm = ({employeeData}) => {
    const [academicTitle, setAcademicTitle] = useState(null);
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [login, setLogin] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [email, setEmail] = useState(null);
    const [enabled, setEnabled] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);

    const asignEmployeeData = () => {
        setAcademicTitle(employeeData.academicTitle);
        setName(employeeData.name);
        setLastName(employeeData.lastName);
        setLogin(employeeData.login);
        setImageUrl(employeeData.imageUrl);
        setEmail(employeeData.email);
        setEnabled(employeeData.isEnabled);
        setIsAdmin(employeeData.isAdmin);
    }

    const editEmployeeData = (employeeId) => {
        axios.put(`${API_URL}/employee/editEmployeeData/${employeeId}`, {
            academicTitle: academicTitle,
            name: name,
            lastName: lastName,
            isAdmin: isAdmin,
            enabled: enabled,
            login: login,
            imageUrl: imageUrl,
            email: email
        }, {
            headers: {'Authorization': `Bearer ${TOKEN}`}
        })
            .then(setAlertVisible(true))
            .catch(err => {
                if (err) {
                    setErrorAlertVisible(true);
                }
            })
    };

    useEffect(() => {
        asignEmployeeData();
    }, [])

    return (
        <>
            {alertVisible && <AlertComponent type={'success'} message={'Dane zostały zaktualizowane'}
                                             onClick={() => setAlertVisible(false)}/>}
            {errorAlertVisible && <AlertComponent type={'error'} message={'Wystąpił błąd podczas edycji danych'}
                                                  onClick={() => setErrorAlertVisible(false)}/>}
            <EditEmployeeFormWrapper>
                <TextInputWrapper>
                    <StyledFormTitle>Edycja pracownika</StyledFormTitle>
                    <AcademicTitleMenu onChange={e => setAcademicTitle(e.target.value)} name={'Academic title'}
                                       placeholder={'Tytuł'}/>
                    <TextInput onChange={e => setName(e.target.value)} type={'text'} name={'Name'}
                               defaultValue={employeeData.name}/>
                    <TextInput onChange={e => setLastName(e.target.value)} type={'text'} name={'Last Name'}
                               defaultValue={employeeData.lastName}/>
                    <TextInput onChange={e => setLogin(e.target.value)} type={'text'} name={'Login'}
                               defaultValue={employeeData.login}/>
                    <TextInput onChange={e => setEmail(e.target.value)} type={'text'} name={'Email'}
                               defaultValue={employeeData.email}/>
                    <TextInput onChange={e => setImageUrl(e.target.value)} type={'text'} name={'Image'}
                               defaultValue={employeeData.imageUrl}/>
                </TextInputWrapper>
                <StyledSwitchWrapper>
                    <StyledFormText>Aktywny:</StyledFormText>
                    <Switch size={'normal'} checked={enabled} onChange={() => setEnabled(!enabled)}/>
                </StyledSwitchWrapper>
                <StyledSwitchWrapper>
                    <StyledFormText>Admin:</StyledFormText>
                    <Switch size={'normal'} checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)}/>
                </StyledSwitchWrapper>
                <Button onClick={async () => await editEmployeeData(employeeData._id)}>
                    Zaktualizuj
                </Button>
            </EditEmployeeFormWrapper>
        </>
    );
};

export default EditEmployeeForm;