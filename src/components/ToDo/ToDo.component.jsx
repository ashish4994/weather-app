import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ToDoItems from './ToDoItems.component';
import './to-do.css';
import {AiOutlinePlus} from 'react-icons/ai';

function ToDo() {

    const [item, setItem] = useState('');
    const [todoItems, setTodoItems] =useState([]);
    const [id,setId] = useState(1);

    const addItems = (e) =>{
      e.preventDefault();
      if(item == ''){
        alert('To Do Item is Empty');
        return;
      }
      let i = {
        id : id,
        value : item
      }
      setTodoItems([...todoItems,i])
      setItem('');
      setId(id+1);

    }

    const deleteToDo = (item) =>{
      let filteredItems = todoItems.filter(i => i.id != item)
      setTodoItems(filteredItems)
    }

    return (
        //Create input and add button 
        <div className='content'>
          <div className='main'>
           <h2>React To Do List</h2>
          <Form onSubmit={addItems} className="form">
            <Form.Control
              type="search"
              placeholder="Enter To Do Item"
              className="me-2"
              aria-label="Search"
              value={item}
              onChange={e => setItem(e.target.value)}
            />
            <button type="submit" className='plus-button'><AiOutlinePlus /></button>
          </Form>
        {todoItems.length > 0 && <ToDoItems  items = {todoItems} deleteToDo={deleteToDo}/>}
        {todoItems.length > 0 && <p className='todo-count'> You have {todoItems.length} todos.</p>}
        </div>
        </div>
    );
}

export default ToDo;