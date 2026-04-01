import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
    { label: 'EREPS Certified', icon: '🎓' },
    { label: 'NCVET Certification', icon: '📜' },
    { label: 'FSSA Certified Trainer', icon: '🏋️' },
    { label: 'CPR & AED Certified', icon: '❤️' },
    { label: 'B.Tech Electronics', icon: '⚡' },
    { label: '4+ Years Experience', icon: '🔥' },
];



const AboutUs = ({ onBack }) => {
    return (
        <div className="relative w-full min-h-screen bg-[#050505] text-white font-['Outfit',sans-serif] overflow-x-hidden">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-red-600/5 blur-[180px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-600/8 blur-[180px] rounded-full" />
            </div>

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
                <div className="flex items-center gap-4">
                    <img src="/images/logo/logo.jpeg" alt="FedFit Logo" className="w-8 h-8 rounded-full border border-red-600/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]" />
                    <div className="text-xl font-black italic tracking-tighter uppercase whitespace-nowrap flex items-center">
                        <span className="text-white/50">FED</span>
                        <span className="text-red-600">FIT</span>
                        <span className="ml-3 text-[0.6rem] text-white/30 tracking-[0.3em] font-bold">— ABOUT</span>
                    </div>
                </div>
                <div className="w-20 hidden md:block" />
            </header>

            <main className="relative z-10 max-w-6xl mx-auto px-6 py-20">

                {/* ── Section Label ── */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-600 text-[0.6rem] font-black uppercase tracking-[0.5em] mb-4"
                >
                    The Force Behind FedFit
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="text-center text-5xl md:text-8xl font-black uppercase tracking-tight mb-24 leading-none flex flex-col items-center gap-2"
                >
                    <div className="text-white/10 text-2xl md:text-4xl italic font-light tracking-[0.2em] mb-4 font-light">FEDFIT</div>
                    ABOUT <span className="text-red-600">US</span>
                </motion.h1>

                {/* ═══════════════════════════════
                    FOUNDER SECTION
                ═══════════════════════════════ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32 items-center">
                    {/* Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-72 md:w-96">
                            {/* Glow ring */}
                            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-red-600/20 to-transparent blur-[40px]" />
                            <div className="relative rounded-[3rem] overflow-hidden border border-white/10">
                                <img
                                    src="/images/personal/trainer.jpeg"
                                    alt="Fahad NP – FedFit Founder"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay badge */}
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8">
                                    <p className="text-white font-black text-2xl uppercase tracking-tight leading-tight">Fahad NP</p>
                                    <p className="text-red-500 text-[0.6rem] font-bold uppercase tracking-widest mt-1">Founder · FedFit</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="text-red-600 text-[0.6rem] font-black uppercase tracking-[0.4em] mb-3">Coach Profile</p>
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-1">Fahad NP</h2>
                        <p className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-8">
                            Certified Personal Coach &nbsp;|&nbsp; Founder of FedFit &nbsp;|&nbsp; Electronics Engineer
                        </p>
                        <p className="text-white/65 text-sm leading-[1.9] mb-6">
                            I am Fahad N P, a dedicated and results-driven fitness trainer with over 5 years of hands-on experience in transforming lives through structured training and smart nutrition strategies. With a strong passion for fitness and a deep understanding of the human body, I help individuals achieve their goals—whether it's fat loss, muscle gain, or overall health improvement.
                        </p>
                        <p className="text-white/65 text-sm leading-[1.9] mb-6">
                            I hold multiple recognized certifications, including EREPS, NCVET certification, and I am a Certified Personal Trainer by FSSA Council, ensuring professional and scientifically backed coaching methods. I am also certified in CPR &amp; AED, which allows me to prioritize client safety during every training session.
                        </p>
                        <p className="text-white/65 text-sm leading-[1.9] mb-6">
                            In addition to my fitness expertise, I am a B.Tech graduate in Electronics Engineering, which helps me bring a disciplined, analytical, and result-oriented approach to my coaching style. My training programs are designed to be practical, effective, and sustainable for long-term results.
                        </p>
                        <p className="text-white/65 text-sm leading-[1.9] border-l-2 border-red-600 pl-4 italic">
                            "I believe that fitness is not just about working out—it's a lifestyle. My mission is to guide, motivate, and support every client in becoming the best version of themselves."
                        </p>
                    </motion.div>
                </div>

                {/* ── Certifications Grid ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <p className="text-red-600 text-[0.6rem] font-black uppercase tracking-[0.5em] mb-2 text-center">Credentials</p>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-center mb-12">Certified &amp; Qualified</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-red-600/30 hover:bg-white/[0.04] transition-all duration-300 text-center"
                            >
                                <span className="text-3xl mb-3">{cert.icon}</span>
                                <span className="text-white/70 text-[0.6rem] font-bold uppercase tracking-wide leading-tight">{cert.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ═══════════════════════════════
                    FEDFIT BRAND SECTION
                ═══════════════════════════════ */}
                {/* ═══════════════════════════════
                    FEDFIT BRAND SECTION
                ═══════════════════════════════ */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-28 max-w-4xl mx-auto"
                >
                    <p className="text-red-600 text-[0.6rem] font-black uppercase tracking-[0.5em] mb-2 text-center">The Platform</p>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
                        What is <span className="text-red-600">FedFit?</span>
                    </h3>

                    <div className="space-y-16">
                        {/* Mission Paragraphs */}
                        <div className="grid grid-cols-1 gap-8 text-center md:text-left">
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-white/80 text-xl md:text-2xl font-medium leading-relaxed"
                            >
                                FedFit is a modern fitness brand built with one mission — to help individuals shape their confidence through powerful training, smart nutrition, and a disciplined lifestyle.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-white/50 text-base md:text-lg leading-relaxed"
                            >
                                Founded by an International Certified Fitness Trainer, FedFit delivers result-driven workout programs, personalized diet plans, and high-quality online coaching designed for real, sustainable transformation. Whether you’re just starting your fitness journey or aiming to reach peak performance, FedFit provides the structure, guidance, and motivation you need.
                            </motion.p>
                        </div>

                        {/* Apparels Section */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative p-10 md:p-14 bg-white/[0.02] border border-white/5 rounded-[3rem] overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] rounded-full group-hover:bg-red-600/10 transition-colors duration-700" />
                            <div className="relative z-10">
                                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6">
                                    But FedFit is <span className="text-red-600">more than just coaching.</span>
                                </h4>
                                <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                                    We are expanding into <span className="text-white font-bold">FedFit Apparels Soon</span> — a fitness lifestyle clothing line created for those who live with strength, confidence, and purpose. Our apparel is designed to represent the mindset of champions — inside and outside the gym.
                                </p>
                            </div>
                        </motion.div>

                        {/* Identity Section */}
                        <div className="text-center space-y-4 pt-8">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-white/40 text-lg md:text-xl italic"
                            >
                                At FedFit, we don’t just build bodies.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-red-600"
                            >
                                We build confidence, discipline, and identity.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col items-center mt-12"
                            >
                                <div className="w-16 h-[1px] bg-red-600/30 mb-6" />
                                <p className="text-white/30 text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.4em] font-black font-['Outfit']">
                                    — Personal Coach: <span className="text-white/60 font-black">Fahad N P</span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center border-t border-white/[0.04] pt-14"
                >
                    <p className="text-white/20 text-[0.55rem] uppercase tracking-[0.6em] font-black">
                        FedFit — Shaping Champions · Est. 2026
                    </p>
                </motion.div>
            </main>
        </div>
    );
};

export default AboutUs;
