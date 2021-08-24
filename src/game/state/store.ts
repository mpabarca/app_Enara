import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { wordReducer } from './reducers/wordReducers';

export const store = createStore(wordReducer, composeWithDevTools(applyMiddleware(thunk)));
