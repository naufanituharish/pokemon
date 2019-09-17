import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import classNames from 'classnames';

import './button.css';

const Button = (props) => {
    const { to, disabled, onClick, btnIcon, children } = props;
    const btnClass = classNames('btn', {
        'btn-icon': btnIcon,
    })
    if (to) {
        return <Link className="btn" to={to}>{children}</Link>   
    }
    return <button className={btnClass} 
                    onClick={onClick} 
                    disabled={disabled}>
                    {btnIcon? <Icon icon={btnIcon} size={12} color="#ffffff"/> : null}
                    {children}
            </button> 
}

Button.propTypes = {
    children : PropTypes.string,
    onClick: PropTypes.func,
    to: PropTypes.string,
    disabled: PropTypes.bool,
    btnIcon: PropTypes.string,
}

Button.defaultProps ={
    onClick: ()=>{},
    disabled: false
}

export default Button;