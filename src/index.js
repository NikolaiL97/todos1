import { Component } from 'react';
import { createRoot } from 'react-dom/client';
import TaskList from './components/task-list/task-list';
import NewTaskForm from './components/new-task-form/new-task-form';
import Footer from './components/footer/footer';
import '../src/index.css'

export default class App extends Component {
  maxId = 100;
  state = {
    label: '',
    todos : []
  }



  onLabelChange = (e) => {
    console.log(e.target.value)
    this.setState({
        label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.addItem(this.state.label)
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

    this.setState({
      label: ''
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
      const newTask = {...oldTask, completed: !oldTask.completed}
      const newArr = [
      ...todos.slice(0,idx), newTask, ...todos.slice(idx+1)
    ]

    return {
      todos: newArr
    }
    })
  }

  

  render() {
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
          onCompleted={this.onCompleted}/>
          <Footer todosCount = {todosCount}/>
        </section>
      </section>
    )
  }
 
}

const container = document.querySelector('body');
const body = createRoot(container)

body.render(<App />)
 