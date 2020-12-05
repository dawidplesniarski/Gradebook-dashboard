import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {ImageWrapper} from "../styles/StudentDetails.styles";
import DefaultAvatar from "../assets/images/default-user.png";
import BackButton from "../components/Atoms/BackButton/BackButton";
import Burger from "../components/Molecules/Hamburger/Burger";
import TextInput from "../components/Atoms/TextInput/TextInput";

const StyledSettingsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const FormsWrapper = styled.div`
  width: 60%
`;

const SettingsPage = ({loginReducer, history}) => {
    const [employeeImageUrl, setEmployeeImageUrl] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');

    useEffect(() => {
        setEmployeeImageUrl(loginReducer.loginData.employee.imageUrl);
    },[])

    return(
        <>
            <BackButton onClick={() => history.push('/mainPage')}/>
            <Burger isAdminOpened={false}/>
            <StyledSettingsContainer>
                {employeeImageUrl !== '' ?
                    <ImageWrapper src={employeeImageUrl} alt={'avatar'}/> :
                    <ImageWrapper src={DefaultAvatar} alt={'avatar'}/>}
                <FormsWrapper>
                    <TextInput onChange={} type={} name={}/>
                </FormsWrapper>
            </StyledSettingsContainer>
        </>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
}

export default connect(mapStateToProps)(withRouter(SettingsPage));