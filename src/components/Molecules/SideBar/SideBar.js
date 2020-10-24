import React from "react";
import {SideBarWrapper, StyledImg, StyledParagraph, StyledLogoutButton, StyledLogoutIcon} from "./SideBar.styles";
import Avatar from '../../../assets/images/male-avatar.svg';
import {connect} from "react-redux";
import SideBarButton from "../../Atoms/SideBarButton/SideBarButton";
import LogoutIcon from '../../../assets/images/logout.png'

const SideBar = ({loginReducer, open}) => {
    return(
        <SideBarWrapper open={open}>
            <StyledImg src={loginReducer.loginData.employee.imageUrl !== '' ? loginReducer.loginData.employee.imageUrl : Avatar} alt={'Avatar'}/>
            <StyledParagraph>{loginReducer.loginData.employee.academicTitle}</StyledParagraph>
            <StyledParagraph>{loginReducer.loginData.employee.name} {loginReducer.loginData.employee.lastName}</StyledParagraph>
            <SideBarButton>
                Konto
            </SideBarButton>
            <SideBarButton>
                Dodaj test
            </SideBarButton>
            <SideBarButton>
                Ustawienia
            </SideBarButton>
            {loginReducer.loginData.employee.isAdmin === true ?
                <SideBarButton>
                    Panel administratora
                </SideBarButton> :
                <div/>
            }
            <StyledLogoutButton>
                <StyledLogoutIcon src={LogoutIcon} alt={'Logout'}/>
            </StyledLogoutButton>
        </SideBarWrapper>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

export default connect(mapStateToProps)(SideBar);