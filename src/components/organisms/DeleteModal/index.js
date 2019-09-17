import React from 'react';
import { Button, Text, CardItem } from '../../atoms';
import { Modal } from '../../molekules';

const DeleteModal = ({ onSubmit, toDelete, showModal, onClose })=>{
    return (
        <Modal onClose={() => { onClose() }} withClose showModal={showModal}>
            <CardItem>
                <Text header italic> Are you sure to delete {toDelete !== null && `${toDelete.nickname} (${toDelete.name})`}?</Text>
                <Button onClick={() => onSubmit()}>Confirm</Button>
            </CardItem>
        </Modal>
    )
}

export default DeleteModal;