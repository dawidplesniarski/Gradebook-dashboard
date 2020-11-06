import React from "react";
import styled from 'styled-components';

const StyledWrapper = styled.div`
  border-radius: 50px;
  width: 100%;
  height: 40px;
  position: relative;
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat,serif;
  font-weight: normal;
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

const SelectUniversity = ({onChange, data, name, placeholder}) => {
    return (
        <StyledWrapper>
            <Select onChange={onChange} name={name} datasrc={data} placeholder={'Kierunki'}>
                <option defaultValue={null} selected disabled hidden>
                    {placeholder}
                </option>
                {data.map((item, index) => <option key={index} value={item._id}>{item.universityName}</option>
                )}
            </Select>
        </StyledWrapper>
    );
};

export default SelectUniversity;