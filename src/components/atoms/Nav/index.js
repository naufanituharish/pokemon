import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../Icon'

import './nav.css';

const Nav = (props) => {
    const { right, to } = props;
    if(!right){
        return(
            <Link to={to} className="nav-container">
                <span className="nav-icon">
                    <Icon icon='back' size={24} />
                </span>
                <span className="nav-left-label">BACK</span>
            </Link>
        )
    }
    return (
        <Link to={to} className="nav-container nav-right">
            <span className="nav-icon nav-icon-right">
                <Icon icon='pokedex' size={24} />
            </span>
            <span className="nav-right-label">MY POKEMON</span>
        </Link>
    )
}

Nav.propTypes = {
    right: PropTypes.bool,
    to: PropTypes.string,
}

export default Nav;