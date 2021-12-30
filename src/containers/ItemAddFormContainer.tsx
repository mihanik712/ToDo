import moment from 'moment';
import { memo, useCallback, useState } from 'react';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import ItemAddForm from 'components/ItemAddForm';
import { addItem } from 'redux/actions';

const ItemAddFormContainer = () => {
	const [label, setLabel] = useState<string>('');
	const [deadLine, setDeadLine] = useState<string>('');
	const dispatch = useDispatch();

	console.log('ItemAddFormContainer render');

	const handleLabelChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) =>
		setLabel(e.currentTarget.value),
		[]
	);

	const handleDeadLineChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) =>
		setDeadLine(e.currentTarget.value)
	, []);

	const handleSubmit = useCallback((e: React.SyntheticEvent) => {
		e.preventDefault();
		deadLine === ''
			? dispatch(addItem(label))
			: dispatch(addItem(label, moment(deadLine).valueOf()));
		setLabel('');
		setDeadLine('');
	}, [label, deadLine]);

	return (
		<ItemAddForm
			label={label}
			deadLine={deadLine}
			handleLabelChange={handleLabelChange}
			handleSubmit={handleSubmit}
			handleDeadLineChange={handleDeadLineChange}
		/>
	);
};

export default memo(ItemAddFormContainer);
