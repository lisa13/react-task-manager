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
            this.createTasks('Check emails'),
            this.createTasks('Open emails'),
            this.createTasks('Edit emails'),
            this.createTasks('Delet emails')
        ],
        term: ''
    }

    createTasks(text) {
        return {
            label: text,
            important: false,
            done: false,
            _id: this.maxId++
        }
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
        const newItem = this.createTasks(text);

        //add element in array without changing the state
        this.setState(({ taskData }) => {
            const addedArr = [newItem, ...taskData];

            return {
                taskData: addedArr
            }
        });
    }

    toggleProp(arr, _id, propName) {

        const indx = arr.findIndex((el) => el._id === _id);

        const oldState = arr[indx];
        const newState = { ...oldState, [propName]: !oldState[propName] };


        return [
            ...arr.slice(0, indx), newState, ...arr.slice(indx + 1)
        ];
    }

    onToggleDone = (_id) => {
        this.setState(({ taskData }) => {
            return {
                taskData: this.toggleProp(taskData, _id, 'done')
            }
        });
    }

    onToggleImportant = (_id) => {
        this.setState(({ taskData }) => {
            return {
                taskData: this.toggleProp(taskData, _id, 'important')
            }
        });
    }

    search = (items, term) => {
        if (term === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label
            .toLowerCase()
            .indexOf(term.toLowerCase()) > -1;
        });
    }

    onSearch = (term) => {
        this.setState({term})
    }

    render() {

        const { taskData, term } = this.state;

        const visibleItems = this.search(taskData, term);

        const doneItems = taskData.filter((el) => el.done).length;
        const toDo = taskData.length - doneItems;

        return (
            <div className="todo-app">
                <AppHeared toDo={toDo}
                    done={doneItems} />
                <div className="top-panel d-flex">
                    <SearchPannel onSearch={this.onSearch} />
                    <ItemStatusFilter />
                </div>
                <TaskList data={visibleItems}
                    onDelete={this.deleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <AddItemForm onAdd={this.addItem} />

            </div>
        );
    }
};
