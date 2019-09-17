import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon'

import './loader.css';

const Loader = (props) => {
    const { show } = props;
    return(
        <div className="loader" style={{
            transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
        }}>
            <Icon icon='pokedex' color="#FFFFFF" size={24} />
            <p>Loading...</p>
        </div>
    )
}

Loader.propTypes = {
    show: PropTypes.bool
}

export default Loader;