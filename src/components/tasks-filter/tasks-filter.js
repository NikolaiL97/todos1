import { toHaveTextContent } from '@testing-library/jest-dom/matchers';
import './tasks-filter.css'
import { Component } from 'react'

export default class TasksFilter extends Component {

  constructor() {
    super()
    this.state = {
      selected: false
    }
    this.onLabelClick = this.onLabelClick.bind(this)
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



