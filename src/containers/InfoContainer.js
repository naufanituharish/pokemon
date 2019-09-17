import React from 'react';
import { InfoCard } from '../components/organisms';
import { connect } from 'react-redux';

const InfoContainer = (props) => <InfoCard {...props}/>

const mapStateToProps = (state) => ({
    abilities: state.pokemon.selectedPokemon.abilities, 
    stats: state.pokemon.selectedPokemon.stats, 
    height: state.pokemon.selectedPokemon.height, 
    weight:state.pokemon.selectedPokemon.weight,
})  
  
export default connect(mapStateToProps)(InfoContainer);