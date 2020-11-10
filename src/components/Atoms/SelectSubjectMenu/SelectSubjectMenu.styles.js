import styled from 'styled-components';

const StyledWrapper = styled.div`
  border-radius: 50px;
  width: 400px;
  height: 40px;
  position: relative;
  margin-bottom: 20px;
  padding: 0 1rem;
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-family: Montserrat,serif;
  font-weight: normal;
  align-items: center;
  flex-direction: row;
  border-radius: 50px;
  transition: all 0.4s ease;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  option {
    font-family: Montserrat,serif;
    font-weight: normal;
    font-size: 17px;
  }
`;

export { StyledWrapper, Select };