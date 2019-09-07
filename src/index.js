import React from 'react';
import ReactDom from 'react-dom';
import AppHeared from './components/app-header/app-header';
import TaskList from './components/task-list/task-list';
import SearchPannel from './components/search-panel/search-panel';
import './style.css';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';

const el = <h1>Hello world</h1>

ReactDom.render(el, document.getElementById('root'));

const taskData = [
    { label: 'Check emails', important: false, _id: 0 },
    { label: 'Open emails', important: true, _id: 1 },
    { label: 'Delet emails', important: false, _id: 2 },
    { label: 'Edit emails', important: true, _id: 3 }
];

const App = () => {
    return (
        <div className="todo-app">
            <AppHeared  />
            <div className="top-panel d-flex">
                <SearchPannel />
                <ItemStatusFilter />
            </div>
            <TaskList data={taskData} />
        </div>
    );
};



ReactDom.render(<App />, document.getElementById('root'));