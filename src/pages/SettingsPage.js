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

const StyledSettingsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const FormsWrapper = styled.div`
  width: 50%;
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

    useEffect(() => {
        setEmployeeImageUrl(loginReducer.loginData.employee.imageUrl);
    },[])

    return(
        <>
            <BackButton onClick={() => history.push('/mainPage')}/>
            <Burger isAdminOpened={false}/>
            {alertVisible && <AlertComponent type={'success'} message={'Zdjęcie zostało zaktualizowane'} onClick={() => setAlertVisible(false)}/>}
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
            </StyledSettingsContainer>
        </>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
}

export default connect(mapStateToProps)(withRouter(SettingsPage));