import React from 'react';
import { Card, CardContent, CardHeader } from '../../atoms';
import { BasicInfo, Abilities, StatsItem } from '../../molekules';

const InfoCard = (props) => {
    const { abilities, stats, height, weight } = props;
    return (
        <Card border withMargin wrap fullItem>
            <CardHeader top>Details</CardHeader>
            <CardContent row>
                <BasicInfo height={height} weight={weight} />
                <Abilities abilities={abilities} />
            </CardContent>
            <CardHeader>Stats</CardHeader>
            <CardContent>
                {stats.map((item, idx) => (
                    <StatsItem key={idx} name={item.stat.name} value={item.base_stat} />
                ))}
            </CardContent>
        </Card>
    )
}

export default InfoCard;