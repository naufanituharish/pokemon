import React, { Component } from 'react';
import { connect } from 'react-redux';
import { catchPokemon, resetCatchFailure, changePokemonNickName } from '../store/actions'
import { CatchPokemon } from '../components/organisms';

class CatchContainer extends Component {
    state ={
        nickName: '',
    }

    componentDidMount(){
        this.setState({
            nickName: this.props.pokemon.name
        })     
    }

    onTyping = (event)=>{
        this.setState({nickName: event.target.value})
    }

    render(){
        const { nickName } = this.state;
        return (
            <CatchPokemon 
                onClick={() => {this.props.catchPokemon()}} 
                onSubmit={()=> {this.props.changePokemonNickName(nickName)}} 
                isCatched={this.props.isCatched} 
                value={nickName} 
                onChange={(event)=>this.onTyping(event)}
                onClose={()=> {this.props.resetCatchFailure()}}/>
        )
    }
}

const mapStateToProps = (state)=>({
    pokemon: state.pokemon.selectedPokemon,
    isCatched: state.pokemon.isCatched
})  

const mapDispatchToProps = {
    catchPokemon,
    resetCatchFailure,
    changePokemonNickName
} 

export default connect(mapStateToProps,mapDispatchToProps)(CatchContainer);