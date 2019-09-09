import React from 'react';
import ListItem from '../task-list-item';
import './task-list.css';


const TaskList = ({ data, onDelete }) => {
    console.log(data)
    const items = data.map((item) => {

        const { _id, ...itemProps } = item;
        return (
            <li className="list-group-item" key={_id}>
                <ListItem {...itemProps}
                    onDelete={() => onDelete(_id)} />
            </li>
        );
    });

    return (

        <div>
            <ul className="list-group task-list">
                {items}
            </ul>
        </div>
    );
};

export default TaskList;