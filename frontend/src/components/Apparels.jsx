import React from 'react';
import { motion } from 'framer-motion';

const Apparels = ({ onBack }) => {
    return (
        <div className="relative w-full min-h-screen bg-[#050505] text-white font-['Outfit',sans-serif] overflow-x-hidden flex flex-col">
            {/* Header */}
            <header className="relative z-[50] flex items-center justify-between px-8 py-6 backdrop-blur-md sticky top-0 bg-black/50 border-b border-white/[0.04]">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors uppercase text-[0.7rem] font-black tracking-widest"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
                <div className="text-base font-black tracking-tight uppercase">
                    <span className="text-red-600">Fed</span>Fit <span className="text-white/30">— Apparels</span>
                </div>
                <div className="w-20 hidden md:block" />
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative z-10">
                {/* Ambient Glow */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-red-600/5 blur-[150px] rounded-full" />
                </div>

                {/* Title */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-[0.6rem] font-black uppercase tracking-[0.5em] mb-4"
                >
                    Official Merchandise
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-16 text-center leading-none"
                >
                    FedFit <span className="text-red-600">Apparels</span>
                </motion.h1>

                {/* Product Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="relative max-w-lg w-full mb-16"
                >
                    <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(239,68,68,0.08)]">
                        <img
                            src="/images/apparel/file_0000000073987208a26105bbccced4fb.png"
                            alt="FedFit Apparel Preview"
                            className="w-full object-contain"
                        />
                        {/* Coming Soon Overlay */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                                    <svg className="w-7 h-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-white drop-shadow-lg">
                                    Coming <span className="text-red-600">Soon</span>
                                </h2>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-white/20 text-[0.55rem] uppercase tracking-[0.6em] font-black text-center"
                >
                    Performance Wear · Engineered for Champions
                </motion.p>
            </main>
        </div>
    );
};

export default Apparels;
