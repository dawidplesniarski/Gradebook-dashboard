import React from "react";
import {StyledAnswerText} from "./AnswerTextInput.styles";
import PropTypes from 'prop-types';

const AnswerTextInput = ({placeholder, onChange, type, min, max, step, value}) => {
    return (
        <StyledAnswerText
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
        />
    )
};

AnswerTextInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};


export default AnswerTextInput;