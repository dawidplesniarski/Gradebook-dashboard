import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  border-radius: 50px;
  width: 100%;
  height: 40px;
  position: relative;
  margin-bottom: 20px;
  //padding: 0 1rem;
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

const SelectStudentCourses = ({data, onChange, name, placeholder}) => {
    return(
        <>
            <StyledWrapper>
                <Select onChange={onChange} name={name} datasrc={data} placeholder={'Kierunki'}>
                    <option defaultValue={null} selected disabled hidden>
                        {placeholder}
                    </option>
                    {data.map((item, index) => <option key={index} value={item.courseName}>{item.courseName}</option>)}
                </Select>
            </StyledWrapper>
        </>
    );
};

SelectStudentCourses.propTypes = {
    data: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

SelectStudentCourses.defaultProps = {
    data: []
};


export default SelectStudentCourses;