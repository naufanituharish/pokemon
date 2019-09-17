import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getPokemonList } from '../store/actions';
import { ListItem } from '../components/organisms';

class ListContainer extends Component {
    componentDidMount(){
        if(!this.props.isFetched){
            return this.props.getPokemonList();
        }        
    }
    render(){
        const { isLoading, isFetched, pokemonList } = this.props;
        return (
            <ListItem 
                from="list"
                failed={!isFetched} 
                isLoading={isLoading}
                list={pokemonList}
                loadMore={() => this.props.getPokemonList()}/>
        )
    }
}

const mapStateToProps = (state) => ({
    pokemonList: state.pokemon.pokemonList,
    isLoading: state.pokemon.isLoading,
    isFetched: state.pokemon.isFetched,
})

const mapDispatchToProps = {
    getPokemonList
} 

export default connect(mapStateToProps,
    mapDispatchToProps)(ListContainer);







