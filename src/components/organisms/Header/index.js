import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from '../../atoms'

import logo from '../../../assets/logo.svg'
import './header.css';

const Header = (props) => {
    const { leftAction, rightAction, title } = props
    return (
        <div className="header">
            <div className="header-nav">
                {leftAction? <Nav to={leftAction}/>:null}
            </div>
            <div className="header-center">
                {title ? <span className="title">{title}</span> : <img className="header-logo" src={logo} alt="Logo" />}
            </div>
            <div className="header-nav header-nav-right">
                {rightAction? <Nav right to={rightAction}/>: null}
            </div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    leftAction: PropTypes.string,
    rightAction: PropTypes.string,

}

Header.defaultProps ={
    title : null,
    leftAction: null,
    rightAction: null,
}

export default Header;