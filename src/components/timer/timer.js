import React, { Component } from 'react';

export default class Timer extends Component {
	state = {
		timerValue: null,
		timer: null,
		start: false,
		pause: false,
	};

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.completed !== this.props.completed && this.props.completed) {
			this.pauseTimer();
		}
	}

	startTimer = () => {
		if (!this.state.start && !this.props.completed) {
			if (!this.state.start) {
				const start = true;
				const pause = false;
				this.setState({
					start,
					pause,
				});
				clearInterval(this.state.timer);
				const timer = setInterval(() => {
					if (this.state.pause) {
						const newTime = this.state.timerValue;
						return (this.setState({
							start: false,
							timerValue: newTime,
							timer,
						}));
					}
					const newTime = this.state.timerValue + 1;
					return (this.setState({
						timerValue: newTime,
						timer,
					}));
				}, 1000);
			}
		}
	};

	pauseTimer = () => {
		const pause = true;
		return (this.setState({
			pause,
		}));
	};

	render() {
		return (
			<TimerButton
				timerValue={this.state.timerValue}
				startTimer={this.startTimer}
				pauseTimer={this.pauseTimer}/>
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
