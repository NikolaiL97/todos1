import { Component } from 'react'
import './task.css'

export default class Task extends Component {

    render() {
        const {label, onDeleted, onCompleted, completed, oldId} = this.props

        let checkedIn = false
        let classNames = ''
        let styleLi = {display: 'block'}

        const changeFn = (e) => {
            if (e.target.checked){
                {onCompleted()}
            } else{
                {onCompleted()}
            } 
        }
        
        if (oldId === 1) {
            styleLi = {display: 'block'}
        } else if (oldId === 2 && completed) {
            styleLi = {display: 'none'}
        } else if (oldId === 3 && !completed) {
            styleLi = {display: 'none'}
        };

        if (completed) {
          classNames += ' completed';
            checkedIn = true
        }

    return (
        <li className={classNames} style={styleLi}>
        <div className="view">
            <input onChange={changeFn} className="toggle" type="checkbox" checked={checkedIn}/>
            <label onClick={onCompleted}>
                <span className='description' >{label}</span>
                <span className="created">Created 17 seconds ago</span>
            </label >
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




