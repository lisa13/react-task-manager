import React from 'react';
import ListItem from '../task-list-item/task-list-item';
import './task-list.css';

const TaskList = ({ data }) => {
    const items = data.map((item) => {

        const {_id, ...itemProps } = item;
        return (
            <li className="list-group-item" key={_id}>
                <ListItem { ...itemProps} />
            </li>
        );
    });

    return (
        <ul className="list-group task-list">
            {items}
        </ul>
    );
};

export default TaskList;