import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createDebounce from 'redux-debounced';
import index from './index';

const defaultState = {};

export const defaultStore = createStore(
    // config for AsyncStorage of redux store
    index,
    defaultState,
    applyMiddleware(createDebounce(), thunk),
);
