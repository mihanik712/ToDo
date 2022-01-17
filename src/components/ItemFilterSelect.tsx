import React, { memo } from 'react';
import { FilterMode } from 'types/TodoTypes';

interface ItemFilterSelectProps {
	filter: FilterMode;
	handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ItemFilterSelect = ({ filter, handleFilterChange }: ItemFilterSelectProps) => (
	<div className="filter__row">
		<div className="filter__content">
			<label className="filter__label">
				Filter:
			</label>
			<select
				className="filter__select"
				onChange={handleFilterChange}
				defaultValue={filter}
			>
				<option value={FilterMode.all}>All</option>
				<option value={FilterMode.notDone}>Not Done</option>
				<option value={FilterMode.done}>Done</option>
				<option value={FilterMode.unexpired}>Unexpired</option>
				<option value={FilterMode.overdue}>Overdue</option>
			</select>
		</div>
	</div>
);

export default memo(ItemFilterSelect);

// import { memo } from 'react';
// import { FilterMode } from 'types/TodoTypes';

// const buttonNames = [
// 	{ name: FilterMode.all, label: 'All', title: 'view all items' },
// 	{ name: FilterMode.notDone, label: 'Not Done', title: 'view only not done items' },
// 	{ name: FilterMode.done, label: 'Done', title: 'view only done items' },
// 	{ name: FilterMode.unexpired, label: 'Unexpired',
// 		title: 'view only items with an unexpired or unset due date' }, // one line
// 	{ name: FilterMode.overdue, label: 'Overdue', title: 'view only overdue items' },
// ];

// interface ItemStatusFilterProps {
// 	filter: FilterMode;
// 	handleFilterChange: (name: FilterMode) => void;
// }

// const ItemStatusFilter = ({ filter, handleFilterChange }: ItemStatusFilterProps) => {
// 	const buttons = buttonNames.map(({ name, label, title }) => (
// 		<button
// 			className={`item-status-filter__button
// 				${filter === name ? 'item-status-filter__button--active' : ''}`} // one line
// 			type="button"
// 			key={name}
// 			onClick={() => handleFilterChange(name)}
// 			title={title}
// 		>
// 			{label}
// 		</button>
// 	));

// 	return (
// 		<div className="item-status-filter__button-group">
// 			{buttons}
// 		</div>
// 	);
// };

// export default memo(ItemStatusFilter);
