import { Component } from 'react'
import './new-task-form.css'

export default class NewTaskForm extends Component {

    render() {
        const {onLabelChange, onSubmit, val} = this.props

        return (
            <form onSubmit={onSubmit}>
                <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={onLabelChange} value={val}/>
            </form>

        )
    }

}
