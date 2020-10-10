import React from 'react';
import PropTypes from 'prop-types';
import {StyledWrapper, Select} from './SelectMenu.styles';

const SelectMenu = ({data, onChange, name, placeholder}) => (
    <StyledWrapper>
        <Select onChange={onChange} name={name} datasrc={data} placeholder={'Przedmioty'}>
            <option defaultValue={null}>
                {placeholder}
            </option>
            {data.map((item, index) => <option key={index} value={item._id}>{item.subjectName}</option>
            )}
        </Select>
    </StyledWrapper>
);

SelectMenu.propTypes = {
    data: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

SelectMenu.defaultProps = {
    data: []
};

export default SelectMenu;