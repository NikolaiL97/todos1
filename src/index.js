import { Component } from 'react';
import { createRoot } from 'react-dom/client';
import TaskList from './components/task-list/task-list';
import NewTaskForm from './components/new-task-form/new-task-form';
import Footer from './components/footer/footer';
import '../src/index.css'

export default class App extends Component {
  maxId = 4;
  state = {
    label: '',
    todos: [],
    footerFilter: [
      {label: 'All', id:1, selected: false},
      {label: 'Active', id:2, selected: false},
      {label: 'Completed', id:3, selected: false}
    ],
    oldSeclected: 0
  }


  onLabelChange = (e) => {
    this.setState({
        label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.addItem(this.state.label)
    this.setState({
      label: ''
    })
  }



  addItem = (text) => {
    const newItem = {
      label: text,
      completed: false,
      id: this.maxId++
    }

    this.setState(({ todos }) => {

      const newArr = [
        ...todos,
        newItem 
      ]
      return {
        todos: newArr
      }
    })


  }

  deleteItem = (id) => {

    this.setState(({todos}) => {
      const idx = todos.findIndex((el) => el.id === id);

      const newArr = [
        ...todos.slice(0,idx),
        ...todos.slice(idx+1)
      ]

      return {
        todos: newArr
      }
    })
  }

  onCompleted = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex((el) => el.id === id);
      const oldTask = todos[idx];
      const newTask = {...oldTask, completed: !oldTask.completed};
      const newArr = [
      ...todos.slice(0,idx), newTask, ...todos.slice(idx+1)
    ]

    return {
      todos: newArr
    }
    })
  }

  

  onFilterClick = (id) => {
    this.setState(({footerFilter, oldSeclected})=> {

      const idxOldd = () => {        
        const idxOld = footerFilter.findIndex((elem) => elem.id === oldSeclected)
        const oldFil = footerFilter[idxOld]
        const newFil = {...oldFil, selected: false}
        let newArr = [
            ...footerFilter.slice(0,idxOld),
            newFil,
            ...footerFilter.slice(idxOld+1)
        ]
        return footerFilter = newArr
      }

      if (oldSeclected) {
        idxOldd()
      }

      const idx = footerFilter.findIndex((el) => el.id === id)
      const oldFilter = footerFilter[idx];
      const newFilter = {...oldFilter, selected: !oldFilter.selected}
      const newArr = [
        ...footerFilter.slice(0,idx),
        newFilter,
        ...footerFilter.slice(idx+1)
      ]

      return {
        footerFilter: newArr,
        oldSeclected: id
      }
    })
  }

  onAllDeleted = () => {
    this.setState(({todos}) => {
      const newArr = [];
      return {
        todos: newArr
      }
    })
  }
  render() {
    const oldId = this.state.oldSeclected
    const val = this.state.label
    const completedCount = this.state.todos.filter((el) => el.completed).length;
    const todosCount = this.state.todos.length - completedCount;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm 
          onLabelChange={this.onLabelChange}
          onSubmit={this.onSubmit}
          addItem={this.addItem}
          val={val}/>  
        </header>
        <section className="main">
          <TaskList todos = {this.state.todos}
          onDeleted={this.deleteItem}
          onCompleted={this.onCompleted}
          oldId={oldId}/>
          <Footer
           todosCount = {todosCount}
           footerFilter={this.state.footerFilter}
           onFilterClick={this.onFilterClick}
           onAllDeleted={this.onAllDeleted}/>
        </section>
      </section>
    )
  }
 
}

const container = document.getElementById('root');
const body = createRoot(container)

body.render(<App />)
 