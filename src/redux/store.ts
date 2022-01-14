import { createStore } from 'redux';
import rootReducer from 'redux/rootReducer';

const serializedState = JSON.parse(localStorage.getItem('todoState') || '{}');
const store = createStore(rootReducer, serializedState);

store.subscribe(() => localStorage.setItem('todoState', JSON.stringify(store.getState())));

export default store;
