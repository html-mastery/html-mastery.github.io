import React, { useEffect } from 'react';

const MyFirstHTML5Canvas = () => {
    useEffect(() => {
        const canvas = document.getElementById('myCanvas');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'lightblue';
            ctx.fillRect(0, 0, 200, 100);
            ctx.fillStyle = 'black';
            ctx.font = '20px Arial';
            ctx.fillText('Hello Canvas', 50, 50);
        }
    }, []);

    return (
        <div>
            <h1>My First HTML5 Canvas</h1>
            <canvas id="myCanvas" width="200" height="100"></canvas>
        </div>
    );
};

export default MyFirstHTML5Canvas;
