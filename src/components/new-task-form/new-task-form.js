import { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { NewTaskFormContext } from '../..';
import './new-task-form.css';

const NewTaskForm = () => {
	const value = useContext(NewTaskFormContext);

	return (
		<form onSubmit={value.onSubmit}>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={value.onLabelChange} value={value.label}/>
		</form>
	);
};

export default NewTaskForm;
