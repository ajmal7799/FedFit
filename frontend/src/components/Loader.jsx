import { motion } from 'framer-motion';

const Loader = ({ onFinish }) => {
    return (
        <div className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center p-6">
            <div className="relative w-full max-w-[500px] aspect-[16/9] flex items-center justify-center">

                <video
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    onEnded={onFinish}
                    onError={onFinish}
                    className="w-full h-full object-contain contrast-125 brightness-110"
                >
                    <source src="/images/herosection/loader.mp4" type="video/mp4" />
                </video>

                {/* Red loading bar */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
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