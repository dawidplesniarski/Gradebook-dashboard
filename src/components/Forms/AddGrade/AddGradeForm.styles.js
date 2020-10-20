import styled from 'styled-components';

const StyledWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 600px;
    transform: ${({open}) => open? 'translateX(0)' : 'translateX(-300%)'};
    transition: transform 0.3s ease-in-out;
    
    @media(max-width: 768px) {
      width: 300px;
    }
`;

export {StyledWrapper};