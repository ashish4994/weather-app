import React from 'react';
import { useState
 } from 'react';
import Login from './Login.component';
function Home() {
    //Home Component
    const [name,setName] = useState('Home Component')
    return (
        <div>
        <Login />
        <h6>This is {name}</h6>
        </div>
    );
}

export default Home;