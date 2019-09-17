import React from 'react';
import { Button, Text, Input, CardItem } from '../../atoms';
import { Modal } from '../../molekules';

const CatchPokemon = ({ onClick, onSubmit, value, onChange, isCatched, onClose })=>{
    return (
        <>
            <Button onClick={()=>{onClick()}}>Catch Pokemon</Button>
            <Modal onClose={()=>{onClose()}} withClose showModal={isCatched !== null && true}>
                {isCatched && <CardItem>
                    <Text headerMain italic> Success Catch Pokemon</Text>
                    <Text center italic> Give Pokemon Nick Name:</Text>
                    <Input type="text" value={value} onChange={(event)=>onChange(event)} />
                    <Button onClick={(nicName) => onSubmit(nicName)}>Submit</Button>
                </CardItem>}
                {!isCatched && <CardItem>
                    <Text header italic> Fail to Catch Pokemon</Text>
                    <Button onClick={() =>{onClick()}}>Catch Again</Button>
                </CardItem>}
            </Modal>
        </>
    )
}

export default CatchPokemon;