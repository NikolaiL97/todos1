import { useContext } from 'react';
import './tasks-filter.css';
// eslint-disable-next-line import/no-cycle
import { TasksFilterContext } from '../footer/footer';

const TasksFilter = () => {
	const footerValue = useContext(TasksFilterContext);
	let classNames = '';
	if (footerValue.item.selected) {
		classNames += ' selected';
	}

	return (
		<li>
			<button className={classNames} onClick={footerValue.onFilterClick}>
				{footerValue.item.label}
			</button>
		</li>
	);
};

export default TasksFilter;
