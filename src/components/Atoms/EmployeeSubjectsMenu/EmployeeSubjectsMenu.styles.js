import styled from 'styled-components';

const StyledWrapper = styled.div`
  border-radius: 50px;
  width: 100%;
  height: 40px;
  position: relative;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 50px;
  transition: all 0.4s ease;
  border: none;
  background-color: #DADADA;
  &:focus {
    outline: none;
  }
`;

export { StyledWrapper, Select };