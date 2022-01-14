import { memo, useMemo } from 'react';
import cn from 'classnames';
import moment from 'moment';
import { ItemType } from 'types/TodoTypes';
import {
	BsFillBookmarkStarFill,
	BsPencilFill,
	BsXLg,
} from 'react-icons/bs';

interface TodoListItemProps {
	item: ItemType;
	isOverdue: boolean;
	handleToggleDone: () => void;
	handleToggleImportant: () => void;
	handleDeleteItem: () => void;
	handleToggleIsEditItem: () => void;
}

const TodoListItem = ({
	item,
	isOverdue,
	handleToggleDone,
	handleToggleImportant,
	handleDeleteItem,
	handleToggleIsEditItem,
}: TodoListItemProps) => {
	const { id, label, date, important, done, deadLine } = item;
	const todoListItemLabelCN = useMemo(() =>
		cn(
			'todo-list-item__label',
			{
				'todo-list-item__label--done': done,
				'todo-list-item__label--important': important,
			},
		), [done, important]);

	return (
		<li key={id} className="todo-list__item todo-list-item">
			<div className="todo-list-item__row">
				<div className="todo-list-item__left">
					<label
						className="todo-list-item__top"
						title="make item done"
					>
						<input
							className="todo-list-item__checkbox"
							type="checkbox"
							checked={done}
							onChange={handleToggleDone}
						/>
						<span className={todoListItemLabelCN}>
							{label}
						</span>
					</label>
					<div className="todo-list-item__dates">
						<span
							className="todo-list-item__date"
							title="date the item was added"
						>
							{moment(date).format('ddd, D MMM, H:mm')}
						</span>
						{
							deadLine
								&& (
									<span
										className={`todo-list-item__dead-line ${isOverdue ? 'todo-list-item__dead-line--overdue' : ''}`}
										title="due date"
									>
										{moment(deadLine).format('ddd, D MMM, H:mm')}
									</span>
								)
						}
					</div>
				</div>

				<div className="todo-list-item__right">
					<div className="todo-list-item__buttons">
						<button
							type="button"
							className="todo-list-item__button button--outline--success"
							title="set high priority"
							onClick={handleToggleImportant}
						>
							<BsFillBookmarkStarFill size="1.1rem" />
						</button>

						<button
							type="button"
							className="todo-list-item__button button--outline--warning"
							title="edit item"
							onClick={handleToggleIsEditItem}
						>
							<BsPencilFill size="1.1rem" />
						</button>

						<button
							type="button"
							className="todo-list-item__button button--outline--danger"
							title="delete item"
							onClick={handleDeleteItem}
						>
							<BsXLg size="1.1rem" />
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default memo(TodoListItem);
