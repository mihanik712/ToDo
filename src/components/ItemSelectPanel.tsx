import { memo } from 'react';
import { SortField, SortType } from 'types/TodoTypes';
import { FaSortAmountDownAlt, FaSortAmountDown } from 'react-icons/fa';

interface ItemSelectPanelProps {
	sortField: SortField;
	sortType: SortType;
	isAllDone: boolean;
	handleToggleDoneAllItems: () => void;
	handleDeleteAllDoneItems: () => void;
	handleSortItems: (name: SortField) => void;
}

const sortButtonNames = [
	{ name: SortField.priority, label: 'Sort Priority' },
	{ name: SortField.date, label: 'Sort Date' },
	{ name: SortField.deadLine, label: 'Sort Due Date' },
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
			className={`item-select-panel__button ${sortField === name ? 'item-select-panel__button--active' : ''}`}
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
						? <FaSortAmountDownAlt size="1.2rem" className="item-select-panel__sort-icon" />
						: <FaSortAmountDown size="1.2rem" className="item-select-panel__sort-icon" />
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
					{isAllDone ? 'Reset Done' : 'Done All'}
				</button>

				<button
					className="item-select-panel__button"
					type="button"
					onClick={handleDeleteAllDoneItems}
				>
					Delete Done
				</button>

				{sortButtons}
			</div>
		</div>
	);
};

export default memo(ItemSelectPanel);
