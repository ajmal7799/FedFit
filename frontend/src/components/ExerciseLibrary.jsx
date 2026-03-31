import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExerciseLibrary = ({ onBack }) => {
    const exerciseImages = [
        { id: 1, name: '1st', label: 'Exercise 01' },
        { id: 2, name: '2nd', label: 'Exercise 02' },
        { id: 3, name: '3rd', label: 'Exercise 03' },
        { id: 4, name: '4th', label: 'Exercise 04' },
        { id: 5, name: '5th', label: 'Exercise 05' },
        { id: 6, name: '6th', label: 'Exercise 06' },
        { id: 7, name: '7th', label: 'Exercise 07' },
        { id: 8, name: '8th', label: 'Exercise 08' },
        { id: 9, name: '9th', label: 'Exercise 09' },
        { id: 10, name: '10th', label: 'Exercise 10' },
        { id: 11, name: '11th', label: 'Exercise 11' },
        { id: 12, name: '12th', label: 'Exercise 12' },
        { id: 13, name: '13th', label: 'Exercise 13' },
        { id: 14, name: '14th', label: 'Exercise 14' }
    ];

    const dietImages = [
        { id: 1, name: 'file_000000000bb4720bafa5745ab3c03623', label: 'Fueling Elite Performance' },
        { id: 2, name: 'file_0000000068a8720bba80086069b2606c', label: 'Hypertrophic Nutrition' },
        { id: 3, name: 'file_0000000097a0720bb8a3c29c50b04273', label: 'Optimal Micronutrients' },
        { id: 4, name: 'file_00000000a6c4720bbfe683d661ae371d', label: 'Endurance Sustainability' },
        { id: 5, name: 'file_00000000e07871fa84e0d9315b697206', label: 'Cinematic Cutting Protocol' },
        { id: 6, name: 'file_00000000e69c720b8657ef4c20e590d5', label: 'Macro Precision Strategy' }
    ];

    const [activeTab, setActiveTab] = useState('exercise'); // 'exercise' or 'nutrition'
    const [selectedItem, setSelectedItem] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);

    return (
        <div className="fixed inset-0 z-[200] bg-black overflow-hidden flex flex-col font-['Inter',sans-serif]">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-red-600/5 blur-[120px] rounded-full" />
            
            {/* Header: [Back] [Title] [Tabs/Empty] */}
            <motion.header 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-6 border-b border-white/[0.05] backdrop-blur-md bg-black/40"
            >
                {/* Left: Back to Home */}
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 md:gap-3 text-white/40 hover:text-red-500 transition-all duration-300 group z-50"
                >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-500/10">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <span className="hidden sm:block text-[0.6rem] md:text-[0.7rem] font-black uppercase tracking-[0.2em] whitespace-nowrap">Back</span>
                </button>

                {/* Center: Title */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none px-14 md:px-0">
                    <h1 className="text-white text-[0.75rem] sm:text-xs md:text-lg lg:text-xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-center leading-tight mx-auto max-w-[200px] sm:max-w-none">
                        Exercise Library <span className="text-red-600">&</span> Nutrition Guide
                    </h1>
                </div>

                {/* Right: Tabs (Desktop) or Empty */}
                <div className="hidden md:flex items-center bg-white/5 rounded-full p-1 border border-white/5 z-50">
                    <button 
                        onClick={() => setActiveTab('exercise')}
                        className={`px-6 py-2 rounded-full text-[0.6rem] font-black uppercase tracking-widest transition-all ${activeTab === 'exercise' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-white/40 hover:text-white'}`}
                    >
                        Exercises
                    </button>
                    <button 
                        onClick={() => setActiveTab('nutrition')}
                        className={`px-6 py-2 rounded-full text-[0.6rem] font-black uppercase tracking-widest transition-all ${activeTab === 'nutrition' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-white/40 hover:text-white'}`}
                    >
                        Nutrition
                    </button>
                </div>
                
                {/* Mobile Tab Trigger Placeholder (keep spacing even) */}
                <div className="md:hidden w-9" />
            </motion.header>

            {/* Mobile Tabs */}
            <div className="md:hidden flex px-4 py-3 border-b border-white/5 gap-2 bg-black/60 backdrop-blur-sm z-40">
                <button 
                    onClick={() => setActiveTab('exercise')}
                    className={`flex-1 py-3 rounded-xl text-[0.6rem] font-black uppercase tracking-widest transition-all ${activeTab === 'exercise' ? 'bg-red-600 text-white shadow-md shadow-red-600/10' : 'bg-white/5 text-white/40'}`}
                >
                    Exercises
                </button>
                <button 
                    onClick={() => setActiveTab('nutrition')}
                    className={`flex-1 py-3 rounded-xl text-[0.6rem] font-black uppercase tracking-widest transition-all ${activeTab === 'nutrition' ? 'bg-red-600 text-white shadow-md shadow-red-600/10' : 'bg-white/5 text-white/40'}`}
                >
                    Nutrition
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto px-4 py-8 md:px-20 md:py-16 scroll-smooth custom-scrollbar">
                <AnimatePresence mode="wait">
                    {activeTab === 'exercise' ? (
                        <motion.div 
                            key="exercise-grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-8"
                        >
                            {exerciseImages.map((exercise, idx) => (
                                <motion.div
                                    key={exercise.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.03 }}
                                    onClick={() => {
                                        setSelectedItem({ ...exercise, type: 'exercise' });
                                        setIsZoomed(true);
                                    }}
                                    className="group relative cursor-pointer"
                                >
                                    <div className="aspect-[3/4] sm:aspect-[4/5] bg-[#0d0d0d] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 group-hover:border-red-600/30 transition-all duration-500 shadow-2xl">
                                        <img 
                                            src={`/images/exercise/${exercise.name}.png`}
                                            alt={exercise.label}
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 brightness-[0.8]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                        
                                        {/* Overlay Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex flex-col">
                                                <span className="text-red-500 text-[0.45rem] sm:text-[0.55rem] md:text-[0.6rem] font-bold uppercase tracking-[0.2em] mb-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Dynamic Move</span>
                                                <h3 className="text-white text-[0.6rem] sm:text-[0.7rem] md:text-sm font-black uppercase tracking-widest">{exercise.label}</h3>
                                            </div>
                                        </div>

                                        {/* Zoom Icon */}
                                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Box Glow */}
                                    <div className="absolute -inset-1 bg-red-600/0 group-hover:bg-red-600/10 blur-xl transition-all duration-500 -z-10 rounded-full" />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div 
                            key="nutrition-grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
                        >
                            {dietImages.map((diet, idx) => (
                                <motion.div
                                    key={diet.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => {
                                        setSelectedItem({ ...diet, type: 'diet' });
                                        setIsZoomed(true);
                                    }}
                                    className="group relative cursor-pointer"
                                >
                                    <div className="aspect-[3/4] sm:aspect-[4/5] bg-[#0d0d0d] rounded-xl sm:rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-red-600/30 transition-all duration-500 shadow-2xl">
                                        <img 
                                            src={`/images/diet/${diet.name}.png`}
                                            alt={diet.label}
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 brightness-[0.8]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                        
                                        {/* Overlay Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex flex-col">
                                                <span className="text-red-500 text-[0.45rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.2em] mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Optimal Strategy</span>
                                                <h3 className="text-white text-[0.7rem] sm:text-sm md:text-lg font-black uppercase tracking-tight leading-tight">{diet.label}</h3>
                                            </div>
                                        </div>

                                        {/* Zoom Icon */}
                                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                            <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="absolute -inset-1 bg-red-600/0 group-hover:bg-red-600/10 blur-xl transition-all duration-500 -z-10 rounded-full" />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Global Zoom Modal */}
            <AnimatePresence>
                {isZoomed && selectedItem && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsZoomed(false)}
                        className="fixed inset-0 z-[300] bg-black/90 flex items-center justify-center p-4 sm:p-6 backdrop-blur-2xl cursor-zoom-out overflow-y-auto"
                    >
                        <motion.button 
                            onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                            className="fixed top-4 right-4 sm:top-8 sm:right-8 w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all z-[310]"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center gap-6 md:gap-16 py-10">
                            <motion.div 
                                initial={{ scale: 0.8, rotate: -2, y: 30 }}
                                animate={{ scale: 1, rotate: 0, y: 0 }}
                                exit={{ scale: 0.8, rotate: 2, y: 30 }}
                                transition={{ type: 'spring', damping: 25 }}
                                className="w-full md:w-[55%] flex items-center justify-center"
                            >
                                <img 
                                    src={`/images/${selectedItem.type}/${selectedItem.name}.png`} 
                                    className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain drop-shadow-[0_0_60px_rgba(239,68,68,0.2)] md:drop-shadow-[0_0_100px_rgba(239,68,68,0.3)]"
                                    alt={selectedItem.label}
                                />
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="w-full md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left px-4"
                            >
                                <span className="text-red-500 text-[0.6rem] sm:text-[0.7rem] font-black uppercase tracking-[0.4em] mb-3 md:mb-5">
                                    {selectedItem.type === 'exercise' ? 'Elite Protocol' : 'Nutritional Intelligence'}
                                </span>
                                <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 md:mb-8 leading-tight">{selectedItem.label}</h2>
                                <p className="text-white/50 text-[0.75rem] sm:text-sm md:text-base font-light leading-relaxed mb-8 md:mb-12 max-w-sm">
                                    {selectedItem.type === 'exercise' 
                                        ? 'Strategic movement designed to build explosive power and aesthetic symmetry. Execute with absolute control.'
                                        : 'Scientifically backed nutritional strategy to optimize recovery, performance, and overall metabolic health.'}
                                </p>
                                
                                <div className="grid grid-cols-2 gap-8 md:gap-12 w-full pt-8 md:pt-12 border-t border-white/5">
                                    <div>
                                        <p className="text-white/20 text-[0.55rem] md:text-[0.6rem] font-black uppercase tracking-widest mb-2">Priority</p>
                                        <p className="text-white font-black uppercase text-lg sm:text-xl md:text-2xl tracking-tighter">Elite Rank</p>
                                    </div>
                                    <div>
                                        <p className="text-white/20 text-[0.55rem] md:text-[0.6rem] font-black uppercase tracking-widest mb-2">Focus</p>
                                        <p className="text-white font-black uppercase text-lg sm:text-xl md:text-2xl tracking-tighter">Peak Performance</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


            <style dangerouslySetInnerHTML={{ __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(239, 68, 68, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(239, 68, 68, 0.5);
                }
            `}} />
        </div>
    );
};

export default ExerciseLibrary;
