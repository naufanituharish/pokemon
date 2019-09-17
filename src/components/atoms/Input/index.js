import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({ onChange, type, placeholder, value }) => {
    return <input className="form-input" type={type} placeholder={placeholder} onChange={(event)=>onChange(event)} value={value}/>
}

Input.defaultProps = {
    onChange: () => {},
    placeholder: 'Nick Name'
};

Input.propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
}

export default Input;