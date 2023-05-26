import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    return (
        <div>
            <ul className='list'>
                {props.todos.length === 0 && 'Not Todos'}
                {props.todos.map(todo => {
                    return (
                        <TodoItem {...todo} key={todo.id} toggleTodo={props.toggleTodo} deleteTodo={props.deleteTodo} />
                    )
                })}
            </ul>
        </div>
    )
}
