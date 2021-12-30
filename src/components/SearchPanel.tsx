import React, { memo } from 'react';
import '../styles/search-panel.scss';

interface SearchPanelProps {
	term: string;
	handleSearchChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const SearchPanel = ({ term, handleSearchChange }: SearchPanelProps) => {
	console.log('SearchPanel render');

	return (
		<div className="search-panel flex">
			<input
				className="search-panel__input"
				type="text"
				placeholder="type to search"
				value={term}
				onChange={handleSearchChange}
			/>
		</div>
	);
};

export default memo(SearchPanel);
