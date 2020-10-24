import styled from 'styled-components';

const SideBarButtonWrapper = styled.div`
    width: 75%;
`;

const StyledButton = styled.button`
    width: 100%;
    border-radius: 10px;
    background-color : transparent;
    font-family: Montserrat,serif;
    font-weight: 500;
    font-size: 1rem;
    border-width: 0;
    color: #FFF;
    margin-top: 25px;
    &:hover {
    background: #FFF;
    color: #282c34;
    }
    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
`;

export {SideBarButtonWrapper, StyledButton} ;