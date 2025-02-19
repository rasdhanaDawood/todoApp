import React, { useState } from 'react'
import "./TodoApp.css"

export function TodoApp() {
    const [input, setInput] = useState("")
    const [items, setItems] = useState([])
    
    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const storeItems = event => {
        event.preventDefault();
        setItems([...items, input])
        setInput("")
    }

    const deleteItem = key => {     
        setItems(items.filter((data, index) => index !== key))
    }

    return (
        <div className='todo-container'>
            <form className='input-section' onSubmit={storeItems}>
                <h1>Todo App</h1>
                <input type='text' value={input} onChange={handleChange} placeholder='Enter items...' />
            </form>
            <ul>
                {items.map((data, index) => (
                    <li key={index}>{data}<i className="fa-regular fa-trash-can" onClick={() => deleteItem(index)}></i></li>
                ))}
               
            </ul>
        </div>
    )
  
}
export default TodoApp;