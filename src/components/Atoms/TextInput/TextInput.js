import React from "react";
import {StyledTextInput} from "./TextInput.styles";
import PropTypes from 'prop-types';

const TextInput = ({placeholder, onChange, type, min, max, step, value}) => {
    return (
        <StyledTextInput
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            min={min}
            max={max}
            step={step}
            value={value}
        />
    )
};

TextInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    step: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number
};


export default TextInput;