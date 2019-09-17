import React from 'react';
import PropTypes from 'prop-types';
import { CardItem, Text, ProgressBar } from '../../atoms';

const StatsItem = (props) => {
    const { name, value } = props;
    return (
        <CardItem full>
            <Text header>{name}</Text>
            <ProgressBar value={value}/>
        </CardItem>
    )
}

StatsItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}

export default StatsItem;