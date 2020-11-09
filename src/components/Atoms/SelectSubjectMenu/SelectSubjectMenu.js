import React from 'react';
import PropTypes from 'prop-types';
import {StyledWrapper, Select} from './SelectSubjectMenu.styles';

const SelectSubjectMenu = ({data, onChange, name, placeholder}) => (
    <StyledWrapper>
        <Select onChange={onChange} name={name} datasrc={data} placeholder={'Przedmioty'}>
            <option defaultValue={null} selected disabled hidden>
                {placeholder}
            </option>
            {data.map((item, index) => <option key={index} value={item.subjectName}>{item.subjectName}</option>
            )}
        </Select>
    </StyledWrapper>
);

SelectSubjectMenu.propTypes = {
    data: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

SelectSubjectMenu.defaultProps = {
    data: []
};

export default SelectSubjectMenu;