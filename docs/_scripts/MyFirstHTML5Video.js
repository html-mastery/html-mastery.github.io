import React from 'react';

const MyFirstHTML5Video = () => {
    return (
        <div>
            <h1>My First HTML5 Video</h1>
            <video controls style={{ width: '100%' }}>
                <source src="/videos/video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default MyFirstHTML5Video;
