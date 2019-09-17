import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ListItem } from '../components/organisms';

class MyPokemonList extends Component {
    render(){   
        const { myPokemon, isLoading } = this.props.pokemon;
        return (
            <ListItem
                from="owned"
                failed={false}
                isLoading={isLoading}
                list={myPokemon} />
        )
    }

}

const mapStateToProps = (state)=>({
  pokemon: state.pokemon,
}) 
  
export default connect(mapStateToProps)(MyPokemonList)