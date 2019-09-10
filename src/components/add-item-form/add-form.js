import React, { Component } from 'react';
import './add-form.css';

export default class AddItemForm extends Component {

    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({ label: e.target.value });
    };


    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({label: ''});
    }


    render() {

        return (
            <div className="form-container" >

                <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                 
                        <input className="form-control"
                         type="text" placeholder="Add New Task"
                          onChange={this.onLabelChange}
                          value={this.state.label} />
                    
                        <button className="btn btn-outline-secondary">Add Item</button>
                </form>
            </div>
        );
    }
}