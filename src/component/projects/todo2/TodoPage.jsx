import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import todo from "../../assets/todo_list.jpg"
import { db } from './firebase';
import {
    query,
    collection,
    onSnapshot,
    updateDoc,
    doc,
    addDoc,
    deleteDoc,
} from 'firebase/firestore';



const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const [currentPage, setCurrentPage] = useState(1)
    const recordePerPage = 4;
    const lastIndex = currentPage * recordePerPage;
    const firstIndex = lastIndex - recordePerPage;
    const records = todos.slice(firstIndex, lastIndex);
    const npage = Math.ceil(todos.length / recordePerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    // Create todo
    const createTodo = async (e) => {
        e.preventDefault(e);
        if (input === '') {
            alert('Please enter a valid todo');
            return;
        }
        await addDoc(collection(db, 'todos'), {
            text: input,
            completed: false,
        });
        setInput('');
    };

    // Read todo from firebase
    useEffect(() => {
        const q = query(collection(db, 'todos'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr = [];
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id });
            });
            setTodos(todosArr);
        });
        return () => unsubscribe();
    }, []);

    // Update todo in firebase
    const toggleComplete = async (todo) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            completed: !todo.completed,
        });
    };

    // Delete todo
    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id));
    };

    return (
        <div className='justify-content-center w-100'>
            <h1 className='heading text-center'>Todo App</h1>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    {todos.length < 1 ? null : (
                        <p>{`You have ${todos.length} todos`}</p>
                    )}

                    {/* {items.length < 1 ? null : (
                        <p >{`You have ${items.length} todos in your list`}</p>
                    )}

                    <div >
                        <label className="m-2">
                            <input
                                type="radio"
                                name="filter"
                                value="all"
                                checked={filter === 'all'}
                                onChange={() => setFilter('all')}
                            />
                            {" "}All
                            ({items.length})
                        </label >
                        <label className="m-2">
                            <input
                                type="radio"
                                name="filter"
                                value="completed"
                                checked={filter === 'completed'}
                                onChange={() => setFilter('completed')}
                            />
                            {" "} Completed
                            ({comp.length})
                        </label>
                        <label className="m-2">
                            <input
                                type="radio"
                                name="filter"
                                value="not-completed"
                                checked={filter === 'not-completed'}
                                onChange={() => setFilter('not-completed')}
                            />
                            {" "} Not Completed
                        </label>
                    </div> */}

                    <form onSubmit={createTodo} className='formToDo'>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            // className={style.input}
                            type='text'
                            placeholder='✍ Add Items...'
                        />
                        <i className="fa fa-plus add-btn" title="Add Item" onClick={createTodo} />
                    </form>

                    <ul className='showItems'>
                        {records.map((todo, index) => (
                            <Todo
                                key={index}
                                todo={todo}
                                toggleComplete={toggleComplete}
                                deleteTodo={deleteTodo}
                            />
                        ))}
                    </ul>

                    <div className='d-flex justify-content-center'>
                        <ul className="pagination m-2">
                            <li className="page-link">
                                <i className="page-link fa-solid fa-backward"
                                    title='Previous'
                                    onClick={prePage} />
                            </li>
                            {
                                numbers.map((n, i) => (
                                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                        <i className="page-link"
                                            onClick={() => changeCPage(n)}> {n} </i>
                                    </li>
                                ))
                            }
                            <li className="page-link">
                                <i className="page-link fa-solid fa-forward"
                                    title='Next'
                                    onClick={nextPage} />
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

}

export default TodoPage