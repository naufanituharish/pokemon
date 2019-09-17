import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './text.css';

const Text = (props) => {
    const { children, header, headerMain, center, italic, withSpacing, small, style} = props;

    const styleClass = classNames('text', {
        'text-header': header,
        'text-header-main': headerMain,
        'text-center': center,
        'text-italic': italic,
        'text-with-spacing': withSpacing,
    })

    if(small){
        return <small className={styleClass} style={style}>{children}</small>
    }
    return ( <p className={styleClass} style={style}>{children}</p>)
}

Text.propTypes = {
    children : PropTypes.any,
    style: PropTypes.array,
    small: PropTypes.bool,
    header: PropTypes.bool,
    headerMain: PropTypes.bool,
    center: PropTypes.bool,
    italic: PropTypes.bool,
    withSpacing: PropTypes.bool,
}

Text.defaultProps ={
    small:false,
    header: false,
    headerMain: false,
    center: false,
    italic: false,
    withSpacing: false
}

export default Text;