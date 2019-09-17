import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './cardContent.css';

const CardContent = (props) => {
    const { children, row, style } = props;
    const styleClass = classNames('card-content', {
        'card-content-row': row
    })
    return (
        <div className={styleClass} style={style}>{children}</div>
    )
}

CardContent.propTypes = {
    children : PropTypes.any,
    style: PropTypes.object,
    row: PropTypes.bool   
}

export default CardContent;