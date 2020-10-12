import React from "react";
import {SideBarButtonWrapper, StyledButton} from "./SideBarButton.styles";

const SideBarButton = ({onClick, children}) => {
    return(
        <SideBarButtonWrapper>
            <StyledButton
            onClick={onClick}>
                {children}
            </StyledButton>
        </SideBarButtonWrapper>
    );
};

export default SideBarButton;