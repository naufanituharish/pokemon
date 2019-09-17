import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './cardItem.css';

const CardItem = (props) => {
    const { children, row, center, vCenter, full, style } = props;
    const styleClass = classNames('card-item', {
        'card-item-row': row,
        'card-item-center': center,
        'card-item-vertical-center': vCenter,
        'card-item-full': full
    })
    return (
        <div className={styleClass} style={style}>{children}</div>
    )
}

CardItem.propTypes = {
    children : PropTypes.any,
    style: PropTypes.object,
    row: PropTypes.bool,    
    center: PropTypes.bool,    
    vCenter: PropTypes.bool,    
    full: PropTypes.bool    
}

export default CardItem;