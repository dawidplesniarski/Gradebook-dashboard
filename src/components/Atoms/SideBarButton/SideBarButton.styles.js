import styled from 'styled-components';

const SideBarButtonWrapper = styled.div`
    width: 75%;
`;

const StyledButton = styled.button`
    width: 100%;
    border-radius: 10px;
    background-color : #eeeeee;
    font-family: Helvetica;
    font-size: 15px;
    border-width: 0;
    margin-top: 15px;
    &:hover {
    background: rgb(244,244,244);
    background: radial-gradient(circle, rgba(244,244,244,1) 35%, rgba(218,218,218,1) 100%);
    }
`;

export {SideBarButtonWrapper, StyledButton} ;