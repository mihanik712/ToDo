import { memo, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import ItemSelectPanel from 'components/ItemSelectPanel';
import { deleteAllDoneItems, toggleAllItemsDone, toggleSort } from 'redux/actions';
import { SortField, SortType } from 'types/TodoTypes';

const ICON_DESC = 'fa fa-sort-up fa-lg icons';
const ICON_ASC = 'fa fa-sort-down fa-lg icons';

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
	console.log('ItemSelectPanelContainer render');

	const iconSortClassName = useMemo(() => (
		sortType === SortType.desc ? ICON_DESC : ICON_ASC
	), [sortType]);

	const dispatch = useDispatch();

	const handleToggleDoneAllItems = useCallback(() =>
		dispatch(toggleAllItemsDone(!isAllDone)),
	[isAllDone]);

	const handleDeleteAllDoneItems = useCallback(() =>
		dispatch(deleteAllDoneItems()),
	[]);

	const handleSortPriority = useCallback(() =>
		dispatch(toggleSort(
			SortField.priority,
			sortType === SortType.asc ? SortType.desc : SortType.asc,
		)),
	[sortType]);

	const handleSortDate = useCallback(() =>
		dispatch(toggleSort(
			SortField.date,
			sortType === SortType.asc ? SortType.desc : SortType.asc,
		)),
	[sortType]);

	const handleSortDeadLine = useCallback(() =>
		dispatch(toggleSort(
			SortField.deadLine,
			sortType === SortType.asc ? SortType.desc : SortType.asc,
		)),
	[sortType]);

	return (
		<ItemSelectPanel
			sortField={sortField}
			sortType={sortType}
			isAllDone={isAllDone}
			iconSortClassName={iconSortClassName}
			handleToggleDoneAllItems={handleToggleDoneAllItems}
			handleDeleteAllDoneItems={handleDeleteAllDoneItems}
			handleSortPriority={handleSortPriority}
			handleSortDate={handleSortDate}
			handleSortDeadLine={handleSortDeadLine}
		/>
	);
};

export default memo(ItemSelectPanelContainer);
