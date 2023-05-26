import React from "react";

export default function TodoItem(props) {

    return <div>
        <li >
            <label>
                <input type="checkbox" checked={props.completed} onChange={e => props.toggleTodo(props.id, e.target.checked)} />
                {props.title}
            </label>
            <button onClick={() => { props.deleteTodo(props.id) }} className='btn btn-danger'>Delete</button>
        </li>
    </div>
}
