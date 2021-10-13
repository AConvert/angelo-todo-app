import React from 'react';
import './TodoEdit.css';

function TodoEdit({ newInput, setNewInput, id, handleEditTodo }) {

    

    return (
        <div className="todoEdit">
            <input 
            type="text"
            className="edit__todoInput"
            value={newInput}
            placeholder="Add new todo..."
            onChange={(e) => setNewInput(() => e.target.value)}
            />
            <button
            type="submit"
            onClick={() => handleEditTodo(id, newInput)}
            className="edit__todoBtn"
            >Edit
            </button>
    </div>
    )
}

export default TodoEdit
