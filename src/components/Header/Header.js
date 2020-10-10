import React from "react";
import PropTypes from 'prop-types';
import { StyledHeaderWrapper, StyledParagraph } from "./Header.styles";

const Header = ({children}) => {
    return(
        <StyledHeaderWrapper>
            <StyledParagraph>Panel administratora</StyledParagraph>
        </StyledHeaderWrapper>
    );
};

Header.propTypes = {
    children: PropTypes.node
};

export default Header;