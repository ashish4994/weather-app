import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import './../common/styles.css'

function ToDoItems(props) {
    console.log(props.items);
    return (
            <ul>
                {
                    props.items.map((toDoItem,index) => (
                      <li key={toDoItem.id}>
                        <div className = "d-flex justify-content-center p-2">
                        <div className = "todo-content"><h6>{toDoItem.value}</h6></div>  
                        <Button className = "todo-content" onClick={() => props.deleteToDo(toDoItem.id)}> Edit </Button>                   
                        <Button onClick={() => props.deleteToDo(toDoItem.id)}> Delete </Button>
                        </div>  
                      </li>                  
                    ))
                }
            </ul>
            
    );
}

export default ToDoItems;