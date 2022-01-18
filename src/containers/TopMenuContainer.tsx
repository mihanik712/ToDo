import * as React from 'react';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter, changeSearch, deleteAllDoneItems, toggleAllItemsDone, toggleSort } from 'redux/actions';
import { FilterMode, SortField, SortType } from 'types/TodoTypes';
import SearchPanel from 'components/SearchPanel';
import ItemFilterSelect from 'components/ItemFilterSelect';
import ItemButtonsMenu from 'components/ItemButtonsMenu';
import ItemSortingSelect, { SortName } from 'components/ItemSortingSelect';

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

interface TopMenuContainerProps {
	filter: FilterMode;
	term: string;
	sortField: SortField;
	sortType: SortType;
	isAllDone: boolean;
}

const TopMenuContainer = ({
	filter,
	term,
	sortField,
	sortType,
	isAllDone,
}: TopMenuContainerProps) => {
	const dispatch = useDispatch();

	const handleSearchChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) =>
		dispatch(changeSearch(e.currentTarget.value)),
	[]);

	// const handleFilterChange = useCallback((name: FilterMode) =>
	// 	dispatch(changeFilter(name)),
	// []);

	const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) =>
		dispatch(changeFilter(e.target.value as FilterMode)),
	[]);

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
		<div className="top-menu">
			<div className="top-menu__row">
				<div className="top-menu__search-panel">
					<SearchPanel
						term={term}
						handleSearchChange={handleSearchChange}
					/>
				</div>
				<div className="top-menu__item-filter-select">
					<ItemFilterSelect
						filter={filter}
						handleFilterChange={handleFilterChange}
					/>
				</div>
				<div className="top-menu__item-sorting-select">
					<ItemSortingSelect
						sortField={sortField}
						sortType={sortType}
						handleSortItems={handleSortItems}
					/>
				</div>
				<div className="top-menu__item-buttons-menu">
					<ItemButtonsMenu
						isAllDone={isAllDone}
						handleToggleDoneAllItems={handleToggleDoneAllItems}
						handleDeleteAllDoneItems={handleDeleteAllDoneItems}
					/>
				</div>
			</div>
		</div>
	);
};

export default memo(TopMenuContainer);

// import * as React from 'react';
// import { memo, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import ItemStatusFilter from 'components/ItemStatusFilter';
// import SearchPanel from 'components/SearchPanel';
// import { changeFilter, changeSearch } from 'redux/actions';
// import { FilterMode } from 'types/TodoTypes';

// interface SearchAndFilterContainerProps {
// 	filter: FilterMode;
// 	term: string;
// }

// const SearchAndFilterContainer = ({ filter, term }: SearchAndFilterContainerProps) => {
// 	const dispatch = useDispatch();

// 	const handleSearchChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) =>
// 		dispatch(changeSearch(e.currentTarget.value)),
// 	[]);

// 	const handleFilterChange = useCallback((name: FilterMode) =>
// 		dispatch(changeFilter(name)),
// 	[]);

// 	return (
// 		<div className="search-filter-panel">
// 			<div className="search-filter-panel__row">
// 				<div className="search-filter-panel__search-panel">
// 					<SearchPanel
// 						term={term}
// 						handleSearchChange={handleSearchChange}
// 					/>
// 				</div>
// 				<div className="search-filter-panel__item-status-filter">
// 					<ItemStatusFilter
// 						filter={filter}
// 						handleFilterChange={handleFilterChange}
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default memo(SearchAndFilterContainer);
