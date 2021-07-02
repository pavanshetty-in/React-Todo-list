import React, { useState } from 'react';

function Todoform(props) {
    const [input, setInput]= useState('');

    const handleChange =e=>{
        setInput(e.target.value);
    };

    const handleSubmit = e=> {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        });
   setInput('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input className="" 
            placeholder="Add a Todo" 
            type="text" name="text" 
            value={input}
            onChange={handleChange} />
            <button className="add-btn">Add</button>
        </form>
    );
}

export default Todoform;
