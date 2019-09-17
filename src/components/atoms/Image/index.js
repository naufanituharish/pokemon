import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './image.css';

const Image = (props) => {
    const { source, type, alt, style} = props;

    const styleClass = classNames('image',{
        [`image-${type}`]: true,
    })

    if(type==="list"){
        return (
            <div className={styleClass} style={style}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${source}.png`} alt={alt} />
            </div>
        )
    }

    return (
        <div className={styleClass} style={style}>
            <img src={source} alt={alt} />
        </div>
    )
    
}

Image.propTypes = {
    style: PropTypes.object,
    source: PropTypes.any.isRequired,
    type: PropTypes.oneOf(['list', 'main', 'thumbnails']).isRequired,
    alt: PropTypes.string.isRequired
}

Image.defaultProps ={
    type: 'list',
}

export default Image;