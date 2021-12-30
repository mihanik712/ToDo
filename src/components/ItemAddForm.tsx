import React from 'react';
import 'styles/item-add-form.scss';

interface ItemAddFormProps {
	label: string;
	deadLine: string;
	handleLabelChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
	handleDeadLineChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.SyntheticEvent) => void;
}

const ItemAddForm = ({
	label,
	deadLine,
	handleLabelChange,
	handleDeadLineChange,
	handleSubmit,
}: ItemAddFormProps) => {
	console.log('ItemAddForm render');

	return (
		<form
			className="item-add-form"
			onSubmit={handleSubmit}
		>
			<div className="item-add-form__row">
				<div className="item-add-form__left">
					<input
						type="text"
						className="item-add-form__input"
						onChange={handleLabelChange}
						placeholder="What needs to be done"
						value={label}
					/>
				</div>

				<div className="item-add-form__right">
					<input
						className="item-add-form__dead-line"
						type="datetime-local"
						value={deadLine}
						onChange={handleDeadLineChange}
					/>

					<button
						className="item-add-form__button"
						type="button"
					>
						Add Item
					</button>
				</div>
			</div>
		</form>
	);
};

export default ItemAddForm;
