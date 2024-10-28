import { createContext, useContext, useMemo } from 'react';
import './footer.css';
// eslint-disable-next-line import/no-cycle
import TasksFilter from '../tasks-filter/tasks-filter';
// eslint-disable-next-line import/no-cycle
import { FooterContext } from '../..';

export const TasksFilterContext = createContext();

const Footer = () => {
	const value = useContext(FooterContext);
	const elem = value.footerFilter.map((item) => {
		const { id } = item;
		const onFilterClick = () => {
			value.onFilterClick(id);
		};
		const contextTasksFilter = useMemo(() => ({
			item,
			onFilterClick,
		}), [item, onFilterClick]);

		return (
			<TasksFilterContext.Provider value={contextTasksFilter} key={id}>
				<TasksFilter
				/>
			</TasksFilterContext.Provider>
		);
	});
	return (
		<footer className="footer">
			<span className="todo-count">{value.todosCount} items left</span>
			<ul className="filters">
				{elem}
			</ul>
			<button className="clear-completed" onClick={value.onAllDeleted}>Clear completed</button>
		</footer>
	);
};

export default Footer;
