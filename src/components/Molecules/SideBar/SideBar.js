import React from "react";
import {
    SideBarWrapper,
    StyledImg,
    StyledParagraph,
    StyledLogoutButton,
    StyledLogoutIcon,
    StyledHomeIcon,
    StyledHomeButton
} from "./SideBar.styles";
import Avatar from '../../../assets/images/male-avatar.svg';
import HomeIcon from '../../../assets/images/home.png';
import {connect} from "react-redux";
import SideBarButton from "../../Atoms/SideBarButton/SideBarButton";
import LogoutIcon from '../../../assets/images/logout.png'
import {functionToLogoutUser} from "../../../actions/loginActions";
import {withRouter} from 'react-router';

const SideBar = ({loginReducer, open, history, functionToLogoutUser, isAdminOpened}) => {
    return (
        <SideBarWrapper open={open}>
            <StyledImg
                src={loginReducer.loginData.employee.imageUrl !== '' ? loginReducer.loginData.employee.imageUrl : Avatar}
                alt={'Avatar'}/>
            <StyledParagraph>{loginReducer.loginData.employee.academicTitle}</StyledParagraph>
            <StyledParagraph>{loginReducer.loginData.employee.name} {loginReducer.loginData.employee.lastName}</StyledParagraph>
            <StyledHomeButton onClick={() => history.push('/mainPage')}>
                <StyledHomeIcon src={HomeIcon} alt={'home'}/>
            </StyledHomeButton>
            <SideBarButton onClick={() => history.push('/addQuiz')}>
                Dodaj test
            </SideBarButton>
            <SideBarButton onClick={() => history.push('/settingsPage')}>
                Ustawienia
            </SideBarButton>
            {loginReducer.loginData.employee.isAdmin && !isAdminOpened ?
                <SideBarButton onClick={() => history.push('/adminMainPage')}>
                    Admin
                </SideBarButton> :
                !loginReducer.loginData.employee.isAdmin ? <></>
                    :
                    <SideBarButton onClick={() => history.push('/mainPage')}>
                        Wyjdź
                    </SideBarButton>
            }
            <StyledLogoutButton onClick={() => functionToLogoutUser(() => {
                history.push('/')
            })}>
                <StyledLogoutIcon src={LogoutIcon} alt={'Logout'}/>
            </StyledLogoutButton>
        </SideBarWrapper>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        functionToLogoutUser: (successCallback) => dispatch(functionToLogoutUser(successCallback)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideBar));