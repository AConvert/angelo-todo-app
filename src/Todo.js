import TodoItem from './TodoItem';
import React, { useEffect, useState } from 'react';
import './Todo.css';
import Todoform from './Todoform';
import FlipMove from 'react-flip-move';
import { db } from './firebase';
import firebase from 'firebase';

function Todo() {

    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [newInput, setNewInput] = useState('');
    const [editId, setEditId] = useState('');

    useEffect(() => {
        db.collection('todos')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
            setTodos(snapshot.docs.map( doc => (
                {
                    id: doc.id,
                    data: doc.data()
                })
            )))
        ) 
    }, [])


    const onCompleted = (id) => {
        // let completeTodo = [...todos].map( todo => {
        //     if(todo.id === id){
        //         todo.completed = !todo.completed
        //         todo.active = !todo.active
        //     }
        //     return todo
        // })
        // setTodos(completeTodo);

        db.collection('todos')
        .doc(id)
        .set(
            {
            completed: true,
            active: false
        }, { merge: true })
    }

    const onDeleteTodo = (id) => {
        // let newList = todos.map.filter( todo => todo.id !== id);
        // setTodos(newList)
         db.collection('todos').doc(id).delete()
    }
      
        
    

    // We create a function that handle the change and kep track of the id and text editing
    const handleChange = (id, isEditing) => {
        setEditId(id)
        setIsEditing(!isEditing);
    }

    // we have created a function that take as arguments id and text which are element we are taking into account
    // and then we have mapped through the todos array checking if the id matches with the id of the todo that we want to edit
    // and afterwards we have have setg the input key property equal to the new value we will implement in the the todos array.
    const handleEditTodo = (id, input) => {
        // let updateItem = todos.map( todo => {
        //     if(todo.id === id){
        //         todo.input = input.toUpperCase()
        //     }
        //     return todo
        // })
        // setTodos(updateItem);
        // setIsEditing(!isEditing)
            db.collection('todos').doc(id).set({
            input: input.toUpperCase(), 
            id: Math.floor(Math.random() * 1000),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            completed: false,
            active: true
        }, { merge: true })

        setIsEditing(!isEditing);
    }

    return (
        <div className="todo">
            <Todoform 
            inputValue={inputValue}
            setInputValue={setInputValue}
            todos={todos}
            setTodos={setTodos}
            />
            <FlipMove>
            {todos.map(({ id, data: { input, completed, active }}) => (
                <TodoItem
                title={input}
                id={id}
                key={id}
                completed={completed}
                active={active}
                completeTodo={onCompleted}
                deleteTodo={onDeleteTodo}
                isEditing={isEditing}
                handleChange={handleChange}
                newInput={newInput}
                setNewInput={setNewInput}
                handleEditTodo={handleEditTodo}
                editId={editId}
                 />
            ))}
            </FlipMove>
        </div>
    )
}

export default Todo
