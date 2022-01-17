import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllDoneItems, toggleAllItemsDone, toggleSort } from 'redux/actions';
import { SortField, SortType } from 'types/TodoTypes';
import ItemSelectPanel, { SortName } from 'components/ItemSelectPanel';

interface ItemSelectPanelContainerProps {
	sortField: SortField;
	sortType: SortType;
	isAllDone: boolean;
}

const translateSortName = (sortName: SortName): [SortField, SortType] => {
	switch (sortName) {
		case SortName.dateOld: return [SortField.date, SortType.asc];
		case SortName.dateNew: return [SortField.date, SortType.desc];
		case SortName.dueDateOld: return [SortField.deadLine, SortType.asc];
		case SortName.dueDateNew: return [SortField.deadLine, SortType.desc];
		case SortName.priorityLow: return [SortField.priority, SortType.asc];
		case SortName.priorityHigh: return [SortField.priority, SortType.desc];
		default: return [SortField.date, SortType.desc];
	}
};

const ItemSelectPanelContainer = ({
	sortField,
	sortType,
	isAllDone,
}: ItemSelectPanelContainerProps) => {
	const dispatch = useDispatch();

	const handleToggleDoneAllItems = useCallback(() =>
		dispatch(toggleAllItemsDone(!isAllDone)),
	[isAllDone]);

	const handleDeleteAllDoneItems = useCallback(() =>
		dispatch(deleteAllDoneItems()),
	[]);

	const handleSortItems = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => (
		dispatch(toggleSort(...translateSortName(e.target.value as SortName)))),
	[sortType]);

	return (
		<ItemSelectPanel
			sortField={sortField}
			sortType={sortType}
			isAllDone={isAllDone}
			handleToggleDoneAllItems={handleToggleDoneAllItems}
			handleDeleteAllDoneItems={handleDeleteAllDoneItems}
			handleSortItems={handleSortItems}
		/>
	);
};

export default memo(ItemSelectPanelContainer);

// import { memo, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteAllDoneItems, toggleAllItemsDone, toggleSort } from 'redux/actions';
// import { SortField, SortType } from 'types/TodoTypes';
// import ItemSelectPanel from 'components/ItemSelectPanel';

// interface ItemSelectPanelContainerProps {
// 	sortField: SortField;
// 	sortType: SortType;
// 	isAllDone: boolean;
// }

// const ItemSelectPanelContainer = ({
// 	sortField,
// 	sortType,
// 	isAllDone,
// }: ItemSelectPanelContainerProps) => {
// 	const dispatch = useDispatch();

// 	const handleToggleDoneAllItems = useCallback(() =>
// 		dispatch(toggleAllItemsDone(!isAllDone)),
// 	[isAllDone]);

// 	const handleDeleteAllDoneItems = useCallback(() =>
// 		dispatch(deleteAllDoneItems()),
// 	[]);

// 	const handleSortItems = useCallback((sortFieldArg: SortField) =>
// 		dispatch(toggleSort(
// 			sortFieldArg,
// 			sortType === SortType.asc ? SortType.desc : SortType.asc,
// 		)),
// 	[sortType]);

// 	return (
// 		<ItemSelectPanel
// 			sortField={sortField}
// 			sortType={sortType}
// 			isAllDone={isAllDone}
// 			handleToggleDoneAllItems={handleToggleDoneAllItems}
// 			handleDeleteAllDoneItems={handleDeleteAllDoneItems}
// 			handleSortItems={handleSortItems}
// 		/>
// 	);
// };

// export default memo(ItemSelectPanelContainer);
