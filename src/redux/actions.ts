import { FilterMode, ItemType, SortField, SortType } from 'types/TodoTypes';
import * as types from 'redux/actionConstants';

export const addItem = (
	label: string,
	deadLine: number | null = null,
) => ({
	type: types.ADD_ITEM,
	payload: { label, deadLine },
});

export const editItem = (
	editId: string,
	label: string,
	deadLine?: number,
) => ({
	type: types.EDIT_ITEM,
	payload: { editId, label, deadLine },
});

export const deleteItem = (id: string) => ({
	type: types.DELETE_ITEM,
	payload: id,
});

export const deleteAllDoneItems = () => ({
	type: types.DELETE_ALL_DONE_ITEMS,
});

export const toggleAllItemsDone = (toggle: boolean) => ({
	type: types.TOGGLE_ALL_ITEMS_DONE,
	payload: toggle,
});

export const toggleItemProperty = (
	id: string,
	property: keyof ItemType,
) => ({
	type: types.TOGGLE_ITEM_PROPERTY,
	payload: { id, property },
});

export const toggleSort = (
	field: SortField,
	type: SortType,
) => ({
	type: types.TOGGLE_SORT,
	payload: { field, type },
});

export const changeFilter = (filter: FilterMode) => ({
	type: types.CHANGE_FILTER,
	payload: filter,
});

export const changeSearch = (term: string) => ({
	type: types.CHANGE_SEARCH,
	payload: term,
});
