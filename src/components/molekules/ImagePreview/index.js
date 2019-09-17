import React from 'react';
import PropTypes from 'prop-types';
import { CardContent, CardItem, Image } from '../../atoms';

const ImagePreview = (props)=> {
    const { sprites } = props;
    return(
        <CardContent>
            <Image type="main" source={sprites.front_default} alt='front_default'/>
            <CardItem row>
                <Image type="thumbnails" source={sprites.front_shiny} alt='front_shiny'/>
                <Image type="thumbnails" source={sprites.back_default} alt='front_default'/>
                <Image type="thumbnails" source={sprites.back_shiny} alt='back_default'/>
            </CardItem>
        </CardContent>
    )   
}

ImagePreview.propTypes = {
    sprites: PropTypes.object.isRequired,
}

export default ImagePreview;