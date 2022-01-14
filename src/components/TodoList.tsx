import { memo, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

const TodoList = ({ children }: IProps) => (
	<div className="todo-list">
		<ul className="todo-list__row">
			{children}
		</ul>
	</div>

);

export default memo(TodoList);
