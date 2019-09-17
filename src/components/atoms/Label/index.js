import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './label.css';

const Label = (props) => {
    const { children, style} = props;

    const styleClass = classNames('label', {
    })

    return (
        <span className={styleClass} style={style}>{children}</span>
    )
}

Label.propTypes = {
    children : PropTypes.string,
    style: PropTypes.array,
}

export default Label;