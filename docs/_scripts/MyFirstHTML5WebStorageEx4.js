import React, { useState } from 'react';

const MyFirstHTML5WebStorageEx4 = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [watchId, setWatchId] = useState(null);

  const startTracking = () => {
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (position) => showPosition(position),
        (error) => showError(error)
      );
      setWatchId(id);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const stopTracking = () => {
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
      setLocation(null);
      setError(null);
    }
  };

  const showPosition = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  const showError = (error) => {
    setError(`Error: ${error.message}`);
  };

  return (
    <div>
      <h1>My First Geolocation Example</h1>
      <button onClick={startTracking}>Start Tracking</button>
      <button onClick={stopTracking}>Stop Tracking</button>
      <p>{location ? location : error}</p>
    </div>
  );
};

export default MyFirstHTML5WebStorageEx4;
