import React from 'react';
import Button from 'react-bootstrap/Button';

function ToDoItems(props) {
    console.log(props.items);
    return (
            <ul>
                {
                     props.items.map((toDoItem,index) => (
                      <li key={toDoItem.id}>
                        <div className="row1">
                        <div className='item-left'>
                          <input type="checkbox" />
                        <h5>{toDoItem.value}</h5>
                        </div>
                        <div>  
                        <Button variant="danger" onClick={() => props.deleteToDo(toDoItem.id)}> Delete </Button>
                        </div>
                        </div>
                        
                      </li>                  
                    ))
                }

            </ul>
            
    );
}

export default ToDoItems;