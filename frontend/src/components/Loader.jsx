import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Loader = ({ onFinish }) => {
    const heroCanvasRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const canvas = heroCanvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d', { alpha: true });
        
        const frameCount = 180;
        const fps = 50; 
        const frameInterval = 1000 / fps;

        const currentFramePath = (index) => {
            const frameNumber = (index + 1).toString().padStart(3, '0');
            return `/images/herosection/ezgif-frame-${frameNumber}.png`;
        };

        const images = [];
        let loadedFrames = 0;

        // Optimized preloading for first 20 frames to ensure smooth start
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFramePath(i);
            img.onload = () => {
                loadedFrames++;
                if (i < 20) setProgress(Math.floor((loadedFrames / 20) * 100));
            };
            images.push(img);
        }

        let currentFrameIndex = 0;
        let lastTime = 0;
        let animationFrameId;
        let isStarted = false;

        const startAnimation = () => {
            if (isStarted) return;
            
            const firstImg = images[0];
            if (firstImg.complete && firstImg.width > 0) {
                // Set internal resolution
                canvas.width = firstImg.width;
                canvas.height = firstImg.height;
                isStarted = true;
                animationFrameId = requestAnimationFrame(updateFrame);
            } else {
                firstImg.onload = () => {
                    canvas.width = firstImg.width;
                    canvas.height = firstImg.height;
                    isStarted = true;
                    animationFrameId = requestAnimationFrame(updateFrame);
                };
            }
        };

        const updateFrame = (time) => {
            if (!lastTime) lastTime = time;
            const deltaTime = time - lastTime;

            if (deltaTime >= frameInterval) {
                const img = images[currentFrameIndex];
                if (img && img.complete && img.width > 0) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(img, 0, 0);
                    
                    // Watermark mask
                    context.fillStyle = '#000000';
                    const maskWidth = canvas.width * 0.18; 
                    const maskHeight = canvas.height * 0.12;
                    context.fillRect(canvas.width - maskWidth, canvas.height - maskHeight, maskWidth, maskHeight);
                    
                    currentFrameIndex++;
                    lastTime = time - (deltaTime % frameInterval);

                    if (currentFrameIndex >= frameCount) {
                        onFinish();
                        return;
                    }
                } else if (img && currentFrameIndex < frameCount) {
                    // If frame isn't ready, skip slightly but stay within bounds
                    // or just wait for it (better for slow connections)
                } else {
                    onFinish();
                    return;
                }
            }
            animationFrameId = requestAnimationFrame(updateFrame);
        };

        // Start when first few frames are ready
        const checkReady = setInterval(() => {
            if (loadedFrames >= 1) {
                startAnimation();
                clearInterval(checkReady);
            }
        }, 100);

        // Resilient safety timeout
        const safetyTimeout = setTimeout(() => {
            console.warn("Loader safety exit");
            onFinish();
        }, 6000);

        return () => {
            clearInterval(checkReady);
            clearTimeout(safetyTimeout);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [onFinish]);

    return (
        <div className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-6">
            <div className="relative w-full max-w-[500px] aspect-[16/9] flex items-center justify-center">
                <canvas 
                    ref={heroCanvasRef} 
                    className="w-full h-full object-contain mix-blend-screen contrast-125 brightness-110"
                ></canvas>
                
                {/* Fallback Progress Text for Mobile */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <div className="w-32 h-[1px] bg-white/10 overflow-hidden rounded-full">
                        <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                            className="w-1/2 h-full bg-red-600"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;

