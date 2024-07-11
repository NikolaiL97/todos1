import { Component } from 'react';
import { createRoot } from 'react-dom/client';
import TaskList from './components/task-list/task-list';
import NewTaskForm from './components/new-task-form/new-task-form';
import Footer from './components/footer/footer';
import '../src/index.css'

export default class App extends Component {

  state = {
    todos : [
          { label: 'Eating', id: 1},
          { label: 'Srating', id: 2}
    ]
  }

  deleteItem = (id) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex((el) => el.id === id)


      const newArr = [
        ...todos.slice(0,idx), ...todos.slice(idx+1)
      ]

      return {
        todos: newArr
      }
    })
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />  
        </header>
        <section className="main">
          <TaskList todos = {this.state.todos}
          onDeleted={this.deleteItem}/>
          <Footer />
        </section>
      </section>
    )
  }
 
}

const container = document.querySelector('body');
const body = createRoot(container)

body.render(<App />)
 