import React, { Component } from 'react';
import './add-form.css';

export default class AddItemForm extends Component {
    render() {

        return (
            <div className="item-add-form">
                <button className="btn btn-outline-secondary" onClick={() => this.props.onAdd('hello')}>
                    Add Item
                </button>
            </div>
        );
    }
}