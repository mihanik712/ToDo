import * as todoActions from 'redux/actions';

export type ItemType = {
	date: number;
	deadLine: number | null;
	done: boolean;
	id: string;
	important: boolean;
	label: string;
}

export enum SortField {
	priority = 'important',
	date = 'date',
	deadLine = 'deadLine',
}

export enum SortType {
	asc = 'asc',
	desc = 'desc',
}

export enum FilterMode {
	all = 'all',
	notDone = 'notDone',
	done = 'done',
	unexpired = 'unexpired',
	overdue = 'overdue',
}

export type ItemsStateType = {
	todoData: ItemType[];
	term: string;
	filter: FilterMode;
	sort: {
		field: SortField;
		type: SortType;
	}
}

export type ReduxStateType = {
	TodoItems: ItemsStateType;
}

export type TodoActionsTypes = ReturnType<
	typeof todoActions.addItem |
	typeof todoActions.editItem |
	typeof todoActions.deleteItem |
	typeof todoActions.deleteAllDoneItems |
	typeof todoActions.toggleAllItemsDone |
	typeof todoActions.toggleItemProperty |
	typeof todoActions.toggleSort |
	typeof todoActions.changeFilter |
	typeof todoActions.changeSearch
>;

export enum ItemToggledProperties {
	important = 'important',
	done = 'done'
}
