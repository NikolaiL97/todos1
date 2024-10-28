import { useContext } from 'react';
import './task.css';
import { formatDistanceToNow } from 'date-fns';
// eslint-disable-next-line import/no-cycle
import Timer from '../timer/timer';
// eslint-disable-next-line import/no-cycle
import { TaskListContext } from '../..';
import { TaskContext } from '../task-list/task-list';

const Task = () => {
	const value = useContext(TaskListContext);
	const item = useContext(TaskContext);

	// const {
	// 	label, onDeleted, onCompleted, completed, oldId, addDate,
	// } = this.props;

	let checkedIn = false;
	let classNames = 'description';
	let styleLi = { display: 'block' };
	let sI = 0;

	function del() {
		value.deleteItem(item.id);
	}

	function com() {
		value.onCompleted(item.id);
	}
	sI = formatDistanceToNow(item.addDate, { includeSeconds: true });

	function changeFn(e) {
		if (e.target.checked) {
			value.onCompleted(item.id);
		} else {
			value.onCompleted(item.id);
		}
	}

	if (value.oldId === 1) {
		styleLi = { display: 'block' };
	} else if (value.oldId === 2 && item.completed) {
		styleLi = { display: 'none' };
	} else if (value.oldId === 3 && !item.completed) {
		styleLi = { display: 'none' };
	}

	if (item.completed) {
		classNames += ' completed';
		checkedIn = true;
	}

	return (
		<li style={styleLi}>
			<div className="view">
				<input onChange={changeFn} className="toggle" type="checkbox" checked={checkedIn}/>
				<label >
					<span className={classNames} onClick={com}>{item.label}</span>
					<Timer completed={item.completed}/>
					<span className="description">Created {sI} ago</span>
				</label >
				<button className="icon icon-edit"></button>
				<button
					className="icon icon-destroy"
					onClick={del}
				></button>
			</div>
		</li>
	);
};

export default Task;
