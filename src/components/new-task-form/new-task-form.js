import { Component } from 'react';
import './new-task-form.css';
import propTypes from 'prop-types';

export default class NewTaskForm extends Component {
	static defaultProps = {
		onLabelChange: () => {},
		onSubmit: () => {},
		val: '',
	};

	static propTypes = {
		onLabelChange: propTypes.func,
		onSubmit: propTypes.func,
		val: propTypes.string,
	};

	render() {
		const { onLabelChange, onSubmit, val } = this.props;

		return (
			<form onSubmit={onSubmit}>
				<input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={onLabelChange} value={val}/>
			</form>
		);
	}
}
