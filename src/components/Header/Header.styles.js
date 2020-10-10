import styled from 'styled-components';

const StyledHeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    align-items: center;
    background: hex(88,176,156);
    background: rgb(0,203,169);
    background: radial-gradient(circle, rgba(0,203,169,1) 35%, rgba(72,153,135,1) 100%);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const StyledParagraph = styled.p`
    font-size: 25px;
    font-family: Helvetica, sans-serif;
    font-weight: 500;
    letter-spacing: 2px;
    color: #FFF;
    text-align: center
`;

export {
    StyledHeaderWrapper,
    StyledParagraph
}