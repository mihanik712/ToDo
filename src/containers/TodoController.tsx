import { useMemo } from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import { getFilter, getSortField, getSortType, getTerm, getTodoData, getVisibleItems} from '../redux/selectors';
import AppHeader from '../components/AppHeader';
import TodoList from '../components/TodoList';
import TodoListItemContainer from './TodoListItemContainer';
import ItemSelectPanelContainer from './ItemSelectPanelContainer';
import ItemAddFormContainer from './ItemAddFormContainer';
import SearchAndFilterContainer from './SearchAndFilterContainer';
import { ReduxStateType } from '../types/TodoTypes';
import CatFactContainer from './CatFactContainer';

const mapStateToProps = (state: ReduxStateType) => ({
	todoData: getTodoData(state),
	term: getTerm(state),
	filter: getFilter(state),
	sortField: getSortField(state),
	sortType: getSortType(state),
	visibleItems: getVisibleItems(state),
	// catFact: getCatFact(state),
	// catLoading: getCatFactLoading(state),
	// catError: getCatFactError(state),
})

const TodoController = () => {
	console.log('TodoController render');
	

	const {
		todoData,
		term,
		filter,
		sortField,
		sortType,
		visibleItems
	} = useSelector(mapStateToProps, shallowEqual);
	const doneCount = useMemo(() => todoData.filter((el) => el.done).length, [todoData]);
	const todoCount = useMemo(() => todoData.length - doneCount, [doneCount, todoData]);
	const isAllDone = useMemo(() => todoData.every(todo => todo.done === true), [todoData]);

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
			<CatFactContainer/>
		</>
	);
}

export default TodoController;