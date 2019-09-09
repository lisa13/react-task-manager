import React, { Component } from 'react';
import './task-list-item.css'



export default class ListItem extends Component {
  state = {
    done: false,
    important: false
  }

  markDone = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    })
  };

  markImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    })
  }

  render() {
    const { label, onDelete } = this.props;
    const { done, important = false } = this.state;
    //const style = { color: important ? 'tomato' : 'grey' };


    let className = 'todo-list-item'
    if (done) {
      className += ' done';
    }

    if (important) {
      className += important;
    }


    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          onClick={this.markDone}>
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right" onClick={this.markImportant}>
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

