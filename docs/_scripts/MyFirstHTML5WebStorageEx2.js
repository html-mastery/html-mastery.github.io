import React, { useState } from 'react';

const MyFirstHTML5WebStorageEx2 = () => {
    const [output, setOutput] = useState('');

    const saveData = () => {
        sessionStorage.setItem('name', 'Jane Doe');
        sessionStorage.setItem('email', 'jane@example.com');
    };

    const retrieveData = () => {
        const name = sessionStorage.getItem('name');
        const email = sessionStorage.getItem('email');
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

export default MyFirstHTML5WebStorageEx2;
