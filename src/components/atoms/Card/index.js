import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './card.css';

const Card = (props) => {
    const { children, row, center, wrap, border, fullItem, withMargin, style} = props;

    const styleClass = classNames('card', {
        'card-bordered': border,
        'card-row': row,
        'card-center': center,
        'card-wrap': wrap,
        'card-full-width': fullItem,
        'card-margin': withMargin
    })

    return (
        <div className={styleClass} style={style}>{children}</div>
    )
}

Card.propTypes = {
    children : PropTypes.any,
    row: PropTypes.bool,
    center: PropTypes.bool,
    wrap: PropTypes.bool,
    border: PropTypes.bool,
    fullItem: PropTypes.bool,
    withMargin: PropTypes.bool,
    style: PropTypes.object
}

Card.defaultProps ={
    row: false,
    wrap: false,
    border: false,
    fullItem: false,
    withMargin: false,
    center: false,
}

export default Card;