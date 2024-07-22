import { Component } from 'react';
import './footer.css';
import propTypes from 'prop-types';
import TasksFilter from '../tasks-filter/tasks-filter';

export default class Footer extends Component {
	static defaultProps = {
		todosCount: 0,
		footerFilter: [],
		onFilterClick: () => {},
		onAllDeleted: () => {},
	};

	static propTypes = {
		todosCount: propTypes.number,
		footerFilter: propTypes.arrayOf(propTypes.object),
		onFilterClick: propTypes.func,
		onAllDeleted: propTypes.func,
	};

	render() {
		const {
			todosCount, footerFilter, onFilterClick, onAllDeleted,
		} = this.props;
		const elem = footerFilter.map((item) => {
			const { id, ...itemProps } = item;
			return (
				<TasksFilter {...itemProps}
					key={id}
					onFilterClick={() => onFilterClick(id)}/>
			);
		});
		return (
			<footer className="footer">
				<span className="todo-count">{todosCount} items left</span>
				<ul className="filters">
					{elem}
				</ul>
				<button className="clear-completed" onClick={onAllDeleted}>Clear completed</button>
			</footer>
		);
	}
}
