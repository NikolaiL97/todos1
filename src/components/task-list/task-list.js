import { Component } from 'react';
import propTypes from 'prop-types';
import './task-list.css';
import Task from '../task/task';

export default class TaskList extends Component {
	static defaultProps = {
		todos: [],
		onDeleted: () => {},
		onCompleted: () => {},
		oldId: 1,
	};

	static propTypes = {
		todos: propTypes.arrayOf(propTypes.object),
		onDeleted: propTypes.func,
		onCompleted: propTypes.func,
		oldId: propTypes.number,
	};

	render() {
		const {
			todos, onDeleted, onCompleted, oldId, startTimer, pauseTimer, timerValue,
		} = this.props;

		const elems = todos.map((item) => {
			const { id, ...itemProps } = item;
			return (
				<Task {...itemProps}
					key={id}
					onDeleted ={() => onDeleted(id)}
					onCompleted={() => onCompleted(id)}
					oldId={oldId}
					startTimer={() => startTimer(id)}
					pauseTimer={pauseTimer}
					timerValue={timerValue}
				/>
			);
		});

		return (
			<ul className="todo-list">
				{elems}
			</ul>
		);
	}
}
