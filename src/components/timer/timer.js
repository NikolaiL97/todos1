import React, {
	createContext, useContext, useEffect, useMemo, useState,
} from 'react';
// eslint-disable-next-line import/no-cycle
import { TaskContext } from '../task-list/task-list';

const TimerButtonContext = createContext();

const Timer = () => {
	const item = useContext(TaskContext);
	const [timerValue, setTimerValue] = useState(null);
	const [timer, setTimer] = useState(null);
	const [start, setStart] = useState(false);
	const [pause, setPause] = useState(false);

	function pauseTimer() {
		setPause(true);
		setStart(false);
	}

	function startTimer() {
		if (!start && !item.completed) {
			setStart(true);
			setPause(false);
			clearInterval(timer);
		}
	}

	useEffect((() => {
		pauseTimer();
	}), [item.completed]);

	useEffect((() => {
		if (start) {
			const interval = setInterval(() => {
				setTimerValue((s) => s + 1);
				setTimer(interval);
			}, 1000);
		} else if (pause) {
			clearInterval(timer);
		}
	}), [start]);

	const contextTimerButton = useMemo(() => ({
		timerValue,
		startTimer,
		pauseTimer,
	}), [timerValue, startTimer, pauseTimer]);

	return (
		<TimerButtonContext.Provider value={contextTimerButton}>
			<TimerButton/>
		</TimerButtonContext.Provider>
	);
};

export default Timer;

const TimerDisplay = () => {
	const value = useContext(TimerButtonContext);
	const { timerValue } = value;

	if (timerValue === null) {
		return <span>0</span>;
	}
	return (
		<span>
			{timerValue}
		</span>
	);
};

const TimerButton = () => {
	const value = useContext(TimerButtonContext);
	const { timerValue, startTimer, pauseTimer } = value;
	return (
		<React.Fragment>
			<button onClick={startTimer} className="icon icon-play"></button>
			<TimerDisplay timerValue={timerValue}/>
			<button onClick={pauseTimer} className="icon icon-pause"></button>
		</React.Fragment>
	);
};
