import { v4 as getId } from 'uuid';
import moment from 'moment';
import { ItemType } from 'types/TodoTypes';

const createTodoItem = (
	label: string,
	deadLine: number | null = null,
): ItemType => (
	{
		label,
		important: false,
		done: false,
		id: getId(),
		date: moment().valueOf(),
		deadLine,
	}
);

export default createTodoItem;
