import { toHaveTextContent } from '@testing-library/jest-dom/matchers';
import './tasks-filter.css'
import { Component } from 'react'

export default class TasksFilter extends Component {

state = {
  selected: false
}

onLabelClick = () => {
      this.setState(({selected}) => {
        return {selected: !selected}
      })
    }
 

  render() {

    const {selected} = this.state;


    let classNames = ''
    if (selected) {
      classNames += ' selected'
    }

    return (
      <ul className="filters">
        <li>
          <button className={classNames} onClick={this.onLabelClick}>All</button>
        </li>
        <li>
          <button className={classNames} onClick={this.onLabelClick}>Active</button>
        </li>
        <li>
          <button className={classNames} onClick={this.onLabelClick}>Completed</button>
        </li>
      </ul>
    )
  }
}



