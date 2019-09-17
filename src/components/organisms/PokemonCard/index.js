import React from 'react';
import { Loader, Text, Button } from '../../atoms';
import { InfoContainer, ProfileContainer } from '../../../containers';

import "./pokemonCard.css";

const PokemonCard = ({ isLoading, failed, detailsFetched, useCatch }) => {
    return (
        <div className="profile-container">
            {failed && !detailsFetched && <div className="profile-container-error">
                <Text headerMain>Pokemon data is not setup yet. Please, go back to home first.</Text>
                <Button to="/">Back Home</Button>
            </div>}
            {detailsFetched &&  <>
                <ProfileContainer useCatch={useCatch}/>
                <InfoContainer/>
            </>}
            <Loader show={isLoading} />
        </div>
    )
}

export default PokemonCard;