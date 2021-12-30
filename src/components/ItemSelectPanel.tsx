import { SortField, SortType } from 'types/TodoTypes';
import { BsSortUp, BsSortDown } from 'react-icons/bs';
import 'styles/item-select-panel.scss';

interface ItemSelectPanelProps {
	sortField: SortField;
	sortType: SortType;
	isAllDone: boolean;
	iconSortClassName: string;
	handleDeleteAllDoneItems: () => void;
	handleSortPriority: () => void;
	handleSortDate: () => void;
	handleSortDeadLine: () => void;
	handleToggleDoneAllItems: () => void;
}

const ItemSelectPanel = ({
	sortField,
	sortType,
	isAllDone,
	iconSortClassName,
	handleDeleteAllDoneItems,
	handleSortPriority,
	handleSortDate,
	handleSortDeadLine,
	handleToggleDoneAllItems,
}: ItemSelectPanelProps) => {
	console.log('ItemSelectPanel');

	return (
		<div className="item-select-panel">
			<div className="item-select-panel__button-group">
				<button
					className="item-select-panel__button"
					type="button"
					onClick={handleToggleDoneAllItems}
				>
					{
						isAllDone ? 'Reset done' : 'Done all'
					}
				</button>

				<button
					className="item-select-panel__button"
					type="button"
					onClick={handleDeleteAllDoneItems}
				>
					Delete done
				</button>

				<button
					className="item-select-panel__button"
					type="button"
					onClick={handleSortPriority}
				>
					<span
						className="item-select-panel__button-icon"
					>
						Sort priority
						{sortField === SortField.priority
							&& (sortType === SortType.asc
								? <BsSortUp size="1.5rem" />
								: <BsSortDown size="1.5rem" />
							)}
					</span>
				</button>

				<button
					className="item-select-panel__button"
					type="button"
					onClick={handleSortDate}
				>
					<span
						className="item-select-panel__button-icon"
					>
						Sort date
						{sortField === SortField.date
							&& (sortType === SortType.asc
								? <BsSortUp size="1.5rem" />
								: <BsSortDown size="1.5rem" />
							)}
					</span>
				</button>

				<button
					type="button"
					className="item-select-panel__button"
					onClick={handleSortDeadLine}
				>
					<span
						className="item-select-panel__button-icon"
					>
						Sort dead-line
						{sortField === SortField.deadLine
							&& (sortType === SortType.asc
								? <BsSortUp size="1.5rem" />
								: <BsSortDown size="1.5rem" />
							)}
					</span>
				</button>
			</div>
		</div>
	);
};

export default ItemSelectPanel;
