import React from 'react';
import PropTypes from 'prop-types';
import {StyledWrapper, Select} from './AcademicTitleMenu.styles';

const AcademicTitleMenu = ({onChange, name, placeholder}) => {
    const academicTitles = ['inż.', 'mgr inż.', 'dr inż.', 'dr hab. inż.', 'prof. dr hab. inż.'];
    return (
        <StyledWrapper>
            <Select onChange={onChange} name={name} datasrc={academicTitles} placeholder={'Tytuły naukowe'}>
                <option defaultValue={null} selected disabled hidden>
                    {placeholder}
                </option>
                {academicTitles.map((item, index) => <option key={index} value={item}>{item}</option>
                )}
            </Select>
        </StyledWrapper>
    );
};

AcademicTitleMenu.propTypes = {
    data: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

AcademicTitleMenu.defaultProps = {
    data: []
};

export default AcademicTitleMenu;