import {combineReducers} from 'redux';
import pokemon from './pokemon_reducers';

const rootReducers = combineReducers({
    pokemon
});

export default rootReducers;