import { Component } from "react"
import TasksFilter from "../tasks-filter/tasks-filter"
import './footer.css'

export default class Footer extends Component{
  render() {
    const {todosCount} = this.props

    return (
        <footer className="footer">
        <span className="todo-count">{todosCount} items left</span>
        <TasksFilter />
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}