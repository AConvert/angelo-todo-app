import React from 'react';
import './Todoform.css';
import { db } from './firebase';
import firebase from 'firebase';

function Todoform({ inputValue, setInputValue }) {

    const addTodo = (e) => {
        e.preventDefault();
        if(inputValue === ""){
            alert("Add a todo...")
        } else {
            db.collection('todos')
            .add({
                input: inputValue.toUpperCase(), 
                id: Math.floor(Math.random() * 1000),
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                completed: false,
                active: true
            })
        }
        setInputValue('');
    }

    return (
    <div className="todoHeader">
        <form className="todoHeader__form">
        <input 
        className="todoHeader__input" 
        type="text"
        placeholder="Create a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(() => e.target.value)}
        />
        <button className="todoHeader__submit" type="submit"  onClick={addTodo}> + </button>
        </form>
    </div>
    )
}

export default Todoform
