import React from 'react';
import PropTypes from 'prop-types';
import { CardItem, Text, Label } from '../../atoms';


const Abilities = (props) => {
    const { abilities } = props;
    return (
        <CardItem>
            <Text header>Abilities</Text>
            <CardItem row>
                {abilities.map((item, idx) => (<Label key={idx}>{item.ability.name}</Label>))}
            </CardItem>
        </CardItem>
    )
}

Abilities.propTypes = {
    abilities: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Abilities;