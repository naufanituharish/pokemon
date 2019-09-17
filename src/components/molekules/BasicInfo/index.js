import React from 'react';
import PropTypes from 'prop-types';
import { CardItem, Text } from '../../atoms';

const BasicInfo = (props) => {
    const { height, weight } = props;
    return (
        <CardItem>
            <Text header>Height</Text>
            <Text italic>{(height * 0.1).toFixed(2)} Meters</Text>
            <Text header>Wight</Text>
            <Text italic>{(weight * 0.1).toFixed(2)} Kg</Text>
        </CardItem>
    )
}

BasicInfo.propTypes = {
    height: PropTypes.number.isRequired,
    weight: PropTypes.number.isRequired,
}

export default BasicInfo;