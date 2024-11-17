import React from 'react';

const MyFirstHTML5Audio = () => {
    return (
        <div>
            <h1>My First HTML5 Audio</h1>
            <audio controls>
                <source src="/audio/audio.mp3" type="audio/mp3" />
                Your browser does not support the audio tag.
            </audio>
        </div>
    );
};

export default MyFirstHTML5Audio;
