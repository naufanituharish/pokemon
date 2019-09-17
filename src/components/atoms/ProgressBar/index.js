import React from 'react';
import PropTypes from 'prop-types';

import './progressBar.css';

const ProgressBar = (props) => {
    const { value } = props;
    return (
        <div className="progress-bar">
            <span className="bar">
                <span className="progress" style={{ width: `${value}%` }}></span>
            </span>
        </div>
    )
}

ProgressBar.propTypes = {
    value : PropTypes.number.isRequired 
}

export default ProgressBar;