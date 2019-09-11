import React, { Component } from 'react';
import './task-list-item.css'



export default class ListItem extends Component {

  render() {
    const { label, onDelete, onToggleImportant, onToggleDone, done, important } = this.props;
    //const style = { color: important ? 'tomato' : 'grey' };


    let className = 'todo-list-item'
    if (done) {
      className += ' done';
    }

    if (important) {
      className += ' important';
    }


    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right" onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right" onClick={onDelete}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }


}

