import React from "react";
import PropTypes from "prop-types";
import {StyledWrapper, Select} from './SelectStudentMenu.styles'

const SelectStudentMenu = ({data, onChange, name, placeholder}) => {
    return(
        <StyledWrapper>
            <Select onChange={onChange} name={name} datasrc={data} placeholder={'Studenci'}>
                <option defaultValue={null} selected disabled hidden>
                    {placeholder}
                </option>
                {data.map((item, index) => <option key={index} value={item.albumNo}>{item.name} {item.lastName}, numer albumu: {item.albumNo}</option>)}
            </Select>
        </StyledWrapper>
    );
};

SelectStudentMenu.propTypes = {
    data: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

SelectStudentMenu.defaultProps = {
    data: []
};

export default SelectStudentMenu;
