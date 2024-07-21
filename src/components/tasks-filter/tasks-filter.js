import { toHaveTextContent } from '@testing-library/jest-dom/matchers';
import './tasks-filter.css';
import { Component } from 'react';
import propTypes from 'prop-types';

export default class TasksFilter extends Component {
  static defaultProps = {
    selected: false,
    onFilterClick: () => {},
    label: 'undefined'
  }

  static propTypes = {
    selected: propTypes.bool,
    onFilterClick: propTypes.func,
    label: propTypes.node
  }
  render() {

    const { selected, onFilterClick, label} = this.props;

    let classNames = ''
    if (selected) {
      classNames += ' selected'
    }

    return (
      <li>
        <button className={classNames} onClick={onFilterClick}>{label}</button>
      </li>
    )
  }
}


{/* <li>
<button className={classNames} onClick={this.onLabelClick}>All</button>
</li>
<li>
<button className={classNames} onClick={this.onLabelClick}>Active</button>
</li>
<li>
<button className={classNames} onClick={this.onLabelClick}>Completed</button>
</li> */}


