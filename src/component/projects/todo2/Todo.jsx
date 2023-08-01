import React from 'react';
// import { FaRegTrashAlt } from 'react-icons/fa';
import './todo.css'

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li className={todo.completed ? 'liComplete' : 'li'}>
            <div className='todoList'>
                <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
                <h3 onClick={() => toggleComplete(todo)} className={todo.completed ? ' texth3 mx-2' : 'mx-2'}>
                    {todo.text}
                </h3>
            </div>
            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteTodo(todo.id)}></i>
            {/* <button onClick={() => deleteTodo(todo.id)}>{<i className="far fa-trash-alt" title="Delete Item" />}</button> */}
        </li>
    );
};

export default Todo;
