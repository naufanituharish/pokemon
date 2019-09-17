import React from 'react';
import PageTemplate from '../../templates/PageTemplate';
import { Header } from '../../components/organisms';
import { ListContainer } from '../../containers'

const Home = () => {
    return (
        <PageTemplate
            header={<Header rightAction="/mypokemon"/>}>
            <ListContainer/>
        </PageTemplate>
    )
}

export default Home;