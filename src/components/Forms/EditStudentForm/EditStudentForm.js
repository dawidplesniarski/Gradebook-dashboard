import React, {useState, useEffect} from "react";
import TextInput from "../../Atoms/TextInput/TextInput";
import Switch from '@material-ui/core/Switch';
import Button from '../../Atoms/Button/Button';
import axios from 'axios';
import {API_URL, TOKEN} from "../../../utils/helpers";
import {AddStudentFormWrapper, TextInputWrapper, StyledFormText, StyledSwitchWrapper, StyledFormTitle}
    from './EditStudentForm.styles';
import AlertComponent from "../../Atoms/Alert/Alert";
import {connect} from "react-redux";
import {setCurrentStudent} from "../../../actions/studentActions";


const EditStudentForm = ({studentReducer, setCurrentStudent}) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [albumNumber, setAlbumNumber] = useState('');
    const [enabled, setEnabled] = useState(false);
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [isErrorAlertVisible, setErrorAlertVisible] = useState(false);
    const [currentStudent, setCurrentStudentData] = useState(null);

    const editStudent = (studentId, successCallback, errorCallback) => {
        axios.put(`${API_URL}/users/editUserData/${studentId}`,
            {
                name: name,
                lastName: lastName,
                albumNo: albumNumber,
                enabled: enabled,
                login: login,
                email: email,
                imageUrl: imageUrl,
            },
            {
                headers: {'Authorization': `Bearer ${TOKEN}`}
            }).then(res => {
            successCallback();
        }).catch(err => {
            console.log(err);
            errorCallback();
        });
    };

    const findStudent = (studentId) => {
        axios.get(`${API_URL}/users/findById/${studentId}`)
            .then(res => {
                setCurrentStudentData(res.data);
                setName(res.data.name);
                setLastName(res.data.lastName);
                setAlbumNumber(res.data.albumNo);
                setEnabled(res.data.isEnabled);
                setLogin(res.data.login);
                setEmail(res.data.email);
                setImageUrl(res.data.imageUrl);
                setCurrentStudent(res.data);
            }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        findStudent(studentReducer.currentStudentId);
    }, []);

    return (
        <>
            {isAlertVisible ? <AlertComponent type={'success'} onClick={() => setAlertVisible(false)}
                                              message={'Dane studenta zostały zaktualizowane pomyślnie'}/> : <></>}
            {isErrorAlertVisible ? <AlertComponent type={'error'} onClick={() => setErrorAlertVisible(false)}
                                                   message={'Wystąpił podczas aktualizacji danych studenta'}/> : <></>}
            {currentStudent ?
            <AddStudentFormWrapper>
                <StyledFormTitle>Edycja studenta</StyledFormTitle>
                <TextInputWrapper>
                    <TextInput onChange={(event) => setName(event.target.value)} type={'text'} name={'Name'}
                               placeholder={'Imie'} defaultValue={currentStudent.name}/>
                    <TextInput onChange={(event) => setLastName(event.target.value)} type={'text'} name={'Last Name'}
                               placeholder={'Nazwisko'} defaultValue={currentStudent.lastName}/>
                    <TextInput onChange={(event) => setAlbumNumber(event.target.value)} type={'text'} name={'Album'}
                               placeholder={'Numer albumu'} defaultValue={currentStudent.albumNo}/>
                    <TextInput onChange={(event) => setLogin(event.target.value)} type={'text'} name={'Login'}
                               placeholder={'Login'} defaultValue={currentStudent.login}/>
                    <TextInput onChange={(event) => setEmail(event.target.value)} type={'text'} name={'Email'}
                               placeholder={'Adres e-mail'} defaultValue={currentStudent.email}/>
                    <TextInput onChange={(event) => setImageUrl(event.target.value)} type={'text'} name={'Image'}
                               placeholder={'Link do zdjęcia'} defaultValue={currentStudent.imageUrl}/>
                </TextInputWrapper>
                <StyledSwitchWrapper>
                    <StyledFormText>Aktywny: </StyledFormText>
                    <Switch size={'normal'} checked={enabled} onChange={() => setEnabled(!enabled)}/>
                </StyledSwitchWrapper>
                <Button
                    onClick={async () => await editStudent(studentReducer.currentStudentId,() => setAlertVisible(true), () => setErrorAlertVisible(true))}
                    disabled=
                        {name === ''
                        || lastName === ''
                        || albumNumber === ''
                        || login === ''
                        || email === ''
                        }>
                    Zaktualizuj
                </Button>
            </AddStudentFormWrapper>
                : <></>
            }
        </>
    );
};

const mapStateToProps = ({studentReducer}) => {
    return {studentReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentStudent: (student) => dispatch(setCurrentStudent(student))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudentForm);