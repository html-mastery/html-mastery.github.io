import React, { useState } from 'react';

const MyFirstHTML5WebStorageEx3 = () => {
    const [output, setOutput] = useState('');

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            setOutput('Geolocation is not supported by this browser.');
        }
    };

    const showPosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setOutput(`Latitude: ${latitude}, Longitude: ${longitude}`);
    };

    const showError = (error) => {
        setOutput(`Error: ${error.message}`);
    };

    return (
        <div>
            <h1>My First Geolocation Example</h1>
            <button onClick={getLocation}>Get Location</button>
            <p>{output}</p>
        </div>
    );
};

export default MyFirstHTML5WebStorageEx3;
