import { useMemo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import {
	getFilter,
	getSortField,
	getSortType,
	getTerm,
	getTodoData,
	getVisibleItems,
} from 'redux/selectors';
import AppHeader from 'components/AppHeader';
import TodoList from 'components/TodoList';
import TodoListItemContainer from 'containers/TodoListItemContainer';
import ItemSelectPanelContainer from 'containers/ItemSelectPanelContainer';
import ItemAddFormContainer from 'containers/ItemAddFormContainer';
import SearchAndFilterContainer from 'containers/SearchAndFilterContainer';
import CatFactContainer from 'containers//CatFactContainer';
import { ReduxStateType } from 'types/TodoTypes';

const mapStateToProps = (state: ReduxStateType) => ({
	todoData: getTodoData(state),
	term: getTerm(state),
	filter: getFilter(state),
	sortField: getSortField(state),
	sortType: getSortType(state),
	visibleItems: getVisibleItems(state),
});

const TodoController = () => {
	console.log('TodoController render');

	const {
		todoData,
		term,
		filter,
		sortField,
		sortType,
		visibleItems,
	} = useSelector(mapStateToProps, shallowEqual);
	const doneCount = useMemo(() => todoData.filter((el) => el.done).length, [todoData]);
	const todoCount = useMemo(() => todoData.length - doneCount, [doneCount, todoData]);
	const isAllDone = useMemo(() => todoData.every((todo) => todo.done === true), [todoData]);

	return (
		<>
			<AppHeader
				doneCount={doneCount}
				todoCount={todoCount}
			/>
			<SearchAndFilterContainer
				filter={filter}
				term={term}
			/>
			<ItemAddFormContainer />
			<ItemSelectPanelContainer
				sortField={sortField}
				sortType={sortType}
				isAllDone={isAllDone}
			/>
			<TodoList>
				{visibleItems.map((item) => (
					<TodoListItemContainer
						key={item.id}
						item={item}
					/>
				))}
			</TodoList>
			<CatFactContainer />
		</>
	);
};

export default TodoController;
