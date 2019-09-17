import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import { Header } from '../../components/organisms';
import { MyListContainer } from '../../containers'

const MyPokemon = () => {
    return (
        <PageTemplate
            header={<Header title="MY POKEMON" leftAction="/"/>}>
            <MyListContainer/>
        </PageTemplate>
    )
}

export default MyPokemon;