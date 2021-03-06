import { memo } from 'react';
import * as React from 'react';

interface SearchPanelProps {
	term: string;
	handleSearchChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

const SearchPanel = ({ term, handleSearchChange }: SearchPanelProps) => (
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

export default memo(SearchPanel);
