import React from 'react';
import { Card, CardItem } from '../../atoms';
import { ImagePreview, BasicProfile} from '../../molekules';
import { CatchContainer } from '../../../containers';

const ProfileCard = ({useCatch, ...props}) => {
    const { sprites,basicProfile } = props;
    return (
        <Card border withMargin center>
            <ImagePreview sprites={sprites} />
            <BasicProfile {...basicProfile} />
            {useCatch && <CardItem full><CatchContainer /></CardItem>}
        </Card>
    )
}

export default ProfileCard;