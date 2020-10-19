import React from "react";
import {SideBarWrapper, StyledImg, StyledParagraph} from "./SideBar.styles";
import Avatar from '../../../assets/images/male-avatar.svg';
import {connect} from "react-redux";
import SideBarButton from "../../Atoms/SideBarButton/SideBarButton";

const SideBar = ({loginReducer, open}) => {
    return(
        <SideBarWrapper open={open}>
            <StyledImg src={loginReducer.loginData.employee.imageUrl !== '' ? loginReducer.loginData.employee.imageUrl : Avatar} alt={'Avatar'}/>
            <StyledParagraph>{loginReducer.loginData.employee.academicTitle}</StyledParagraph>
            <StyledParagraph>{loginReducer.loginData.employee.name} {loginReducer.loginData.employee.lastName}</StyledParagraph>
            <SideBarButton>
                Button
            </SideBarButton>
            <SideBarButton>
                Button
            </SideBarButton>
            <SideBarButton>
                Button
            </SideBarButton>
            {loginReducer.loginData.employee.isAdmin === true ?
                <SideBarButton>
                    Panel administratora
                </SideBarButton> :
                <div/>
            }
        </SideBarWrapper>
    );
};

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

export default connect(mapStateToProps)(SideBar);