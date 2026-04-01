import React from 'react';
import { motion } from 'framer-motion';

const BeginnerGuide = ({ onBack }) => {
    const sections = [
        {
            id: 'fitness',
            title: 'What is Fitness?',
            icon: '🏋️',
            content: 'Fitness is the ability of your body to stay strong, healthy, and active. It includes physical strength, endurance, flexibility, and overall well-being. Being fit means you can perform daily activities easily without feeling tired and maintain a healthy lifestyle.'
        },
        {
            id: 'gym',  
            title: 'What is a Gym? ',
            icon: '🏢',
            content: 'A gym is a place designed for physical exercise and training. It includes equipment like weights, machines, and cardio tools to help improve strength, stamina, and overall fitness. Gyms also provide a focused environment to achieve your fitness goals.'
        },
        {
            id: 'workout',
            title: 'What is a Workout?',
            icon: '💪',
            content: 'A workout is any form of physical activity or exercise done to improve your health and fitness. It can include weight training, cardio, stretching, or bodyweight exercises. Regular workouts help build muscle, burn fat, and increase energy levels.'
        },
        {
            id: 'diet',
            title: 'What is a Diet?',
            icon: '🥗',
            content: 'A diet is the food and nutrition plan you follow daily. A good diet provides your body with the right nutrients like protein, carbohydrates, fats, vitamins, and minerals. It plays a key role in fat loss, muscle gain, and overall health.'
        },
        {
            id: 'weight-training',
            title: 'What is Weight Training?',
            icon: '🔥',
            content: 'Weight training is a type of exercise where you use weights or resistance to build muscle strength and size. It helps improve metabolism, bone strength, and body shape.'
        },
        {
            id: 'cardio',
            title: 'What is Cardio?',
            icon: '🏃',
            content: 'Cardio (cardiovascular exercise) includes activities like running, cycling, or skipping that increase your heart rate. It helps burn calories, improve heart health, and boost endurance.'
        },
        {
            id: 'flexibility',
            title: 'Flexibility & Mobility',
            icon: '🧘',
            content: 'Flexibility and mobility exercises help your body move freely and easily. They reduce the risk of injury and improve posture and performance.'
        },
        {
            id: 'fat-loss',
            title: 'What is Fat Loss?',
            icon: '⚖️',
            content: 'Fat loss is the process of reducing body fat through a combination of proper diet and exercise. It requires a calorie deficit and consistency.'
        },
        {
            id: 'muscle-gain',
            title: 'What is Muscle Gain?',
            icon: '🍗',
            content: 'Muscle gain (bulking) is the process of building muscle mass through strength training and proper nutrition, especially protein intake.'
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white font-['Outfit',sans-serif] overflow-hidden">
            {/* ── Background Elements ── */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-red-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[35vw] h-[35vw] bg-red-600/5 blur-[100px] rounded-full" />
            </div>

            {/* ── Header ── */}
            <header className="relative z-[50] flex items-center justify-between px-8 py-6 border-b border-white/[0.06] backdrop-blur-md sticky top-0">
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
                        <span className="ml-3 text-[0.6rem] text-white/30 tracking-[0.3em] font-bold">— BEGINNERS GUIDE</span>
                    </div>
                </div>
                <div className="w-24 hidden md:block" /> { /* Spacer for balance */ }
            </header>

            {/* ── Hero section ── */}
            <section className="relative px-8 pt-20 pb-16 max-w-7xl mx-auto border-x border-white/[0.03]">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl"
                >
                    <p className="text-red-600 font-black uppercase tracking-[0.4em] text-[0.75rem] mb-4">Foundation Module 01</p>
                    <h1 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-[0.85] mb-10">
                        <span className="text-white/10 block mb-4 text-3xl md:text-4xl italic font-medium tracking-[0.2em] font-light">FEDFIT</span>
                        BEGINNERS <br /><span className="text-red-600">GUIDE</span>
                    </h1>
                    <p className="text-white/60 text-lg sm:text-xl font-light leading-relaxed tracking-wide italic max-w-2xl border-l-2 border-red-600 pl-6">
                        Fitness is the foundation of a healthy and active lifestyle, combining strength, endurance, flexibility, and overall well-being. This guide breaks down the core concepts to fuel your balanced and effective fitness journey.
                    </p>
                </motion.div>
            </section>

            {/* ── Educational Grid ── */}
            <section className="relative px-8 pb-32 max-w-7xl mx-auto border-x border-white/[0.03]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sections.map((section, index) => (
                        <motion.div 
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-10 bg-[#0d0d0d] border border-white/[0.06] rounded-[2.5rem] hover:border-red-600/40 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 text-4xl opacity-10 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700">
                                {section.icon}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white text-xl font-black uppercase tracking-tight mb-6 flex flex-col">
                                    <span className="text-red-600/60 text-[0.65rem] mb-1 font-bold">Concept 0{index + 1}</span>
                                    {section.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed tracking-wide font-light group-hover:text-white/80 transition-colors">
                                    {section.content}
                                </p>
                            </div>
                            
                            {/* Accent Glow */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600/0 to-transparent group-hover:via-red-600 transition-all duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Footer ── */}

            <footer className="py-20 border-t border-white/[0.05] flex flex-col items-center relative z-20 bg-black">
                <div className="text-xl font-black italic tracking-tighter uppercase mb-4 opacity-20">
                    <span className="text-white">FED</span>
                    <span className="text-white">FIT</span>
                </div>
                <div className="text-white/10 text-[0.5rem] tracking-[0.3em] uppercase">
                    &copy; 2026 FedFit. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default BeginnerGuide;
