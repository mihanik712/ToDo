import * as React from 'react';

interface ItemAddFormProps {
	label: string;
	isValidLabel: boolean;
	deadLine: string;
	handleLabelChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
	handleDeadLineChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.SyntheticEvent) => void;
}

const ItemAddForm = ({
	label,
	isValidLabel,
	deadLine,
	handleLabelChange,
	handleDeadLineChange,
	handleSubmit,
}: ItemAddFormProps) => (
	<form
		className="item-add-form"
		onSubmit={handleSubmit}
	>
		<div className="item-add-form__row">
			<div className="item-add-form__left">
				<input
					type="text"
					className={`item-add-form__label ${isValidLabel ? '' : 'item-add-form__label--invalid'}`}
					placeholder={isValidLabel ? 'what needs to be done' : 'type to add new item'}
					value={label}
					onChange={handleLabelChange}
				/>
			</div>

			<div className="item-add-form__right">
				<input
					className="item-add-form__dead-line"
					type="datetime-local"
					value={deadLine}
					title="set due date"
					onChange={handleDeadLineChange}
				/>

				<button
					className="item-add-form__button"
					type="submit"
				>
					Add Item
				</button>
			</div>
		</div>
	</form>
);

export default React.memo(ItemAddForm);
