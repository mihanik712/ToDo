import { memo, useMemo } from 'react';
import * as React from 'react';
import cn from 'classnames';
import moment from 'moment';
import { ItemType } from 'types/TodoTypes';
import { BsPencilFill } from 'react-icons/bs';

interface ItemEditFormProps {
	item: ItemType;
	deadLine: number;
	handleLabelChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
	handleDeadLineChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.SyntheticEvent) => void;
}

const ItemEditForm = ({
	item,
	deadLine,
	onSubmit,
	handleLabelChange,
	handleDeadLineChange,
}: ItemEditFormProps) => {
	console.log('ItemEditForm render');

	const { id, important, done, label } = item;
	const itemEditFormInputCN = useMemo(() =>
		cn(
			'item-edit-form__label',
			{
				'item-edit-form__label--done': done,
				'item-edit-form__label--important': important,
			},
		), [done, important]);

	return (
		<li key={id} className="todo-list__item item-edit-form">
			<form
				className="item-edit-form__form"
				onSubmit={onSubmit}
			>
				<div className="item-edit-form__row">
					<div className="item-edit-form__left">
						<div className="item-edit-form__label-row">
							<input
								className="item-edit-form__checkbox"
								type="checkbox"
								checked={done}
								readOnly
							/>

							<input
								className={itemEditFormInputCN}
								type="text"
								onChange={handleLabelChange}
								defaultValue={label}
							/>
						</div>

						<input
							className="item-edit-form__dead-line"
							type="datetime-local"
							value={deadLine ? moment(deadLine).format('Y-MM-DDTHH:mm') : ''}
							onChange={handleDeadLineChange}
						/>
					</div>

					<div className="item-edit-form__right">
						<button
							className="item-edit-form__button"
							type="submit"
						>
							Save
							<i className="item-edit-form__icon">
								<BsPencilFill size="1.1rem" />
							</i>
						</button>
					</div>
				</div>
			</form>
		</li>
	);
};

export default memo(ItemEditForm);
