import { Component } from "react";
import Task from "../task/task"
import './task-list.css'

export default class TaskList extends Component {

  state = {
    completed: false
  }



  render() {
    const { todos, onDeleted } = this.props


    const elems = todos.map((item) => {
      const {id, ...itemProps} = item;
      return (
        
          <Task {... itemProps}
          onDeleted ={() => onDeleted(id)}
          key={id}/>

      )
    })
  
    return (
      <ul className="todo-list">
        {elems}
      </ul>
    )
  }
}






{/* <ul className="todo-list">
<li className="completed">
  <div className="view">
    <input className="toggle" type="checkbox"/>
    <label>
      <span className="description">Completed task</span>
      <span className="created">created 17 seconds ago</span>
    </label>
    <button className="icon icon-edit"></button>
    <button className="icon icon-destroy"></button>
  </div>
</li>
<li className="editing">
  <div className="view">
    <input className="toggle" type="checkbox"/>
    <label>
      <span className="description">Editing task</span>
      <span className="created">created 5 minutes ago</span>
    </label>
    <button className="icon icon-edit"></button>
    <button className="icon icon-destroy"></button>
  </div>
  <input type="text" className="edit" value="Editing task"/>
</li>
<li>
  <div className="view">
    <input className="toggle" type="checkbox"/>
    <label>
      <span className="description">Active task</span>
      <span className="created">created 5 minutes ago</span>
    </label>
    <button className="icon icon-edit"></button>
    <button className="icon icon-destroy"></button>
  </div>
</li>
</ul> */}