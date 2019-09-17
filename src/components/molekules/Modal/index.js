import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Button } from '../../atoms';


import './modal.css';

const Modal = (props)=>{
    const { showModal, withClose, onClose, children,  } = props;
    return (
        <div className="modal"style={{
            transform: showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: showModal ? '1' : '0'
        }}>
            <div className="modal-wrapper">
                <Card border withMargin>
                    {withClose && <div className="modal-close"><Button btnIcon='close' onClick={() => onClose()} /></div>}
                    <CardContent>{children}</CardContent>
                </Card>
            </div>
        </div>
    )
}

Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    withClose: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.any,
}

Modal.defaultProps ={
    showModal: false,
    withClose: false
}

export default Modal;