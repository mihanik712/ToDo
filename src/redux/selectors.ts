import moment from "moment";
import _ from 'underscore';
import {createSelector} from "reselect";
import {FilterMode, ItemType, ReduxStateType, SortField, SortType} from "../types/TodoTypes";

export const getTodoData = (state: ReduxStateType) => state.TodoItems.todoData;
export const getSort = (state: ReduxStateType) => state.TodoItems.sort;
export const getSortField = (state: ReduxStateType) => getSort(state).field;
export const getSortType = (state: ReduxStateType) => getSort(state).type;
export const getFilter = (state: ReduxStateType) => state.TodoItems.filter;
export const getTerm = (state: ReduxStateType) => state.TodoItems.term;

const getSearchedItems = createSelector(
	getTodoData,
	getTerm,
	(todoData, term) => {
		if (term.length === 0) {
			return todoData;
		}

		return todoData.filter(item => item.label
			.toLowerCase()
			.includes(term.trim().toLowerCase())
		)
	}
);

const getFilteredItems = createSelector(
	getSearchedItems,
	getFilter,
	(todoData, filter) => {
		switch(filter) {
			case FilterMode.all:
				return todoData;
			case FilterMode.active:
				return todoData.filter(item => !item.done);
			case FilterMode.done:
				return todoData.filter(item => item.done);
			case FilterMode.actual:
				return todoData.filter(item => item.deadLine && (moment().valueOf() - item.deadLine <= 0));
			case FilterMode.overdue:
				return todoData.filter(item => item.deadLine && (moment().valueOf() - item.deadLine > 0));
			default:
				return todoData;
		}
	}
);

// const sortItemsBoolean = (sortType: SortType, sortField: SortField, arr: ItemType[]) => {
//   return sortType === SortType.asc
//     ? [...arr].sort((a) => (a[sortField] ? 1 : -1))
//     : [...arr].sort((a) => (a[sortField] ? -1 : 1))
// }

// const sortItemsNumberOrNull = (sortType: SortType, sortField: SortField, arr: ItemType[])  => {
//   return [...arr].sort((a,b) => {
//     const sortItemA = a[sortField];
//     const sortItemB = b[sortField];

//     // equal items sort equally
//     if (sortItemA === sortItemB) {
//       return 0;
//     }
//     // nulls sort after anything else
//     else if (sortItemA === null) {
//       return 1;
//     }
//     else if (sortItemB === null) {
//       return -1;
//     }
//     // otherwise, if we're ascending, lowest sorts first
//     else if (sortType === SortType.asc) {
//       return sortItemA < sortItemB ? -1 : 1;
//     }
//     // if descending, highest sorts first
//     else {
//       return sortItemA < sortItemB ? 1 : -1;
//     }
//   })
// }

// const sortItems = (sortField: SortField, sortType: SortType, arr: ItemType[]) => {
//   switch (sortField) {
//     case SortField.priority:
//       return sortItemsBoolean(sortType, SortField.priority, arr);
//     case SortField.date:
//       return sortItemsNumberOrNull(sortType, SortField.date, arr);
//     case SortField.deadLine:
//       return sortItemsNumberOrNull(sortType, SortField.deadLine, arr);
//     default:
//       return arr;
//   }
// }

const sortItems = (arr: ItemType[], sortField: SortField, sortType: SortType) => {
	return sortType === SortType.asc
		? _.sortBy(arr, item => item[sortField] === null ? Infinity : item[sortField])
		: _.sortBy(arr, sortField).reverse()
}

export const getVisibleItems = createSelector(
	getSortField,
	getSortType,
	getFilteredItems,
	(sortField, sortType, todoData) => sortItems(todoData, sortField, sortType)
);