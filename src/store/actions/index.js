import axios from 'axios';
import {POKEMON_URL,STORE_TYPE} from '../../constants';

export function getPokemonList() {
  return async (dispatch, getState) => {
    const {
      pokemon: {
        isLoading,
        offset
      }
    } = getState();

    if (isLoading) {
      return;
    }

    dispatch({
      type: STORE_TYPE.GET_ALL_POKEMON_REQUESTING,
    });

    await axios.get(`${POKEMON_URL}/pokemon/?limit=20&offset=${offset}`)
      .then(
        response => dispatch({
          type: STORE_TYPE.GET_ALL_POKEMON_SUCCESS,
          payload: response.data
        }))
      .catch(error => {
        dispatch({
          type: STORE_TYPE.GET_ALL_POKEMON_ERROR,
          payload: { message:error }
        });
      })
  };
}

export function getPokemonDetails(id,type,idx) {
  return async (dispatch, getState) => {
    const {
      pokemon: {
        isLoading
      }
    } = getState();

    if (isLoading) {
      return;
    }

    dispatch({
      type: STORE_TYPE.POKEMON_DETAILS_REQUESTING,
    });

    await axios.get(`${POKEMON_URL}/pokemon/${id}`)
      .then(
        response => dispatch({
          type: STORE_TYPE.POKEMON_DETAILS_SUCCESS,
          payload: {...response.data, getFrom:type, pokeIdx: idx}
        }))
      .catch(error => {
        dispatch({
          type: STORE_TYPE.POKEMON_DETAILS_ERROR,
          payload: { message:error }
        });
      })
  };
}

export function catchPokemon() {
  return (dispatch) => {
    dispatch({
      type: STORE_TYPE.START_CATCHING,
    });
    const probability = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    let idx = Math.floor(Math.random() * probability.length);
    setTimeout(() => {
      if (probability[idx] === 1) {
        dispatch({
          type: STORE_TYPE.POKEMON_CATCHED
        })
      }
      else {
        dispatch({
          type: STORE_TYPE.CATCHED_FAILED,
        })
      }
    }, 1000)
    
  }
}

export function resetCatchFailure() {
  return {
    type: STORE_TYPE.RESET_CATCH_FAILURE,
  }
}

export function changePokemonNickName(nicName) {
  return {
    type: STORE_TYPE.CHANGE_NICK_NAME,
    payload: nicName
  }
}

export function setToDeleteIndex(idx) {
  return {
    type: STORE_TYPE.SET_INDEX_TO_DELETE,
    payload: idx
  }
}

export function deletePokemon() {
  return {
    type: STORE_TYPE.DELETE_POKEMON,
  }
}

export function resetToDeleteIndex() {
  return {
    type: STORE_TYPE.RESET_INDEX_TO_DELETE,
  }
}