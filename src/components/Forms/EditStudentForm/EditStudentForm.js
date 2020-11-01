import React, {useState, useEffect} from "react";
import TextInput from "../../Atoms/TextInput/TextInput";
import Switch from '@material-ui/core/Switch';
import Button from '../../Atoms/Button/Button';
import axios from 'axios';
import {API_URL} from "../../../utils/helpers";
import {AddStudentFormWrapper, TextInputWrapper, StyledFormText, StyledSwitchWrapper, StyledFormTitle}
    from './EditStudentForm.styles';
import AlertComponent from "../../Atoms/Alert/Alert";
import {connect} from "react-redux";


const EditStudentForm = ({studentReducer}) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [albumNumber, setAlbumNumber] = useState('');
    const [enabled, setEnabled] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [isErrorAlertVisible, setErrorAlertVisible] = useState(false);
    const [currentStudent, setCurrentStudent] = useState(null);


    const editStudent = (successCallback, errorCallback) => {
        axios.post(`${API_URL}/users/addUser`,
            {
                name: name,
                lastName: lastName,
                albumNo: albumNumber,
                enabled: enabled,
                login: login,
                password: password,
                email: email,
                imageUrl: imageUrl,
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
                setCurrentStudent(res.data);
                setEnabled(res.data.isEnabled);
                setPassword(res.data.password);
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
                                              message={'Student został dodany pomyślnie'}/> : <></>}
            {isErrorAlertVisible ? <AlertComponent type={'error'} onClick={() => setErrorAlertVisible(false)}
                                                   message={'Wystąpił błąd przy dodawaniu studenta'}/> : <></>}
            {currentStudent &&
            <AddStudentFormWrapper>
                <StyledFormTitle>Edycja studenta</StyledFormTitle>
                <TextInputWrapper>
                    <TextInput onChange={(event) => setName(event.target.value)} type={'text'} name={'Name'}
                               placeholder={'Imie'} value={currentStudent.name}/>
                    <TextInput onChange={(event) => setLastName(event.target.value)} type={'text'} name={'Last Name'}
                               placeholder={'Nazwisko'} value={currentStudent.lastName}/>
                    <TextInput onChange={(event) => setAlbumNumber(event.target.value)} type={'text'} name={'Album'}
                               placeholder={'Numer albumu'} value={currentStudent.albumNo}/>
                    <TextInput onChange={(event) => setLogin(event.target.value)} type={'text'} name={'Login'}
                               placeholder={'Login'} value={currentStudent.login}/>
                    <TextInput onChange={(event) => setPassword(event.target.value)} type={'password'} name={'Password'}
                               placeholder={'Hasło'}/>
                    <TextInput onChange={(event) => setEmail(event.target.value)} type={'text'} name={'Email'}
                               placeholder={'Adres e-mail'} value={currentStudent.email}/>
                    <TextInput onChange={(event) => setImageUrl(event.target.value)} type={'text'} name={'Image'}
                               placeholder={'Link do zdjęcia'} value={currentStudent.imageUrl}/>
                </TextInputWrapper>
                <StyledSwitchWrapper>
                    <StyledFormText>Aktywny: </StyledFormText>
                    <Switch size={'normal'} checked={enabled} onChange={() => setEnabled(!enabled)}/>
                </StyledSwitchWrapper>
                <Button
                    onClick={async () => await editStudent(() => setAlertVisible(true), () => setErrorAlertVisible(true))}
                    disabled=
                        {name === ''
                        || lastName === ''
                        || albumNumber === ''
                        || login === ''
                        || password === ''
                        || email === ''
                        }>
                    Zaktualizuj
                </Button>
            </AddStudentFormWrapper>
            }
        </>
    );
};

const mapStateToProps = ({studentReducer}) => {
    return {studentReducer};
};

export default connect(mapStateToProps)(EditStudentForm);