import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Text, Image } from '../../atoms';
import { RemoveContainer } from '../../../containers';
import './listCard.css';

const ListCard = ({ from, ...props }) => {
    const { id, name, owned, nickname, pokeIdx } = props;
    return (
        <Card wrap fullItem row style={{marginBottom:20}}>
            {from === 'owned' && <div className="list-item-remove"> <RemoveContainer pokeIdx={pokeIdx}/></div>}
            <div className="list-item-left">
                <Image source={id} type="list" alt={`imageList${id}`}/>
                <div>
                    <Text header>{name}</Text>
                    {owned >= 0 && <Text small>{`Owned: ${owned}`}</Text>}
                    {nickname && <Text small>{`Nick Name: ${nickname}`}</Text>}
                </div>
            </div>
            <div className="list-item-right">
                <Button to={`/pokemon/${from}/${id}/${pokeIdx?pokeIdx:'details'}`} >Details</Button>
            </div>
        </Card>
    )
}

ListCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    owned: PropTypes.number,
    nickname: PropTypes.string
}

export default ListCard;