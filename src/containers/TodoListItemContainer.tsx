import moment from 'moment';
import React, {memo, useCallback, useState} from 'react';
import { useDispatch } from 'react-redux';
import ItemEditForm from '../components/ItemEditForm';
import TodoListItem from '../components/TodoListItem';
import { deleteItem, editItem, toggleItemProperty } from '../redux/actions';
import { ItemToggledProperties, ItemType } from '../types/TodoTypes';

interface TodoListItemContainerProps {
	item: ItemType;
}

const TodoListItemContainer = ({item}: TodoListItemContainerProps) => {
	console.log('TodoListItemContainer render');

	const {id, label, deadLine} = item;
	const [isEditItem, setIsEditItem] = useState<boolean>(false);
	const [editLabel, setEditLabel] = useState<string>(label);
	const [editDeadLine, setEditDeadLine] = useState<number>(deadLine ? deadLine : 0);
	const isOverdue = (item.deadLine !== null) && (moment().valueOf() > item.deadLine);
	const dispatch = useDispatch();

	const handleToggleDone = useCallback(() =>
		dispatch(toggleItemProperty(id, ItemToggledProperties.done)
	), [id]);

	const handleToggleImportant = useCallback(() =>
		dispatch(toggleItemProperty(id, ItemToggledProperties.important)
	), [id]);

	const handleEditItem = useCallback((id: string, label: string, editDeadLine: number) =>
		{
			console.log('handleEditItem');

			dispatch(editItem(id, label, editDeadLine))
		}
	, [id]);

	const handleDeleteItem = useCallback(() =>
		dispatch(deleteItem(id)
	), [id]);

	const handleEditLabelChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) =>
		{
			console.log('handleEditLabelChange');
			
			setEditLabel(e.currentTarget.value)}
	, []);

	const handleEditDeadLineChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) =>
		{
			console.log('handleEditDeadLineChange');

			setEditDeadLine(moment(e.currentTarget.value).valueOf())}
		// {
			// console.log(e.currentTarget.value)
			// console.log(moment(e.currentTarget.value).valueOf())
		//     console.log(e.currentTarget.value); // 2021-12-22T16:23
		//     const deadLine = moment(e.currentTarget.value).unix();
		//     console.log(deadLine);
		//     console.log(moment.unix(deadLine).format('ddd, D MMM, H:mm'));
		//     console.log(moment.unix(deadLine).format('Y-M-DTH:mm'));
		// }
	, []);

	const handleToggleIsEditItem = useCallback(() =>
		setIsEditItem(!isEditItem)
	, [isEditItem]);

	const handleSubmit = useCallback((e: React.SyntheticEvent) => {
		e.preventDefault();
		handleEditItem(id, editLabel, editDeadLine);
		//dispatch(editItem(id, label, editDeadLine))
		handleToggleIsEditItem();
	}, [id, editLabel, editDeadLine, handleToggleIsEditItem]);

	return isEditItem ? (
		<ItemEditForm
			deadLine={editDeadLine}
			item={item}
			onSubmit={handleSubmit}
			handleLabelChange={handleEditLabelChange}
			handleDeadLineChange={handleEditDeadLineChange}
		/>
	) : (
		<TodoListItem
			item={item}
			isOverdue={isOverdue}
			handleToggleDone={handleToggleDone}
			handleToggleImportant={handleToggleImportant}
			handleDeleteItem={handleDeleteItem}
			handleToggleIsEditItem={handleToggleIsEditItem}
		/>
	)
};

export default memo(TodoListItemContainer);