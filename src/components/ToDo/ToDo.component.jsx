import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ToDoItems from './ToDoItems.component';

function ToDo() {

    const [item, setItem] = useState('');
    const [todoItems, setTodoItems] =useState([]);
    let id = 0;

    const addItems = () =>{
      if(item == ''){
        alert('To Do Item is Empty');
        return;
      }
      let i = {
        id : id++ ,
        value : item
      }
      setTodoItems([...todoItems,i])
      setItem('');
    }

    const deleteToDo = (item) =>{
      let filteredItems = todoItems.filter(i => i.id != item)
      setTodoItems(filteredItems)
    }

    return (
        //Create input and add button 
        <div>
           <h2><center>React To Do List.</center></h2>
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="search"
              placeholder="Enter To Do Item"
              className="me-2 w-auto"
              aria-label="Search"
              value={item}
              onChange={e => setItem(e.target.value)}
            />
            <Button onClick={addItems} variant="secondary">Add</Button>
          </Form>
        {todoItems.length > 0 ? <ToDoItems  items = {todoItems} deleteToDo={deleteToDo}/> : <p><center>No items added.</center></p>}
        </div>
    );
}

export default ToDo;