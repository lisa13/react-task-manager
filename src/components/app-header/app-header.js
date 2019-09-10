import React from 'react';
import './app-header.css';



const AppHeared = ({ toDo, done }) => {

    return (
        <div>
            <h1 className="app-header">My Task List</h1>
            <p>Incomplete tasks: {toDo}/  <span>Completed: {done}</span></p>
        </div>
    );
}

export default AppHeared;