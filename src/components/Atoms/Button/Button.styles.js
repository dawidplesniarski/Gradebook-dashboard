import styled, {css} from 'styled-components';

const ButtonWrapper = styled.button`
    width: 75%;
    height: 30px;
    border-radius: 10px;
    border-width: 0px;
    background-color: #f5f5f5;
    font-size: 17px;
    letter-spacing: 2px;
    &:hover {
    ${({disabled}) =>
    !disabled &&
    css`
    background-color: #0099ff;
    color: #fff;
    `
    }
    }
    ${({disabled}) =>
    disabled &&
    css`
      opacity: 50%;
    `}
`;

export {ButtonWrapper};