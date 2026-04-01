import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickAid = ({ onBack }) => {
    const [zoomedImage, setZoomedImage] = useState(null);
    const aids = [
        {
            id: 1,
            image: '/images/quickaid/file_000000001f0c720b8a40bd8d6284b175.png',
            title: 'Critical Nutrition Guide',
            review: "The Quick Aid guide is a lifesaver. It made complex emergency steps so simple to follow that I feel confident knowing exactly what to do in a crisis."
        },
        {
            id: 2,
            image: '/images/quickaid/file_00000000f854720b9e33c218957342a1.png',
            title: 'Performance Protocol',
            review: "This is the perfect guide for an emergency. It makes learning and remembering CPR extremely clear. I feel ready to help if needed."
        },
        {
            id: 3,
            image: '/images/quickaid/Gemini_Generated_Image_8dg5n68dg5n68dg5.png',
            title: 'Foundational Recovery',
            review: "This quick-reference guide simplified everything for me. It broke down complex first aid procedures into clear, actionable steps that I could easily understand and follow."
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-[#050505] text-white font-['Outfit',sans-serif] overflow-x-hidden">
            {/* ── Header ── */}
            <header className="relative z-[50] flex items-center justify-between px-8 py-6 border-b border-white/[0.06] backdrop-blur-md sticky top-0 bg-black/60">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors uppercase text-[0.7rem] font-black tracking-widest"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </button>
                <div className="flex items-center gap-4">
                    <img src="/images/logo/logo.jpeg" alt="FedFit Logo" className="w-8 h-8 rounded-full border border-red-600/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]" />
                    <div className="text-2xl font-black italic tracking-tighter uppercase flex items-center">
                        <span className="text-white/50">FED</span>
                        <span className="text-red-600">FIT</span>
                        <span className="ml-3 text-[0.6rem] text-white/30 tracking-[0.3em] font-bold">— QUICK AID</span>
                    </div>
                </div>
                <div className="w-24 hidden md:block" />
            </header>

            <main className="max-w-7xl mx-auto px-8 py-20">
                <div className="text-center mb-24">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-600 font-black uppercase tracking-[0.4em] text-[0.65rem] mb-4"
                    >
                        Elite Resource Center
                    </motion.p>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black uppercase tracking-tight flex flex-col items-center gap-2"
                    >
                        <div className="flex italic tracking-tighter">
                            <span className="text-white/20">FED</span>
                            <span className="text-red-600/40">FIT</span>
                        </div>
                        <div>QUICK <span className="text-red-600">AID</span></div>
                    </motion.h1>
                    <p className="mt-8 text-white/40 text-sm max-w-xl mx-auto font-light leading-relaxed tracking-wide">
                        Our specialized resources designed for immediate performance optimization. View our elite protocols and see what our community thinks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {aids.map((aid, index) => (
                        <motion.div
                            key={aid.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col gap-8 group"
                        >
                            <div 
                                onClick={() => setZoomedImage(aid)}
                                className="relative overflow-hidden rounded-[2.5rem] border border-white/10 group-hover:border-red-600/40 transition-all duration-700 shadow-2xl bg-white/[0.03] aspect-[2/3] cursor-zoom-in"
                            >
                                <img 
                                    src={aid.image} 
                                    alt={aid.title} 
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                
                                <div className="absolute bottom-0 inset-x-0 p-8">
                                    <div className="flex justify-between items-center bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/5">
                                        <div className="text-white font-black uppercase tracking-tighter text-lg leading-none">
                                            {aid.title}
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Review Box */}
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.3 }}
                                className="relative p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.04] transition-all duration-300"
                            >
                                <div className="text-red-600 mb-4 opacity-40">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11M5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <p className="text-white/60 text-sm leading-relaxed italic tracking-wide group-hover:text-white/90 transition-colors">
                                    {aid.review}
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="w-1 h-1 bg-red-600 rounded-full" />
                                    <span className="text-red-600 text-[0.6rem] font-bold uppercase tracking-widest">Verified Client</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <footer className="py-20 border-t border-white/[0.05] flex flex-col items-center bg-black">
                <div className="text-xl font-black italic tracking-tighter uppercase mb-4 opacity-20">
                    <span className="text-white">FED</span>
                    <span className="text-white">FIT</span>
                </div>
                <div className="text-white/10 text-[0.5rem] tracking-[0.3em] uppercase">&copy; 2026 FedFit. All Rights Reserved.</div>
            </footer>
            {/* ── Zoom Modal ── */}
            <AnimatePresence>
                {zoomedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setZoomedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-20 backdrop-blur-2xl bg-black/95 cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-7xl max-h-full"
                        >
                            {/* Close Button Inside Modal Area */}
                            <button 
                                onClick={() => setZoomedImage(null)}
                                className="absolute -top-12 -right-4 md:-top-6 md:-right-12 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:text-red-600 transition-all duration-300 z-[110]"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <img 
                                src={zoomedImage.image} 
                                alt={zoomedImage.title} 
                                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_0_100px_rgba(239,68,68,0.2)] border border-white/10"
                            />
                            <div className="mt-8 text-center">
                                <h3 className="text-2xl font-black uppercase tracking-widest text-white">{zoomedImage.title}</h3>
                                <p className="text-white/40 text-xs font-bold uppercase tracking-[0.4em] mt-2 italic px-4">Technical Resource Protocol — Approved 2026</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default QuickAid;
