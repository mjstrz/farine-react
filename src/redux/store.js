import { createStore, combineReducers, createStore } from 'redux'

const reducers = {};

const rootReducer = combineReducers(reducers);
//put our reducers in a form that we can pass to the createStore function that we imported

export const configureStore = () => createStore(rootReducer); 