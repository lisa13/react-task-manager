import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },

  ]

  render() {

    const { filter, onFilter } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const classN = isActive? 'btn-info': 'btn-outline-secondary';
      return (
        <button type="button" className={`btn ${classN} `} 
        key={name}
        onClick={() => onFilter(name)}
        >{label}</button>
      );
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }
};

