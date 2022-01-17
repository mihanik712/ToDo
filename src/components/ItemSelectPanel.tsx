import React, { memo } from 'react';
import { SortField, SortType } from 'types/TodoTypes';
import { FaSortAmountDownAlt, FaSortAmountDown } from 'react-icons/fa';

interface ItemSelectPanelProps {
	sortField: SortField;
	sortType: SortType;
	isAllDone: boolean;
	handleToggleDoneAllItems: () => void;
	handleDeleteAllDoneItems: () => void;
	handleSortItems: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const enum SortName {
	dateOld = 'Date Old',
	dateNew = 'Date New',
	dueDateOld = 'Due Date Old',
	dueDateNew = 'Due Date New',
	priorityLow = 'Priority Low',
	priorityHigh = 'Priority High',
}

const ItemSelectPanel = ({
	sortField,
	sortType,
	isAllDone,
	handleDeleteAllDoneItems,
	handleToggleDoneAllItems,
	handleSortItems,
}: ItemSelectPanelProps) => {
	// const sortButtons = sortButtonNames.map(({ name, label }) => (
	// 	<button
	// 		className={`item-select-panel__button ${sortField === name ?
	// 'item-select-panel__button--active' : ''}`}
	// 		type="button"
	// 		key={name}
	// 		onClick={() => handleSortItems(name)}
	// 	>
	// 		<span
	// 			className="item-select-panel__button-icon"
	// 		>
	// 			{label}
	// 			{sortField === name
	// 				&& (sortType === SortType.asc
	// 					? <FaSortAmountDownAlt size="1.2rem" className="item-select-panel__sort-icon" />
	// 					: <FaSortAmountDown size="1.2rem" className="item-select-panel__sort-icon" />
	// 				)}
	// 		</span>
	// 	</button>
	// ));
	const sortButtonNames = [
		{ name: SortField.priority, label: `Sort Priority ${sortType === SortType.asc ? 'Low' : 'High'}` },
		{ name: SortField.date, label: 'Sort Date' },
		{ name: SortField.deadLine, label: 'Sort Due Date' },
	];

	const getSortName = (sortField: SortField, sortType: SortType) => {
		if (sortField === SortField.priority) return `Priority ${sortType === SortType.asc ? 'Low' : 'High'}`;
		if (sortField === SortField.date) return `Date ${sortType === SortType.asc ? 'Old' : 'New'}`;
		if (sortField === SortField.deadLine) return `Due Date ${sortType === SortType.asc ? 'Old' : 'New'}`;
		return 'Select Sorting';
	};

	return (
		<div className="item-select-panel">
			<div className="filter__row">
				<div className="filter__content">
					<label className="filter__label">
						Sorting: First
						<select
							className="filter__select"
							onChange={handleSortItems}
							defaultValue={getSortName(sortField, sortType)}
						>
							{/* <option value="all">All</option> */}
							<option value={SortName.priorityHigh}>{SortName.priorityHigh}</option>
							<option value={SortName.priorityLow}>{SortName.priorityLow}</option>
							<option value={SortName.dateOld}>{SortName.dateOld}</option>
							<option value={SortName.dateNew}>{SortName.dateNew}</option>
							<option value={SortName.dueDateOld}>{SortName.dueDateOld}</option>
							<option value={SortName.dueDateNew}>{SortName.dueDateNew}</option>
						</select>
					</label>
				</div>
			</div>
			{/* <div className="item-select-panel__button-group">
				<button
					className="item-select-panel__button"
					type="button"
					onClick={handleToggleDoneAllItems}
					title={isAllDone ? 'make all done items undone' : 'make all items done'}
				>
					{isAllDone ? 'Reset Done' : 'Done All'}
				</button>

				<button
					className="item-select-panel__button"
					type="button"
					onClick={handleDeleteAllDoneItems}
					title="delete all done items"
				>
					Delete Done
				</button>
			</div> */}
		</div>
	);
};

export default memo(ItemSelectPanel);

// import { memo } from 'react';
// import { SortField, SortType } from 'types/TodoTypes';
// import { FaSortAmountDownAlt, FaSortAmountDown } from 'react-icons/fa';

// const sortButtonNames = [
// 	{ name: SortField.priority, label: 'Sort Priority' },
// 	{ name: SortField.date, label: 'Sort Date' },
// 	{ name: SortField.deadLine, label: 'Sort Due Date' },
// ];

// interface ItemSelectPanelProps {
// 	sortField: SortField;
// 	sortType: SortType;
// 	isAllDone: boolean;
// 	handleToggleDoneAllItems: () => void;
// 	handleDeleteAllDoneItems: () => void;
// 	handleSortItems: (name: SortField) => void;
// }

// const ItemSelectPanel = ({
// 	sortField,
// 	sortType,
// 	isAllDone,
// 	handleDeleteAllDoneItems,
// 	handleToggleDoneAllItems,
// 	handleSortItems,
// }: ItemSelectPanelProps) => {
// 	const sortButtons = sortButtonNames.map(({ name, label }) => (
// 		<button
// 			className={`item-select-panel__button
// ${sortField === name ? 'item-select-panel__button--active' : ''}`}
// 			type="button"
// 			key={name}
// 			onClick={() => handleSortItems(name)}
// 		>
// 			<span
// 				className="item-select-panel__button-icon"
// 			>
// 				{label}
// 				{sortField === name
// 					&& (sortType === SortType.asc
// 						? <FaSortAmountDownAlt size="1.2rem" className="item-select-panel__sort-icon" />
// 						: <FaSortAmountDown size="1.2rem" className="item-select-panel__sort-icon" />
// 					)}
// 			</span>
// 		</button>
// 	));

// 	return (
// 		<div className="item-select-panel">
// 			<div className="item-select-panel__button-group">
// 				<button
// 					className="item-select-panel__button"
// 					type="button"
// 					onClick={handleToggleDoneAllItems}
// 					title={isAllDone ? 'make all done items undone' : 'make all items done'}
// 				>
// 					{isAllDone ? 'Reset Done' : 'Done All'}
// 				</button>

// 				<button
// 					className="item-select-panel__button"
// 					type="button"
// 					onClick={handleDeleteAllDoneItems}
// 					title="delete all done items"
// 				>
// 					Delete Done
// 				</button>

// 				{sortButtons}
// 			</div>
// 		</div>
// 	);
// };

// export default memo(ItemSelectPanel);
