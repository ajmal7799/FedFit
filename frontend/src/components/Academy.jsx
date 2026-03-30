import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Academy = ({ onBack }) => {
    const [selectedChapter, setSelectedChapter] = useState(null);

    const academyContent = [
        {
            id: 1,
            title: "INTRODUCTION TO FITNESS",
            content: `
                <h3>1.1 Definition of Fitness</h3>
                <p>Fitness can be defined as the ability of an individual to perform daily physical activities efficiently and effectively without undue fatigue, while maintaining sufficient energy reserves for leisure activities and unforeseen emergencies. It is a multidimensional concept that includes physical, mental, and emotional well-being.</p>
                <p>From a scientific perspective, fitness represents the optimal functioning of the body’s physiological systems, including the cardiovascular, muscular, respiratory, and nervous systems. A physically fit individual is not only capable of performing physical tasks but also demonstrates resilience against stress, illness, and fatigue.</p>
                
                <h3>1.2 Historical Background of Fitness</h3>
                <p>The concept of fitness has evolved significantly over time. In ancient civilizations, physical fitness was essential for survival, hunting, and warfare. In societies such as ancient Greece, physical training was highly valued and closely linked to intellectual development.</p>
                <p>In modern times, fitness has shifted from survival needs to health, aesthetics, and performance. With increasing sedentary lifestyles, structured exercise programs and gym-based training have become essential for maintaining health and preventing lifestyle-related diseases.</p>
                
                <h3>1.3 Components of Physical Fitness</h3>
                <p>Physical fitness is composed of several key components, each contributing to overall performance and health.</p>
                <p><strong>1.3.1 Cardiorespiratory Endurance:</strong> Refers to the ability of the heart, lungs, and blood vessels to supply oxygen to working muscles during prolonged physical activity.</p>
                <p><strong>1.3.2 Muscular Strength:</strong> Maximum force that a muscle or group of muscles can exert in a single effort.</p>
                <p><strong>1.3.3 Muscular Endurance:</strong> Ability of a muscle to perform repeated contractions over a period of time without fatigue.</p>
                <p><strong>1.3.4 Flexibility:</strong> Range of motion available at a joint.</p>
                <p><strong>1.3.5 Body Composition:</strong> Proportion of fat mass and fat-free mass (muscle, bone, water) in the body.</p>
                
                <h3>1.4 Skill-Related Components of Fitness</h3>
                <ul>
                    <li>Agility: Ability to change direction quickly</li>
                    <li>Balance: Ability to maintain body stability</li>
                    <li>Coordination: Ability to perform smooth and efficient movements</li>
                    <li>Power: Combination of strength and speed</li>
                    <li>Reaction Time: Speed of response to stimuli</li>
                    <li>Speed: Ability to move quickly</li>
                </ul>
                
                <h3>1.5 Importance of Physical Fitness</h3>
                <p><strong>Physical:</strong> Improves heart function, regulates body weight, improves metabolic efficiency.</p>
                <p><strong>Mental:</strong> Reduces stress, improves mood, enhances cognitive function.</p>
                <p><strong>Social:</strong> Increases confidence and promotes discipline.</p>
                
                <h3>1.6 Principles of Fitness Training</h3>
                <p>Overload, Progression, Specificity, Recovery, Reversibility, and Individuality.</p>
            `
        },
        {
            id: 2,
            title: "HUMAN BODY & MUSCLE PHYSIOLOGY",
            content: `
                <h3>2.1 Introduction to Human Body Systems</h3>
                <p>The human body is a complex system. Key systems in fitness: Muscular, Skeletal, Nervous, Cardiovascular, and Respiratory.</p>
                
                <h3>2.2 Structure of Skeletal Muscle</h3>
                <p>Muscle -> Fascicles -> Muscle Fibers -> Myofibrils. Contractile proteins: Actin and Myosin.</p>
                
                <h3>2.3 Sliding Filament Theory</h3>
                <p>Mechanism of muscle contraction where myosin heads attach to actin filaments, shortening the muscle using ATP energy.</p>
                
                <h3>2.4 Types of Muscle Tissue</h3>
                <p>Skeletal (voluntary), Cardiac (heart), and Smooth (organs).</p>
                
                <h3>2.5 Types of Muscle Fibers</h3>
                <p><strong>Type I (Slow-Twitch):</strong> High endurance, fatigue-resistant.</p>
                <p><strong>Type II (Fast-Twitch):</strong> IIa (moderate) and IIb (high power, fatigue quickly).</p>
                
                <h3>2.6 Muscle Hypertrophy</h3>
                <p>Growth through Mechanical Tension, Muscle Damage, and Metabolic Stress.</p>
            `
        },
        {
            id: 3,
            title: "EXERCISE SCIENCE & TRAINING PRINCIPLES",
            content: `
                <h3>3.1 Definition of Exercise Science</h3>
                <p>Studies responses and adaptations to physical activity, combining physiology, biomechanics, and psychology.</p>
                
                <h3>3.2 Types of Exercise</h3>
                <p>Aerobic (running, cycling) and Anaerobic (weightlifting, sprinting).</p>
                
                <h3>3.3 Training Variables</h3>
                <p>Volume, Intensity, Frequency, and Rest.</p>
                
                <h3>3.4 Progressive Overload</h3>
                <p>Gradually increasing stress to stimulate growth.</p>
                
                <h3>3.5 Periodization</h3>
                <p>Dividing training into phases (hypertrophy, strength, peak).</p>
            `
        },
        {
            id: 4,
            title: "NUTRITION SCIENCE FOR FITNESS",
            content: `
                <h3>4.1 Introduction to Nutrition</h3>
                <p>Nutrition provides the necessary fuel and building materials for the body to adapt and grow stimulus provided by exercise.</p>
                
                <h3>4.2 Macronutrients</h3>
                <p><strong>Protein:</strong> Building blocks (amino acids) for repair.</p>
                <p><strong>Carbohydrates:</strong> Primary energy source (glucose/glycogen).</p>
                <p><strong>Fats:</strong> Essential for hormones and long-term energy.</p>
                
                <h3>4.4 Energy Balance</h3>
                <p>Caloric Surplus (Growth), Caloric Deficit (Fat Loss), Maintenance.</p>
                
                <h3>4.7 Hydration</h3>
                <p>Maintains temperature, supports muscle function, and prevents fatigue.</p>
            `
        },
        {
            id: 5,
            title: "PROTEIN METABOLISM & MUSCLE BUILDING",
            content: `
                <h3>5.1 Introduction to Protein</h3>
                <p>Central to muscle repair, growth, and enzyme production.</p>
                
                <h3>5.2 Structure of Protein</h3>
                <p>Essential (from diet) vs Non-Essential (body-made) Amino Acids. Leucine is key for synthesis.</p>
                
                <h3>5.4 Muscle Protein Synthesis (MPS)</h3>
                <p>Building vs Breakdown. Growth occurs when Synthesis > Breakdown.</p>
                
                <h3>5.11 Protein Supplements</h3>
                <p>Whey (fast), Casein (slow), and plant-based options.</p>
            `
        }
    ];

    // Placeholder chapters for 6 to 24
    for (let i = 6; i <= 24; i++) {
        academyContent.push({
            id: i,
            title: `Chapter ${i}: Advanced Performance Data`,
            content: `<h3>${i}.1 Module Locked</h3><p>This scientific module is currently in production. FedFit Elite members will receive notification when the technical data is released.</p>`
        });
    }

    return (
        <div className="relative w-full min-h-screen bg-[#0a0a0a] text-white font-['Outfit',sans-serif] overflow-x-hidden">
            {/* ── Background Elements ── */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-red-600/10 to-transparent" />
            </div>

            {/* ── Header ── */}
            <header className="relative z-[50] flex items-center justify-between px-8 py-6 border-b border-white/[0.06] backdrop-blur-md sticky top-0 bg-black/40">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors uppercase text-[0.7rem] font-black tracking-widest"
                >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Home
                </button>
                <div className="text-xl font-black tracking-tight uppercase">
                    <span className="text-red-600">FedFit</span> Academy
                </div>
                <div className="w-24 hidden md:block" />
            </header>

            <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col lg:flex-row gap-12">
                {/* ── Chapter Navigation ── */}
                <div className="w-full lg:w-1/3">
                    <div className="sticky top-32 space-y-4">
                        <h2 className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-8">Curriculum</h2>
                        <div className="space-y-3 max-h-[65vh] overflow-y-auto pr-4 custom-scrollbar">
                            {academyContent.map((chapter) => (
                                <button
                                    key={chapter.id}
                                    onClick={() => setSelectedChapter(chapter)}
                                    className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${
                                        selectedChapter?.id === chapter.id 
                                        ? 'bg-red-600 border-red-600 shadow-[0_0_25px_rgba(239,68,68,0.3)]' 
                                        : 'bg-white/[0.03] border-white/5 hover:border-white/20'
                                    }`}
                                >
                                    <span className={`text-[0.6rem] font-bold uppercase tracking-widest block mb-1 ${selectedChapter?.id === chapter.id ? 'text-white' : 'text-white/30'}`}>
                                        Chapter {chapter.id.toString().padStart(2, '0')}
                                    </span>
                                    <span className={`text-sm font-black uppercase tracking-tight leading-tight block ${selectedChapter?.id === chapter.id ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                                        {chapter.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Module Content ── */}
                <div className="w-full lg:w-2/3">
                    <AnimatePresence mode="wait">
                        {selectedChapter ? (
                            <motion.div
                                key={selectedChapter.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/[0.02] border border-white/5 p-10 sm:p-14 rounded-[3rem] min-h-[600px] academy-viewer"
                            >
                                <div className="mb-14 pb-8 border-b border-white/5">
                                    <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[0.7rem]">Elite Academic Module</span>
                                    <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight mt-3">{selectedChapter.title}</h1>
                                </div>
                                <div 
                                    className="academy-html-content text-white/60 font-light leading-relaxed tracking-wide"
                                    dangerouslySetInnerHTML={{ __html: selectedChapter.content }}
                                />
                            </motion.div>
                        ) : (
                            <div className="h-[600px] flex flex-col items-center justify-center text-center p-12 border border-dashed border-white/10 rounded-[3rem] bg-white/[0.01]">
                                <div className="text-red-600 mb-6">
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Academic Portal</h2>
                                <p className="text-white/30 max-w-xs mx-auto text-sm tracking-wide">Select a chapter from the curriculum to access the FedFit scientific performance database.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <style>{`
                .academy-html-content h3 {
                    color: white;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-top: 3rem;
                    margin-bottom: 1.2rem;
                    font-size: 1.2rem;
                }
                .academy-html-content p {
                    margin-bottom: 1.8rem;
                }
                .academy-html-content strong {
                    color: white;
                    font-weight: 700;
                }
                .academy-html-content ul {
                    list-style: none;
                    margin-bottom: 2rem;
                    padding-left: 0;
                }
                .academy-html-content li {
                    position: relative;
                    padding-left: 1.8rem;
                    margin-bottom: 0.8rem;
                    font-size: 0.95rem;
                }
                .academy-html-content li::before {
                    content: '→';
                    position: absolute;
                    left: 0;
                    color: #ef4444;
                    font-weight: 900;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
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
            `}</style>
            
            <footer className="py-20 border-t border-white/[0.05] flex flex-col items-center relative z-20 bg-black">
                <div className="text-white/20 text-[0.6rem] tracking-[0.5em] uppercase mb-4">
                    FedFit Elite Academy
                </div>
                <div className="text-white/10 text-[0.5rem] tracking-[0.3em] uppercase">
                    &copy; 2024 FedFit. All Rights Reserved.
                </div>
            </footer>
        </div>
    );
};

export default Academy;
