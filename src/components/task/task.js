import { Component } from 'react';
import './task.css';
import { formatDistanceToNow } from 'date-fns';
import propTypes from 'prop-types';
import Timer from '../timer/timer';

export default class Task extends Component {
	static defaultProps = {
		label: 'Undefined',
		onDeleted: () => {},
		onCompleted: () => {},
		completed: false,
		oldId: 1,
		addDate: new Date(),
	};

	static propTypes = {
		label: propTypes.node,
		onDeleted: propTypes.func,
		onCompleted: propTypes.func,
		completed: propTypes.bool,
		oldId: propTypes.number,
		addData: propTypes.object,
	};

	render() {
		const {
			label, onDeleted, onCompleted, completed, oldId, addDate, startTimer, pauseTimer, timerValue,
		} = this.props;

		let checkedIn = false;
		let classNames = 'description';
		let styleLi = { display: 'block' };

		const sI = formatDistanceToNow(addDate, { includeSeconds: true });

		const changeFn = (e) => {
			if (e.target.checked) {
				pauseTimer();
				onCompleted();
			} else {
				onCompleted();
			}
		};

		if (oldId === 1) {
			styleLi = { display: 'block' };
		} else if (oldId === 2 && completed) {
			styleLi = { display: 'none' };
		} else if (oldId === 3 && !completed) {
			styleLi = { display: 'none' };
		}

		if (completed) {
			classNames += ' completed';
			checkedIn = true;
		}

		return (
			<li style={styleLi}>
				<div className="view">
					<input onChange={changeFn} className="toggle" type="checkbox" checked={checkedIn}/>
					<label >
						<span className={classNames} onClick={onCompleted}>{label}</span>
						<Timer
							startTimer={startTimer}
							pauseTimer={pauseTimer}
							timerValue={timerValue}
						/>
						<span className="description">Created {sI} ago</span>
					</label >
					<button className="icon icon-edit"></button>
					<button
						className="icon icon-destroy"
						onClick={onDeleted}
					></button>
				</div>
			</li>
		);
	}
}
