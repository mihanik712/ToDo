import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllDoneItems, toggleAllItemsDone, toggleSort } from 'redux/actions';
import { SortField, SortType } from 'types/TodoTypes';
import ItemSelectPanel from 'components/ItemSelectPanel';

interface ItemSelectPanelContainerProps {
	sortField: SortField;
	sortType: SortType;
	isAllDone: boolean;
}

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

	const handleSortItems = useCallback((sortFieldArg: SortField) =>
		dispatch(toggleSort(
			sortFieldArg,
			sortType === SortType.asc ? SortType.desc : SortType.asc,
		)),
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
