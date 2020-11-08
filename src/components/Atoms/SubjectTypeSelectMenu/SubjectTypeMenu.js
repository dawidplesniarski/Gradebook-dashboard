import React from 'react';
import PropTypes from 'prop-types';
import {StyledWrapper, Select} from './SubjectTypeMenu.styles';

const SubjectTypeMenu = ({onChange, name, placeholder}) => {
    const subjectTypes = ['laboratorium', 'wykład', 'ćwiczenia', 'test', 'seminarium', 'repetytorium', 'warsztaty', 'szkolenie', 'Zajęcia wychowania fizycznego'];
    return (
        <StyledWrapper>
            <Select onChange={onChange} name={name} datasrc={subjectTypes} placeholder={'Typ przedmiotu'}>
                <option defaultValue={null} selected disabled hidden>
                    {placeholder}
                </option>
                {subjectTypes.map((item, index) => <option key={index} value={item}>{item}</option>
                )}
            </Select>
        </StyledWrapper>
    );
};

SubjectTypeMenu.propTypes = {
    data: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

SubjectTypeMenu.defaultProps = {
    data: []
};

export default SubjectTypeMenu;