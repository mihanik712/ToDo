import { SortField, SortType } from 'types/TodoTypes';
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
						className={`item-select-panel__button-icon
							${sortType === SortType.desc && sortField === SortField.priority
								? ' item-select-panel__button-icon--up'
								: ''}`}
					>
						Sort priority
						{sortField === SortField.priority
							&& <i className={iconSortClassName} />}
					</span>
				</button>

				<button
					className="item-select-panel__button"
					type="button"
					onClick={handleSortDate}
				>
					<span
						className={`item-select-panel__button-icon
							${sortType === SortType.desc && sortField === SortField.date
								? ' item-select-panel__button-icon--up'
								: ''
							}`}
					>
						Sort date
						{sortField === SortField.date
							&& <i className={iconSortClassName} />}
					</span>
				</button>

				<button
					type="button"
					className="item-select-panel__button"
					onClick={handleSortDeadLine}
				>
					<span
						className={`item-select-panel__button-icon
							${sortType === SortType.desc && sortField === SortField.deadLine
								? ' item-select-panel__button-icon--up'
								: ''
							}`
						}
					>
						Sort dead-line
						{sortField === SortField.deadLine
							&& <i className={iconSortClassName} />}
					</span>
				</button>
			</div>
		</div>
	);
};

export default ItemSelectPanel;
