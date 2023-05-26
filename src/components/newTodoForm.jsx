import React, { useState } from "react";

export default function newTodoForm(props) {
    const [newItem, setnewItem] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (newItem === '') return
        props.addTodo(newItem)
        setnewItem('')
    }

    return <div>
        <form onSubmit={handleOnSubmit} className='new-item-form'>
            <div className='form-row'>
                {/* <label htmlFor="item">New Item</label> */}
                <br />
                <input onChange={(e) => { setnewItem(e.target.value) }} type="text" id='item' />
                <br />
                <button className='btn'>Add</button>
            </div>
        </form>
    </div>;
}
