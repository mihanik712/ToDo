import { combineReducers } from 'redux';
import ItemsReducer from 'redux/itemsReducer';

const rootReducer = combineReducers({
	TodoItems: ItemsReducer,
});

export default rootReducer;
