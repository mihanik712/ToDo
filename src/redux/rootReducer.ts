import { combineReducers } from "redux";
import { ItemsReducer } from "./itemsReducer";

export const rootReducer = combineReducers({
	TodoItems: ItemsReducer
});
