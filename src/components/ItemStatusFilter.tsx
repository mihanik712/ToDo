import { memo } from 'react';
import { FilterMode } from 'types/TodoTypes';

const buttonNames = [
	{ name: FilterMode.all, label: 'All', title: 'view all items' },
	{ name: FilterMode.notDone, label: 'Not Done', title: 'view only not done items' },
	{ name: FilterMode.done, label: 'Done', title: 'view only done items' },
	{ name: FilterMode.unexpired, label: 'Unexpired', title: 'view only items with an unexpired or unset due date' },
	{ name: FilterMode.overdue, label: 'Overdue', title: 'view only overdue items' },
];

interface ItemStatusFilterProps {
	filter: FilterMode;
	handleFilterChange: (name: FilterMode) => void;
}

const ItemStatusFilter = ({ filter, handleFilterChange }: ItemStatusFilterProps) => {
	const buttons = buttonNames.map(({ name, label, title }) => (
		<button
			className={`item-status-filter__button ${filter === name ? 'item-status-filter__button--active' : ''}`}
			type="button"
			key={name}
			onClick={() => handleFilterChange(name)}
			title={title}
		>
			{label}
		</button>
	));

	return (
		<div className="item-status-filter__button-group">
			{buttons}
		</div>
	);
};

export default memo(ItemStatusFilter);
