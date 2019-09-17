import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import { Header } from '../../components/organisms';
import { PokemonContainer } from '../../containers'

const Pokemon = (props) => {
    const { from } = props.match.params;
    return (
        <PageTemplate
            header={<Header leftAction={from === 'list' ? '/':'/mypokemon'}/>}>
            <PokemonContainer/>
        </PageTemplate>
    )
}

export default Pokemon;