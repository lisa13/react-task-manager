import React from 'react';
import './task-list-item.css'


const ListItem = ({ label, important = false}) => {

    const style = { color: important ? 'tomato' : 'grey' };
    return (
        <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
    );
}

export default ListItem;