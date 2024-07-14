import { Component } from 'react'
import './task.css'

export default class Task extends Component {

    render() {
        const {label, onDeleted, onCompleted, completed} = this.props

        
        const InputChecked = () =>{
            return <input className="toggle" type="checkbox" checked readOnly/> 
        } 
        const InputNoChecked = () =>{
            <input className="toggle" type="checkbox" readOnly/> 
        } 

        let InputCheck = () => {
            if (completed) {
                return <InputChecked />
            } 
            return <InputNoChecked />
        } 

        let classNames = ''

        if (completed) {
          classNames += ' completed';

        }

    return (
        <li  onClick={onCompleted} className={classNames}>
        <div className="view">
            <InputCheck />
            {/* <input className="toggle" type="checkbox" checked/> */}
            <label>
                <span className='description' >{label}</span>
                <span className="created">Created 17 seconds ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button
                className="icon icon-destroy"
                onClick={onDeleted}
            ></button>
        </div>
        </li>
        )
    }
}




