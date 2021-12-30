import * as React from 'react';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ItemStatusFilter from 'components/ItemStatusFilter';
import SearchPanel from 'components/SearchPanel';
import { changeFilter, changeSearch } from 'redux/actions';
import { FilterMode } from 'types/TodoTypes';
import '../styles/search-and-filter-container.scss';

interface SearchAndFilterContainerProps {
	filter: FilterMode;
	term: string;
  }

const SearchAndFilterContainer = ({ filter, term }: SearchAndFilterContainerProps) => {
	console.log('SearchAndFilterContainer render');

	const dispatch = useDispatch();

	const handleSearchChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) =>
		dispatch(changeSearch(e.currentTarget.value)),
	[]);

	const handleFilterChange = useCallback((name: FilterMode) =>
		dispatch(changeFilter(name)),
	[]);

	return (
		<div className="search-filter-panel">
			<div className="search-filter-panel__row">
				<div className="search-filter-panel__search-panel">
					<SearchPanel
						term={term}
						handleSearchChange={handleSearchChange}
					/>
				</div>
				<div className="search-filter-panel__item-status-filter">
					<ItemStatusFilter
						filter={filter}
						handleFilterChange={handleFilterChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default memo(SearchAndFilterContainer);
