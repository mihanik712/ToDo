import { createStore } from 'redux';
import rootReducer from 'redux/rootReducer';

const serialisedState = JSON.parse(localStorage.getItem('todoState') || '{}');
const store = createStore(rootReducer, serialisedState);

store.subscribe(() => localStorage.setItem('todoState', JSON.stringify(store.getState())));

export default store;
