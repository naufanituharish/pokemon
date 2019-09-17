import React from 'react';
import { ProfileCard } from '../components/organisms';
import { connect } from 'react-redux';

const ProfileContainer = ({useCatch,...props}) =>{
    return (
        <ProfileCard useCatch={useCatch} {...props}/>
    )
        
}

const mapStateToProps = (state) => ({
    sprites: state.pokemon.selectedPokemon.sprites,
    basicProfile: {
        name: state.pokemon.selectedPokemon.name, 
        owned: state.pokemon.selectedPokemon.owned, 
        types: state.pokemon.selectedPokemon.types, 
        nickname: state.pokemon.selectedPokemon.nickname
    }
})  
  
export default connect(mapStateToProps)(ProfileContainer);