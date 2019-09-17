import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PokemonCard } from '../components/organisms';
import { getPokemonDetails, getPokemonList } from '../store/actions';
import { connect } from 'react-redux';

class PokemonContainer extends Component {
    componentDidMount() {
        const { id,from,idx } = this.props.match.params
        if(!this.props.isFetched){
            this.props.getPokemonList().then(()=>{
                return this.props.getPokemonDetails(id,from,idx)
            });
        } 
        return this.props.getPokemonDetails(id,from,idx);
    }

    render() {
        const { isLoading, detailsFetched, error } = this.props;
        const { from } = this.props.match.params;
        console.log(detailsFetched);
        return (
            <PokemonCard 
                isLoading ={isLoading}
                failed ={error}
                detailsFetched = {detailsFetched}
                useCatch = {from === 'owned'?false:true}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.pokemon.isLoading,
    detailsFetched: state.pokemon.detailsFetched,
    error: state.pokemon.error,
    isFetched: state.pokemon.isFetched
})  

const mapDispatchToProps = {
    getPokemonDetails,
    getPokemonList
}
  
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PokemonContainer))