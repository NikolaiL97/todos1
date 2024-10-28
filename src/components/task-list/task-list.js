import { createContext, useContext, useMemo } from 'react';
import './task-list.css';
// eslint-disable-next-line import/no-cycle
import Task from '../task/task';
// eslint-disable-next-line import/no-cycle
import { TaskListContext } from '../..';

export const TaskContext = createContext();

const TaskList = () => {
	const value = useContext(TaskListContext);
	// const {
	// 	todos, onDeleted, onCompleted, oldId,
	// } = this.props;

	const elems = value.todos.map((item) => {
		const { id } = item;
		return (
			<TaskContext.Provider key={id} value={item}>
				<Task/>
			</TaskContext.Provider>

		);
	});

	return (
		<ul className="todo-list">
			{elems}
		</ul>
	);
};

export default TaskList;
