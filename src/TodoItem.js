import { Checkbox } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import React, { useState, forwardRef } from 'react';
import TodoEdit from './TodoEdit';
import './TodoItem.css';

const TodoItem = forwardRef(({ editId, completed, active, isEditing, title, completeTodo, id, deleteTodo, handleChange, newInput, setNewInput,  handleEditTodo}, ref) => {
    
        const [display, setDisplay] = useState({display: 'none'});
    
        return (
            <div 
                ref={ref}
                className="todolist"
                onMouseEnter={e => {
                        setDisplay({display: 'block'})
                    }}
                onMouseLeave={e => {
                        setDisplay({display: 'none'})
                    }}
                >
                <Checkbox 
                className="todolist__checkbox"
                onClick={() => completeTodo(id)}
                />
                {!isEditing && editId === id && (   
                    <TodoEdit newInput={newInput} setNewInput={setNewInput} id={id} handleEditTodo={handleEditTodo}/>
                )}

                {completed ? (
                  <h2 className="todolist__content--active">{title}</h2>  
                ) : (
                    <h2 className="todolist__content">{title}</h2>
                )}
                
                <Edit 
                className="todolist__edit"
                style={display}
                onClick={ () => handleChange(id, isEditing)}
                />
                <Delete 
                className="todolist__delete"
                style={display}
                onClick={() => deleteTodo(id)}
                />  
            </div>
    )
})

export default TodoItem
