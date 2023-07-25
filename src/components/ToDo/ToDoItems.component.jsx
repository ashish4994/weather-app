import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';

function ToDoItems(props) {
    console.log(props.items);
    return (
        <div className='d-flex justify-content-center p-2'>
            <ul>
                {
                    props.items.map((toDoItem,index) => (
                    <Form className="d-flex justify-content-center P-2">
                      <li key={toDoItem.id}>
                       {toDoItem.value} </li> 
                      <Button onClick={() => props.deleteToDo(toDoItem.id)}> <FontAwesomeIcon icon= {faTrash} /></Button>
                     
                      </Form>
                    ))
                }
            </ul>
            
        </div>
    );
}

export default ToDoItems;