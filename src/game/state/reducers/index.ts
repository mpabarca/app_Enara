import { combineReducers } from 'redux';
import { wordReducer } from './wordReducers';

const reducers = combineReducers({
    word: wordReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;