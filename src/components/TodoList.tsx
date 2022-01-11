import { ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

const TodoList = ({ children }: IProps) => {
	console.log('TodoList render');

	return (
		<div className="todo-list">
			<ul className="todo-list__row">
				{children}
			</ul>
		</div>

	);
};

export default TodoList;
