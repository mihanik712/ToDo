import { memo } from 'react';
import { SortField, SortType } from 'types/TodoTypes';
import { BsSortUp, BsSortDown } from 'react-icons/bs';

interface ItemSelectPanelProps {
	sortField: SortField;
	sortType: SortType;
	isAllDone: boolean;
	handleToggleDoneAllItems: () => void;
	handleDeleteAllDoneItems: () => void;
	handleSortItems: (name: SortField) => void;
}

const sortButtonNames = [
	{ name: SortField.priority, label: 'Sort priority' },
	{ name: SortField.date, label: 'Sort date' },
	{ name: SortField.deadLine, label: 'Sort dead-line' },
];

const ItemSelectPanel = ({
	sortField,
	sortType,
	isAllDone,
	handleDeleteAllDoneItems,
	handleToggleDoneAllItems,
	handleSortItems,
}: ItemSelectPanelProps) => {
	console.log('ItemSelectPanel render');

	const sortButtons = sortButtonNames.map(({ name, label }) => (
		<button
			className="item-select-panel__button"
			type="button"
			key={name}
			onClick={() => handleSortItems(name)}
		>
			<span
				className="item-select-panel__button-icon"
			>
				{label}
				{sortField === name
					&& (sortType === SortType.asc
						? <BsSortUp size="1.5rem" className="item-select-panel__sort-icon" />
						: <BsSortDown size="1.5rem" className="item-select-panel__sort-icon" />
					)}
			</span>
		</button>
	));

	return (
		<div className="item-select-panel">
			<div className="item-select-panel__button-group">
				<button
					className="item-select-panel__button"
					type="button"
					onClick={handleToggleDoneAllItems}
				>
					{isAllDone ? 'Reset done' : 'Done all'}
				</button>

				<button
					className="item-select-panel__button"
					type="button"
					onClick={handleDeleteAllDoneItems}
				>
					Delete done
				</button>

				{sortButtons}
			</div>
		</div>
	);
};

export default memo(ItemSelectPanel);
