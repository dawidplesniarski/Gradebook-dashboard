import React from 'react';
import PropTypes from 'prop-types';
import {StyledWrapper, Select} from './SelectSemesterSubject.styles';

const SelectSemesterSubject = ({data, onChange, name, placeholder}) => (
    <StyledWrapper>
        <Select onChange={onChange} name={name} datasrc={data} placeholder={placeholder}>
            <option defaultValue={null} selected disabled hidden>
                {placeholder}
            </option>
            {data.map((item, index) => <option key={index} value={item}>{item}</option>
            )}
        </Select>
    </StyledWrapper>
);

SelectSemesterSubject.propTypes = {
    data: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

SelectSemesterSubject.defaultProps = {
    data: []
};

export default SelectSemesterSubject;