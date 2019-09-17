import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './cardHeader.css';

const CardHeader = (props) => {
    const { children, center, top, style } = props;

    const styleClass = classNames('card-header', {
        'card-header-align-center': center,
        'card-header-top':top
    })

    return (
        <div className={styleClass} style={style}>
            <p>{children}</p>
        </div>
    )
}

CardHeader.propTypes = {
    children : PropTypes.any,
    center : PropTypes.bool,
    top : PropTypes.bool,
    style: PropTypes.object
}

CardHeader.defaultProps ={
    center : false,
    top : false,
}

export default CardHeader;