import * as React from 'react';
import { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import ItemAddForm from 'components/ItemAddForm';
import { addItem } from 'redux/actions';
import moment from 'moment';

const ItemAddFormContainer = () => {
	const [label, setLabel] = useState<string>('');
	const [deadLine, setDeadLine] = useState<string>('');
	const [isValidLabel, setIsValidLabel] = useState<boolean>(true);
	const dispatch = useDispatch();

	const handleLabelChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) => {
		setLabel(e.currentTarget.value.trim());
		setIsValidLabel(e.currentTarget.value.trim() !== '');
	}, []);

	const handleDeadLineChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) =>
		setDeadLine(e.currentTarget.value),
	[]);

	const handleSubmit = useCallback((e: React.SyntheticEvent) => {
		e.preventDefault();

		if (label.trim() !== '') {
			dispatch(addItem(label.trim(), deadLine ? moment(deadLine).valueOf() : null));
		} else {
			setIsValidLabel(false);
		}
		setLabel('');
		setDeadLine('');
	}, [label, deadLine]);

	return (
		<ItemAddForm
			label={label}
			isValidLabel={isValidLabel}
			deadLine={deadLine}
			handleLabelChange={handleLabelChange}
			handleSubmit={handleSubmit}
			handleDeadLineChange={handleDeadLineChange}
		/>
	);
};

export default memo(ItemAddFormContainer);
