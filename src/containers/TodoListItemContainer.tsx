import moment from 'moment';
import { memo, useCallback, useState } from 'react';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import ItemEditForm from 'components/ItemEditForm';
import TodoListItem from 'components/TodoListItem';
import { deleteItem, editItem, toggleItemProperty } from 'redux/actions';
import { ItemToggledProperties, ItemType } from 'types/TodoTypes';

interface TodoListItemContainerProps {
	item: ItemType;
}

const TodoListItemContainer = ({ item }: TodoListItemContainerProps) => {
	const { id, label, deadLine } = item;
	const [isEditItem, setIsEditItem] = useState<boolean>(false);
	const [editLabel, setEditLabel] = useState<string>(label);
	const [editDeadLine, setEditDeadLine] = useState<number>(deadLine || 0);
	const isOverdue = (deadLine !== null) && (moment().valueOf() > deadLine);
	const dispatch = useDispatch();

	const handleToggleDone = useCallback(() =>
		dispatch(toggleItemProperty(id, ItemToggledProperties.done)),
	[id]);

	const handleToggleImportant = useCallback(() =>
		dispatch(toggleItemProperty(id, ItemToggledProperties.important)),
	[id]);

	const handleEditItem = useCallback((idArg: string, labelArg: string, editDeadLineArg: number) =>
		dispatch(editItem(idArg, labelArg, editDeadLineArg)),
	[id]);

	const handleDeleteItem = useCallback(() =>
		dispatch(deleteItem(id)),
	[id]);

	const handleEditLabelChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) =>
		setEditLabel(e.currentTarget.value),
	[]);

	const handleEditDeadLineChange = useCallback((e: React.SyntheticEvent<HTMLInputElement>) =>
		setEditDeadLine(moment(e.currentTarget.value).valueOf()),
	[]);

	const handleToggleIsEditItem = useCallback(() =>
		setIsEditItem(!isEditItem),
	[isEditItem]);

	const handleSubmit = useCallback((e: React.SyntheticEvent) => {
		e.preventDefault();
		handleEditItem(id, editLabel, editDeadLine);
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
	);
};

export default memo(TodoListItemContainer);
