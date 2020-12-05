import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import DefaultAvatar from "../assets/images/default-user.png";
import BackButton from "../components/Atoms/BackButton/BackButton";
import Burger from "../components/Molecules/Hamburger/Burger";
import TextInput from "../components/Atoms/TextInput/TextInput";
import Button from "../components/Atoms/Button/Button";
import axios from 'axios';
import {API_URL, TOKEN} from "../utils/helpers";
import AlertComponent from "../components/Atoms/Alert/Alert";
import Footer from "../components/Molecules/Footer/Footer";

const StyledSettingsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 100px;
`;

const FormsWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ImageWrapper = styled.img`
  display: flex;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 70px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    margin-top: 30px;
    margin-bottom: 15px;
  }
`;

const StyledTopBar = styled.div`
  position: fixed;
  top: 0;
  height: 4px;
  width: 100%;
  background-color: #0099ff;
`;

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

const SettingsPage = ({loginReducer, history}) => {
    const [employeeImageUrl, setEmployeeImageUrl] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [passwordAlertVisible, setPasswordAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [password, setPassword] = useState(null);
    const [newPassword, setNewPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const updateUserAvatar = (id, url) => {
        setEmployeeImageUrl(newImageUrl);
        axios.put(`${API_URL}/employee/changeImage`,{
            employeeId: id,
            imageUrl: url
        },{
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(res => {
            if(res.data) {
                setAlertVisible(true);
            }
        })
    };

    const updatePassword = (id, password, newPassword, confirmPassword) => {
        axios.put(`${API_URL}/employee/changePassword/${id}`,{
            password: password,
            newPassword: newPassword,
            confirmPassword: confirmPassword
        },{
            headers: {'Authorization': `Bearer ${TOKEN}`}
        }).then(res => {
            if(res.data) {
                setPasswordAlertVisible(true);
            }
        }).catch(err => {
            if(err) {
                setErrorAlertVisible(true);
            }
        })
    }

    useEffect(() => {
        setEmployeeImageUrl(loginReducer.loginData.employee.imageUrl);
    },[])

    return(
        <>
            <StyledTopBar/>
            <BackButton onClick={() => history.push('/mainPage')}/>
            <Burger isAdminOpened={false}/>
            {alertVisible && <AlertComponent type={'success'} message={'Zdjęcie zostało zaktualizowane'} onClick={() => setAlertVisible(false)}/>}
            {errorAlertVisible && <AlertComponent type={'error'} message={'Nie udało się zaktualizować hasła'} onClick={() => setErrorAlertVisible(false)}/>}
            {passwordAlertVisible && <AlertComponent type={'success'} message={'Hasło zostało zaktualizowane'} onClick={() => setPasswordAlertVisible(false)}/>}
            <StyledSettingsContainer>
                {employeeImageUrl !== '' ?
                    <ImageWrapper src={employeeImageUrl} alt={'avatar'}/> :
                    <ImageWrapper src={DefaultAvatar} alt={'avatar'}/>}
                <FormsWrapper>
                    <StyledFormTitle>
                        Zaktualizuj zdjęcie profilowe
                    </StyledFormTitle>
                    <TextInput onChange={e => setNewImageUrl(e.target.value)} type={'text'} name={'Image'} placeholder={'Link do zdjęcia'}/>
                    <Button onClick={() => updateUserAvatar(loginReducer.loginData.employee._id, newImageUrl)} disabled={!newImageUrl}>
                        Zaktualizuj
                    </Button>
                </FormsWrapper>
                <FormsWrapper>
                    <StyledFormTitle>Zaktualizuj hasło konta</StyledFormTitle>
                    <TextInput onChange={e => setPassword(e.target.value)} type={'password'} name={'password'} placeholder={'Podaj hasło do konta'}/>
                    <TextInput onChange={e => setNewPassword(e.target.value)} type={'password'} name={'newPassword'} placeholder={'Podaj nowe hasło do konta'}/>
                    <TextInput onChange={e => setConfirmPassword(e.target.value)} type={'password'} name={'confirmPassword'} placeholder={'Potwierdź hasło do konta'}/>
                    <Button onClick={() => updatePassword(loginReducer.loginData.employee._id, password, newPassword, confirmPassword)} disabled={!password || !newPassword || !confirmPassword}>
                        Zaktualizuj
                    </Button>
                </FormsWrapper>
            </StyledSettingsContainer>
            <Footer/>
        </>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
}

export default connect(mapStateToProps)(withRouter(SettingsPage));