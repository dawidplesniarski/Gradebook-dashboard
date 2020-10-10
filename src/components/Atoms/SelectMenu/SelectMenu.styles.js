import styled from 'styled-components';

const StyledWrapper = styled.div`
  border-radius: 50px;
  width: 300px;
  height: 40px;
  position: relative;
  // margin-top: 2rem;
  padding: 0 1rem;
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
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

export { StyledWrapper, Select };