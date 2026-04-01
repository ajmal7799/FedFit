import { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const isMobile = () => window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent);

const Loader = ({ onFinish }) => {
    const heroCanvasRef = useRef(null);
    const [isReady, setIsReady] = useState(false);

    const handleFinish = useCallback(() => {
        onFinish();
    }, [onFinish]);

    useEffect(() => {
        const canvas = heroCanvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d', { alpha: true });

        const mobile = isMobile();
        const frameCount = 180;
        const fps = mobile ? 24 : 50; // ✅ Lower FPS on mobile
        const frameInterval = 1000 / fps;

        // ✅ On mobile, skip every other frame to halve memory usage
        const frameStep = mobile ? 2 : 1;
        const effectiveFrames = Math.ceil(frameCount / frameStep);

        const currentFramePath = (index) => {
            const frameNumber = (index + 1).toString().padStart(3, '0');
            return `/images/herosection/ezgif-frame-${frameNumber}.png`;
        };

        const images = new Array(frameCount).fill(null);
        let loadedCount = 0;
        let animationFrameId;
        let currentFrameIndex = 0;
        let lastTime = 0;
        let started = false;

        // ✅ Lazy load: only preload first 10 frames, then load on-demand
        const PRELOAD_COUNT = mobile ? 5 : 15;

        const loadFrame = (i) => {
            if (images[i]) return;
            const img = new Image();
            img.src = currentFramePath(i);
            img.onload = () => {
                images[i] = img;
                loadedCount++;
                if (loadedCount === 1) {
                    // Set canvas size from first frame
                    canvas.width = img.width;
                    canvas.height = img.height;
                    setIsReady(true);
                    startAnimation();
                }
                // ✅ Progressively load ahead as animation runs
                const nextBatch = i + PRELOAD_COUNT;
                if (nextBatch < frameCount) loadFrame(nextBatch);
            };
            img.onerror = () => {
                images[i] = 'error';
            };
            images[i] = img;
        };

        // ✅ Only preload initial batch
        for (let i = 0; i < PRELOAD_COUNT && i < frameCount; i += frameStep) {
            loadFrame(i);
        }

        const startAnimation = () => {
            if (started) return;
            started = true;
            animationFrameId = requestAnimationFrame(updateFrame);
        };

        const updateFrame = (time) => {
            if (!lastTime) lastTime = time;
            const deltaTime = time - lastTime;

            if (deltaTime >= frameInterval) {
                const realIndex = currentFrameIndex * frameStep;

                if (realIndex >= frameCount) {
                    handleFinish();
                    return;
                }

                const img = images[realIndex];

                if (img && img !== 'error' && img.complete && img.width > 0) {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    context.drawImage(img, 0, 0);

                    // Watermark mask
                    context.fillStyle = '#000000';
                    const maskWidth = canvas.width * 0.18;
                    const maskHeight = canvas.height * 0.12;
                    context.fillRect(
                        canvas.width - maskWidth,
                        canvas.height - maskHeight,
                        maskWidth,
                        maskHeight
                    );

                    // ✅ Preload upcoming frame
                    const upcoming = (currentFrameIndex + PRELOAD_COUNT) * frameStep;
                    if (upcoming < frameCount) loadFrame(upcoming);

                    currentFrameIndex++;
                    lastTime = time - (deltaTime % frameInterval);
                } else if (img === 'error') {
                    // Skip broken frame
                    currentFrameIndex++;
                }
                // else: frame not ready yet — wait this tick
            }

            animationFrameId = requestAnimationFrame(updateFrame);
        };

        // ✅ Shorter safety timeout on mobile (they're slower)
        const safetyTimeout = setTimeout(() => {
            console.warn('Loader safety exit');
            handleFinish();
        }, mobile ? 8000 : 6000);

        return () => {
            clearTimeout(safetyTimeout);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, [handleFinish]);

    return (
        <div className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-6">
            <div className="relative w-full max-w-[500px] aspect-[16/9] flex items-center justify-center">
                <canvas
                    ref={heroCanvasRef}
                    className="w-full h-full object-contain mix-blend-screen contrast-125 brightness-110"
                />
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