import React, { useEffect, useRef } from 'react';

const CanvasBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Set canvas dimensions to fill the window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Function to generate random number within a range
        function randomRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        // Function to create a new circle
        function createCircle() {
            const radius = randomRange(1, 5);
            const x = randomRange(radius, canvas.width - radius);
            const y = randomRange(radius, canvas.height - radius);
            const dx = randomRange(-3, 3);
            const dy = randomRange(-3, 3);
            const color = `rgba(${122}, ${122}, ${122}, ${0.5})`;

            return { x, y, dx, dy, radius, color };
        }

        // Function to draw a circle
        function drawCircle(circle) {
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = circle.color;
            ctx.fill();
        }

        // Function to update circle position
        function updateCircle(circle) {
            circle.x += circle.dx;
            circle.y += circle.dy;

            if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
                circle.dx = -circle.dx;
            }

            if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
                circle.dy = -circle.dy;
            }
        }

        // Function to animate
        function animate() {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            circles.forEach(circle => {
                drawCircle(circle);
                updateCircle(circle);
            });
        }

        // Generate initial circles
        const circles = [];
        for (let i = 0; i < 50; i++) {
            circles.push(createCircle());
        }

        // Start animation
        animate();

        // Clean up function to cancel animation frame on component unmount
        return () => cancelAnimationFrame(animationFrameId);

    }, []); // Empty dependency array to run effect only once on component mount

    return <canvas ref={canvasRef} className='fixed top-0 right-0' />;
};

export default CanvasBackground;
