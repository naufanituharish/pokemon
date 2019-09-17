const POKEMON_URL = 'https://pokeapi.co/api/v2';
const STORE_TYPE = {
    GET_ALL_POKEMON_REQUESTING:'get_all_pokemon_requesting',
    GET_ALL_POKEMON_SUCCESS:'get_all_pokemon_success',
    GET_ALL_POKEMON_ERROR: 'get_all_pokemon_error',

    // Pokemon Details
    POKEMON_DETAILS_REQUESTING:'pokemon_details_requesting',
    POKEMON_DETAILS_SUCCESS:'pokemon_details_success',
    POKEMON_DETAILS_ERROR: 'pokemon_details_error',

    // Catch Pokemon 
    START_CATCHING: 'start_catching',
    POKEMON_CATCHED:'pokemon_catched',
    CATCHED_FAILED:'catch_failed',
    RESET_CATCH_FAILURE:'reset_catch_failure',
    CHANGE_NICK_NAME: 'change_nick_name',

    // Delete Pokemon
    DELETE_POKEMON:'delete_pokemon',
    SET_INDEX_TO_DELETE: 'set_index_to_delete',
    RESET_INDEX_TO_DELETE: 'reset_index_to_delete',
};

export {POKEMON_URL,STORE_TYPE}