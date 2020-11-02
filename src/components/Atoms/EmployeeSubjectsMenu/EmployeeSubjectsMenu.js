import React from 'react';
import PropTypes from 'prop-types';
import {StyledWrapper, Select} from './EmployeeSubjectsMenu.styles';

const EmployeeSubjectsMenu = ({data, onChange, name, placeholder}) => (
    <StyledWrapper>
        <Select onChange={onChange} name={name} datasrc={data} placeholder={'Przedmioty'}>
            <option defaultValue={null} selected disabled hidden>
                {placeholder}
            </option>
            {data.map((item, index) => <option key={index} value={item}>{item}</option>
            )}
        </Select>
    </StyledWrapper>
);

EmployeeSubjectsMenu.propTypes = {
    data: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

EmployeeSubjectsMenu.defaultProps = {
    data: []
};

export default EmployeeSubjectsMenu;