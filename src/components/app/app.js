import React, { Component } from 'react';
import AppHeared from '../app-header';
import TaskList from '../task-list';
import SearchPannel from '../search-panel';
import '../../style.css';
import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form'


export default class App extends Component {
    maxId = 100;

    //never change the state, rather create a new mem space for the new one 
    state = {
        taskData: [
            { label: 'Check emails', important: false, _id: 0 },
            { label: 'Open emails', important: true, _id: 1 },
            { label: 'Delet emails', important: false, _id: 2 },
            { label: 'Edit emails', important: true, _id: 3 }
        ]
    }

    deleteItem = (_id) => {
        this.setState(({ taskData }) => {
            const indx = taskData.findIndex((el) => el._id === _id);

            const concatArr = [...taskData.slice(0, indx), ...taskData.slice(indx + 1)];
            return {
                taskData: concatArr
            }

        });
    }

    
    addItem = (text) => {

        // generate id
        const newItem = {
            label: text,
            important: false,
            _id: this.maxId++
        };

        //add element in array without changing the state
        this.setState(({taskData}) => {
            const addedArr = [newItem, ...taskData];

            return {
                taskData: addedArr
            }
        });

    }


    render() {
        return (
            <div className="todo-app">
                <AppHeared />
                <div className="top-panel d-flex">
                    <SearchPannel />
                    <ItemStatusFilter />
                </div>
                <TaskList data={this.state.taskData}
                    onDelete={this.deleteItem} />
                <AddItemForm onAdd={this.addItem} />

            </div>
        );
    }
};
