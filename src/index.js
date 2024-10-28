import React, {
	createContext, useState, useContext, useMemo,
} from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/no-cycle
import NewTaskForm from './components/new-task-form/new-task-form';
// eslint-disable-next-line import/no-cycle
import TaskList from './components/task-list/task-list';
// eslint-disable-next-line import/no-cycle
import Footer from './components/footer/footer';

import './index.css';

export const NewTaskFormContext = createContext();
export const FooterContext = createContext();
export const TaskListContext = createContext();

const App = () => {
	const [label, setLabel] = useState('');
	const [todos, setTodos] = useState([]);
	const [footerFilter, setFooterFilter] = useState([
		{ label: 'All', id: 1, selected: false },
		{ label: 'Active', id: 2, selected: false },
		{ label: 'Completed', id: 3, selected: false },
	]);
	const [oldSeclected, setOldSelected] = useState(0);
	const [maxId, setMaxId] = useState(4);

	const onLabelChange = (e) => {
		setLabel(e.target.value);
	};
	function addItem(text) {
		const newItem = {
			label: text,
			completed: false,
			id: maxId,
			addDate: new Date(),
		};
		setMaxId(maxId + 1);

		const newArr = [
			...todos,
			newItem,
		];
		setTodos(newArr);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		if (label) {
			addItem(label);
			setLabel('');
		}
	};

	const addTime = (id) => {
		const idx = todos.findIndex((el) => el.id === id);
		const time = todos[idx].addDate;
		return time;
	};

	function deleteItem(id) {
		const idx = todos.findIndex((el) => el.id === id);
		const newArr = [
			...todos.slice(0, idx),
			...todos.slice(idx + 1),
		];
		setTodos(newArr);
	}

	function onCompleted(id) {
		const idx = todos.findIndex((el) => el.id === id);

		const oldTask = todos[idx];

		const newTask = { ...oldTask, completed: !oldTask.completed };
		const newArr = [
			...todos.slice(0, idx), newTask, ...todos.slice(idx + 1),
		];

		setTodos(newArr);
	}

	// eslint-disable-next-line consistent-return
	function onFilterClick(id) {
		let newArr = footerFilter;
		if (oldSeclected) {
			const idxOld = footerFilter.findIndex((elem) => elem.id === oldSeclected);
			const oldFil = footerFilter[idxOld];
			const newFil = { ...oldFil, selected: false };
			newArr = [
				...footerFilter.slice(0, idxOld),
				newFil,
				...footerFilter.slice(idxOld + 1),
			];
		}

		const idx = newArr.findIndex((el) => el.id === id);
		const oldFilter = newArr[idx];
		const newFilter = { ...oldFilter, selected: !oldFilter.selected };
		newArr = [
			...newArr.slice(0, idx),
			newFilter,
			...newArr.slice(idx + 1),
		];
		setFooterFilter(newArr);
		setOldSelected(id);
	}

	function onAllDeleted() {
		setTodos([]);
	}

	const oldId = oldSeclected;
	const completedCount = todos.filter((el) => el.completed).length;
	const todosCount = todos.length - completedCount;

	const contextValueNewTask = useMemo(() => ({
		onLabelChange,
		onSubmit,
		label,
		addItem,
	}), [onLabelChange, onSubmit, addItem, label]);

	const contextValueFooter = useMemo(() => ({
		todosCount,
		footerFilter,
		onFilterClick,
		onAllDeleted,
	}), [todosCount, footerFilter, onFilterClick, onAllDeleted]);

	const contextTaskList = useMemo(() => ({
		todos,
		deleteItem,
		onCompleted,
		oldId,
	}), [todos, deleteItem, onCompleted, oldId]);

	return (
		<section className="todoapp">
			<header className="header">
				<h1>todos</h1>
				<NewTaskFormContext.Provider value={contextValueNewTask}>
					<NewTaskForm/>
				</NewTaskFormContext.Provider>
			</header>
			<section className="main">
				<TaskListContext.Provider value ={contextTaskList}>
					<TaskList />
				</TaskListContext.Provider>
				<FooterContext.Provider value={contextValueFooter}>
					<Footer/>
				</FooterContext.Provider>
			</section>
		</section>
	);
};
export default App;
const container = document.getElementById('root');
const body = createRoot(container);

body.render(<App />);
