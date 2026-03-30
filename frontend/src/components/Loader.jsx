import { useEffect, useRef } from 'react';

const Loader = ({ onFinish }) => {
    const heroCanvasRef = useRef(null);

    useEffect(() => {
        const canvas = heroCanvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d');
        
        const frameCount = 180;
        const fps = 55; 
        const frameInterval = 1000 / fps;

        const currentFramePath = (index) => {
            const frameNumber = (index + 1).toString().padStart(3, '0');
            return `/images/herosection/ezgif-frame-${frameNumber}.png`;
        };

        const images = [];
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFramePath(i);
            images.push(img);
        }

        let currentFrameIndex = 0;
        let lastTime = 0;
        let animationFrameId;

        const startLoader = () => {
            if (images[0].complete && images[0].width > 0) {
                canvas.width = images[0].width;
                canvas.height = images[0].height;
                animationFrameId = requestAnimationFrame(updateFrame);
            } else {
                images[0].onload = () => {
                    canvas.width = images[0].width;
                    canvas.height = images[0].height;
                    animationFrameId = requestAnimationFrame(updateFrame);
                };
            }
        };

        startLoader();

        const updateFrame = (time) => {
            if (!lastTime) lastTime = time;
            const deltaTime = time - lastTime;

            if (deltaTime >= frameInterval) {
                if (images[currentFrameIndex].complete) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(images[currentFrameIndex], 0, 0);
                    
                    context.fillStyle = '#000000';
                    const maskWidth = canvas.width * 0.15; 
                    const maskHeight = canvas.height * 0.10;
                    context.fillRect(canvas.width - maskWidth, canvas.height - maskHeight, maskWidth, maskHeight);
                    
                    currentFrameIndex++;
                    lastTime = time - (deltaTime % frameInterval);

                    if (currentFrameIndex >= frameCount) {
                        onFinish();
                        return;
                    }
                }
            }
            animationFrameId = requestAnimationFrame(updateFrame);
        };

        // Hard timeout to ensure home page shows even if an image error occurs
        const safetyTimeout = setTimeout(() => {
            console.warn("Loader safety timeout reached");
            onFinish();
        }, 8000);

        return () => {
            clearTimeout(safetyTimeout);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [onFinish]);

    return (
        <div className="loader bg-transparent flex items-center justify-center">
            <canvas 
                ref={heroCanvasRef} 
                id="hero-canvas"
                className="mix-blend-screen contrast-125 brightness-110"
            ></canvas>
        </div>
    );
};

export default Loader;
