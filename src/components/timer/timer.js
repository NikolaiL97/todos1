import React, { Component } from 'react';

export default class Timer extends Component {
	render() {
		const { startTimer, pauseTimer, timerValue } = this.props;
		return (
			<TimerButton
				timerValue={timerValue}
				startTimer={startTimer}
				pauseTimer={pauseTimer}/>
		);
	}
}

class TimerDisplay extends Component {
	render() {
		const { timerValue } = this.props;

		if (timerValue === null) {
			return <span>0</span>;
		}
		return (
			<span>
				{timerValue}
			</span>
		);
	}
}

class TimerButton extends Component {
	render() {
		const { timerValue, startTimer, pauseTimer } = this.props;
		return (
			<React.Fragment>
				<button onClick={startTimer} className="icon icon-play"></button>
				<TimerDisplay timerValue={timerValue}/>
				<button onClick={pauseTimer} className="icon icon-pause"></button>
			</React.Fragment>
		);
	}
}
