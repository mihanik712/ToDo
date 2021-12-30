import * as actions from 'redux/actionConstants';
import { TodoActionsTypes, FilterMode, ItemsStateType, SortField, SortType } from 'types/TodoTypes';
import createTodoItem from 'helpers/helpers';

const initialState: ItemsStateType = {
	todoData: [
		createTodoItem('Drink Coffee'),
		createTodoItem('Make Awesome App'),
		createTodoItem('Have a lunch'),
	],
	term: '',
	filter: FilterMode.all,
	sort: {
		field: SortField.date,
		type: SortType.desc,
	},
};

const ItemsReducer = (
	state = initialState,
	action: TodoActionsTypes,
): ItemsStateType => {
	console.log('action state >> ', action, state);

	switch (action.type) {
		case actions.ADD_ITEM:
			return {
				...state,
				todoData: [
					...state.todoData,
					createTodoItem(action.payload.label, action.payload.deadLine),
				],
			};

		case actions.EDIT_ITEM:
			return {
				...state,
				todoData: state.todoData
					.map((item) => (item.id === action.payload.editId
						? {
							...item,
							label: action.payload.label,
							deadLine: action.payload.deadLine ? action.payload.deadLine : item.deadLine,
						} : item
					)),
			};

		case actions.DELETE_ITEM:
			return {
				...state,
				todoData: state.todoData
					.filter((item) => item.id !== action.payload),
			};

		case actions.DELETE_ALL_DONE_ITEMS:
			return {
				...state,
				todoData: state.todoData
					.filter((todoItem) => todoItem.done === false),
			};

		case actions.TOGGLE_ALL_ITEMS_DONE:
			return {
				...state,
				todoData: state.todoData
					.map((todoItem) => (
						{
							...todoItem,
							done: action.payload,
						}
					)),
			};

		case actions.TOGGLE_ITEM_PROPERTY:
			return {
				...state,
				todoData: state.todoData
					.map((item) => (item.id === action.payload.id
						? {
							...item,
							[action.payload.property]: !item[action.payload.property],
						} : item
					)),
			};

		case actions.TOGGLE_SORT:
			return {
				...state,
				sort: action.payload,
			};

		case actions.CHANGE_FILTER:
			return {
				...state,
				filter: action.payload,
			};

		case actions.CHANGE_SEARCH:
			return {
				...state,
				term: action.payload,
			};

			// case actions.CHANGE_STATE_PROPERTY:
			//     return {
			//         ...state,
			//         [action.payload.property]: action.payload.value
			//     }

		default:
			return state;
	}
};

export default ItemsReducer;
