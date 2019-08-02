import React from 'react';

const ToDoList = ({ todoItems }) => {
    return(<div>
        <ul>
            {todoItems.map((todoItem) => {
                return <li key={todoItem.id} >{todoItem.name}</li>
            })}
        </ul>
    </div>)
}

export default ToDoList;