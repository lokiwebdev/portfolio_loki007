import React, { useState } from 'react';
import todo from "../../assets/todo_list.jpg"
import "./todo.css"

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [comp, setComp] = useState([]);
    const [filter, setFilter] = useState('all');

    const addItem = (text) => {
        const newItems = [...items, { text, completed: false }];
        setItems(newItems);
    };

    const deleteItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
        // console.log(items)
    };


    const toggleCompleted = (index) => {
        const newItems = [...items];
        newItems[index].completed = !newItems[index].completed;
        setItems(newItems);
    };

    const filteredItems = items.filter((item) => {
        if (filter === 'completed') {
            return item.completed
            // &&
            // const comp = item.completed.length
            // setComp(item.completed);
        } else if (filter === 'not-completed') {
            return !item.completed;
        } else {
            return true;
        }
    });

    return (
        <div >
            <h1 className="heading text-center">Todo List</h1>

            <div className="main-div ">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    {items.length < 1 ? null : (
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
                            {/* ({comp.length}) */}
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
                    </div>

                    <form className="addItems"
                        onSubmit={(event) => {
                            event.preventDefault();
                            addItem(event.target.elements.text.value);
                            event.target.reset();
                        }}
                    >
                        <input type="text" name="text" placeholder="✍ Add Items..." required />
                        <i className="fa fa-plus add-btn" title="Add Item" type="submit" />
                        {/* <button className='btn m-2' type="submit">Add</button> */}
                    </form>

                    <ul className='showItems'>
                        {filteredItems.map((item, index) => {

                            return (
                                <div className={item.completed ? 'eachItem' : 'eachItem2'} key={index}>
                                    <input onChange={() => toggleCompleted(index)} type='checkbox' checked={item.completed ? 'checked' : ''} />

                                    <h3
                                        style={{
                                            textDecoration: item.completed ? 'line-through' : 'none',
                                            color: item.completed ? 'black' : 'white',
                                            // paddingLeft: '1rem'
                                        }}
                                        onClick={() => toggleCompleted(index)}
                                    >
                                        {item.text}
                                    </h3>
                                    <div className="todo-btn">
                                        <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(index)}></i>
                                    </div>
                                </div>
                            )

                        })}
                    </ul>
                    {/* {filteredItems.length < 1 ? null : (
                        <p >{`You have ${filteredItems.length} todos in your list`}</p>
                    )} */}

                </div>
            </div>
        </div>
    );
};

export default TodoList;
