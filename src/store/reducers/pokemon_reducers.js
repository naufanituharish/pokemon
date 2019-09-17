import { STORE_TYPE } from '../../constants';

const initialState = {
    pokemonList: [],
    myPokemon: [],
    selectedPokemon: {
        forms: [],
        abilities: [],
        stats: [],
        moves: [],
        sprites: {},
        held_items: [],
        species: {},
        game_indices: [],
        types: []
    },
    isLoading: false,
    offset: 0,
    error: null,
    isFetched: false,
    detailsFetched: false,
    isCatched: null,
    pokeIdx: 0,
    toDelete: null

}
export default function (state = initialState, action) {
    switch (action.type) {
        case STORE_TYPE.GET_ALL_POKEMON_REQUESTING:
            return { ...state, isLoading: true, error: null }
        case STORE_TYPE.GET_ALL_POKEMON_SUCCESS:
            return {
                ...state,
                pokemonList: state.pokemonList.concat(
                    action.payload.results.map((item) => {
                        return {
                            id: item.url.substring(34, item.url.length - 1),
                            name: item.name,
                            url: item.url,
                            owned: 0,
                        }
                    })
                ),
                isLoading: false,
                offset: state.offset + 20,
                isFetched: true,
                error: null
            }
        case STORE_TYPE.GET_ALL_POKEMON_ERROR:
            return { ...state, isLoading: false, error: action.payload.message.error }

        // Pokemon details
        case STORE_TYPE.POKEMON_DETAILS_REQUESTING:
            return {
                ...state,
                selectedPokemon: {
                    forms: [],
                    abilities: [],
                    stats: [],
                    moves: [],
                    sprites: {},
                    held_items: [],
                    species: {},
                    game_indices: [],
                    types: []
                },
                isLoading: true,
                error: null,
                detailsFetched: false,
            }
        case STORE_TYPE.POKEMON_DETAILS_SUCCESS:
            let pokeDetails = {};
            let poke;

            if(action.payload.getFrom === 'list'){
                poke = state.pokemonList.find(function (element) {
                    return element.id === `${action.payload.id}`;
                });
                if (!poke || poke === undefined) return { ...state, isLoading: false, error: true, detailsFetched: false }
                pokeDetails = { ...action.payload, owned: poke.owned };  
            }
            else if(action.payload.getFrom === 'owned'){
                poke = state.myPokemon.find(function (element) {
                    return element.pokeIdx === `${action.payload.pokeIdx}`
                });
                if (!poke || poke === undefined) return { ...state, isLoading: false, error: true, detailsFetched: false }
                pokeDetails = { ...action.payload, nickname : poke.nickname}
            }

            return {
                ...state,
                selectedPokemon: pokeDetails,
                isLoading: false,
                detailsFetched: true,
                error: null
            }

        case STORE_TYPE.POKEMON_DETAILS_ERROR:
            return { ...state, isLoading: false, error: action.payload.message.error, detailsFetched: false }

        // Catch Pokemon
        case STORE_TYPE.START_CATCHING:
            return { ...state, isLoading: true, isCatched: null }
        case STORE_TYPE.POKEMON_CATCHED:          
            const pokeIndex = state.pokemonList.findIndex(poke => poke.id === `${state.selectedPokemon.id}`);
            state.pokemonList[pokeIndex].owned = state.pokemonList[pokeIndex].owned + 1;
            state.selectedPokemon.owned = state.selectedPokemon.owned + 1;
            return {
                ...state,
                myPokemon: state.myPokemon.concat({
                    pokeIdx: `${state.pokeIdx + 1}`,
                    id: `${state.selectedPokemon.id}`,
                    name: state.selectedPokemon.name,
                    nickname: '-'
                }),
                pokeIdx:`${state.pokeIdx + 1}`,
                pokemonList: state.pokemonList,
                selectedPokemon: state.selectedPokemon,
                isLoading: false,
                isCatched: true
            }
        case STORE_TYPE.CATCHED_FAILED:
            return { ...state, isLoading: false, isCatched: false }

        case STORE_TYPE.RESET_CATCH_FAILURE:
            return { ...state, isCatched: null }
        
        // Change Pokemon Nick Name
        case STORE_TYPE.CHANGE_NICK_NAME:
            state.myPokemon[state.myPokemon.findIndex(poke => poke.pokeIdx === `${state.pokeIdx}`)].nickname = action.payload;
            return {
                ...state,
                myPokemon: state.myPokemon,
                isCatched: null,
            }

        // Deleting MY POkemon
        case STORE_TYPE.SET_INDEX_TO_DELETE:
            return { ...state, toDelete: state.myPokemon[state.myPokemon.findIndex(poke => poke.pokeIdx === `${action.payload}`)] }
        case STORE_TYPE.DELETE_POKEMON:
            state.myPokemon.splice(state.myPokemon.findIndex(poke => poke.pokeIdx === `${state.toDelete.idx}`),1);
            let deletedPokeIdx = state.pokemonList.findIndex(poke => poke.id === `${state.toDelete.id}`);
            state.pokemonList[deletedPokeIdx].owned = state.pokemonList[deletedPokeIdx].owned - 1;
            return { ...state, toDelete: null, myPokemon: state.myPokemon, pokemonList:state.pokemonList }
        case STORE_TYPE.RESET_INDEX_TO_DELETE:
            return { ...state, toDelete: null }

        default:
            return state;
    }
}