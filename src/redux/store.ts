import { createStore } from 'redux';
import { rootReducer } from './rootReducer'

const serialisedState = JSON.parse(localStorage.getItem('todoState') || '{}');

export const store = createStore(rootReducer, serialisedState);

store.subscribe(() => localStorage.setItem('todoState', JSON.stringify(store.getState())));
