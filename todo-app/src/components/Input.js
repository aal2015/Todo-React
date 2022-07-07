import React, { useState } from 'react';
import './Input.css';

function Input(props) {
    const [enteredInput, setEnteredInput] = useState('');

    const inputChangeHandler = (event) => {
        setEnteredInput(event.target.value);
    };

    const submitHandler = event => {
        event.preventDefault();
        props.onSaveTodo(enteredInput);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='grid-container'>
                <input type='text'
                    onChange={inputChangeHandler} 
                    value={enteredInput} 
                    placeholder='Add Todo' 
                /> 
                <button type="submit">Add</button>
            </div>
        </form>
    );
}

export default Input;