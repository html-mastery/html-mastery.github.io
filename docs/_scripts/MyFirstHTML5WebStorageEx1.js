import React, { useState } from 'react';

const MyFirstHTML5WebStorageEx1 = () => {
    const [output, setOutput] = useState('');

    const saveData = () => {
        localStorage.setItem('name', 'John Doe');
        localStorage.setItem('email', 'john@example.com');
    };

    const retrieveData = () => {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        setOutput(`Name: ${name}, Email: ${email}`);
    };

    return (
        <div>
            <h1>My First Web Storage Example</h1>
            <button onClick={saveData}>Save Data</button>
            <button onClick={retrieveData}>Retrieve Data</button>
            <p>{output}</p>
        </div>
    );
};

export default MyFirstHTML5WebStorageEx1;
