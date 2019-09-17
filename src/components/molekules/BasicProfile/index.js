import React from 'react';
import PropTypes from 'prop-types';
import { CardContent, CardItem, Text, Label } from '../../atoms';

const BasicProfile = (props) => {
    const { name, owned, types, nickname } = props;
    return (
        <CardContent>
            <Text headerMain center>{name}</Text>
            {owned || owned === 0 ? <Text header center italic>Owned : {owned}</Text> : null}
            {nickname ? <Text header center italic>Nick Name : {nickname}</Text> : null}
            <Text withSpacing center>Type : </Text>
            <CardItem row center>
                {types.map((item, idx) => (<Label key={idx}>{item.type.name}</Label>))}
            </CardItem>
        </CardContent>
    )
}

BasicProfile.propTypes = {
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string,
    owned: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default BasicProfile;