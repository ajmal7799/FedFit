import { motion } from 'framer-motion';

const LifeCare = ({ onBack }) => {
    const conditions = [
        {
            id: 1,
            title: "Uric Acid (Hyperuricemia)",
            desc: "Uric acid is a waste product formed from the breakdown of purines in the body. High levels can lead to joint pain and gout.",
            care: "Maintain a healthy weight, drink plenty of water, and limit foods high in purines such as red meat, organ meat, and certain seafood. Reduce alcohol intake and sugary drinks. Regular exercise and a balanced diet help keep uric acid levels under control."
        },
        {
            id: 2,
            title: "High Cholesterol",
            desc: "Cholesterol is a fatty substance in the blood. Excess levels, especially LDL (bad cholesterol), can increase the risk of heart disease.",
            care: "Avoid fried and processed foods, include more fruits, vegetables, and whole grains in your diet, and choose healthy fats like nuts and seeds. Regular physical activity, quitting smoking, and maintaining a healthy weight are essential."
        },
        {
            id: 3,
            title: "Diabetes (Type 2)",
            desc: "Diabetes is a condition where blood sugar levels are too high due to insulin resistance or deficiency.",
            care: "Follow a balanced diet with controlled sugar and carbohydrate intake. Exercise regularly, maintain a healthy weight, and monitor blood glucose levels. Avoid sugary beverages and processed foods, and manage stress effectively."
        },
        {
            id: 4,
            title: "High Blood Pressure (Hypertension)",
            desc: "High blood pressure occurs when the force of blood against artery walls is consistently too high, increasing the risk of heart disease and stroke.",
            care: "Reduce salt intake, eat a heart-healthy diet, exercise regularly, and manage stress. Avoid smoking and excessive alcohol consumption. Regular BP monitoring is important."
        },
        {
            id: 5,
            title: "Creatinine (Kidney Health)",
            desc: "Creatinine is a waste product filtered by the kidneys. High levels may indicate reduced kidney function.",
            care: "Stay well-hydrated, avoid excessive protein intake, limit salt and processed foods, and control underlying conditions like diabetes and blood pressure. Regular check-ups help in early detection and management."
        },
        {
            id: 6,
            title: "Obesity",
            desc: "Obesity is excessive body fat accumulation that increases the risk of many health problems like diabetes, heart disease, and joint issues.",
            care: "Follow a balanced diet, avoid junk and high-calorie foods, exercise regularly, and maintain portion control. Consistency in lifestyle habits is key."
        },
        {
            id: 7,
            title: "Fatty Liver (NAFLD)",
            desc: "Fatty liver occurs when excess fat builds up in the liver, often due to poor diet and inactivity.",
            care: "Reduce sugar and refined carbs, avoid alcohol, maintain a healthy weight, and exercise regularly. A healthy diet plays a major role in reversing early stages."
        },
        {
            id: 8,
            title: "Thyroid Disorders",
            desc: "Thyroid problems affect metabolism, energy levels, and weight.",
            care: "Eat a balanced diet with proper iodine intake, manage stress, and follow medical advice. Regular check-ups are important."
        },
        {
            id: 9,
            title: "Heart Disease",
            desc: "This includes conditions affecting the heart such as coronary artery disease, often linked to cholesterol, BP, and lifestyle habits.",
            care: "Eat heart-healthy foods, avoid smoking, exercise regularly, manage stress, and keep cholesterol and BP under control."
        },
        {
            id: 10,
            title: "PCOS (Polycystic Ovary Syndrome)",
            desc: "A hormonal disorder common in women that affects menstrual cycles, weight, and fertility.",
            care: "Maintain a healthy weight, follow a balanced diet, exercise regularly, and manage stress. Early management helps control symptoms."
        },
        {
            id: 11,
            title: "Stress & Anxiety Disorders",
            desc: "Chronic stress and anxiety can affect both mental and physical health.",
            care: "Practice relaxation techniques like meditation and breathing exercises, maintain work-life balance, get enough sleep, and stay physically active."
        },
        {
            id: 12,
            title: "Vitamin Deficiencies",
            desc: "Lack of essential vitamins can lead to fatigue, weakness, and other health issues.",
            care: "Eat a nutrient-rich diet, get sunlight exposure (for Vitamin D), and take supplements if needed under guidance."
        },
        {
            id: 13,
            title: "Digestive Disorders (Acidity, IBS)",
            desc: "Problems like acidity, bloating, and irritable bowel syndrome are common due to poor eating habits.",
            care: "Avoid spicy and processed foods, eat on time, stay hydrated, and manage stress."
        },
        {
            id: 14,
            title: "Sleep Disorders (Insomnia)",
            desc: "Poor sleep affects overall health, immunity, and mental well-being.",
            care: "Maintain a regular sleep schedule, avoid screen time before bed, reduce caffeine intake, and create a calm sleep environment."
        },
        {
            id: 15,
            title: "Arthritis (Joint Pain)",
            desc: "Arthritis causes inflammation and stiffness in joints, often worsened by excess weight and inactivity.",
            care: "Maintain a healthy weight, stay active with low-impact exercises like walking or yoga, and include anti-inflammatory foods in your diet."
        },
        {
            id: 16,
            title: "Osteoporosis (Weak Bones)",
            desc: "A condition where bones become weak and fragile, increasing fracture risk.",
            care: "Ensure adequate calcium and Vitamin D intake, do weight-bearing exercises, and avoid smoking and excessive alcohol."
        },
        {
            id: 17,
            title: "Metabolic Syndrome",
            desc: "A group of conditions including high BP, high blood sugar, excess body fat, and abnormal cholesterol levels.",
            care: "Adopt a healthy diet, exercise regularly, lose excess weight, and monitor health parameters consistently."
        },
        {
            id: 18,
            title: "Acid Reflux (GERD)",
            desc: "A digestive disorder where stomach acid frequently flows back into the esophagus, causing heartburn.",
            care: "Avoid spicy and oily foods, eat smaller meals, avoid lying down after eating, and maintain a healthy weight."
        },
        {
            id: 19,
            title: "Migraine & Chronic Headaches",
            desc: "Recurring headaches often triggered by stress, poor sleep, or diet.",
            care: "Maintain a regular sleep schedule, stay hydrated, avoid trigger foods, and manage stress."
        },
        {
            id: 20,
            title: "Skin Disorders",
            desc: "Skin problems can be linked to diet, hormones, and stress.",
            care: "Eat a clean diet, stay hydrated, maintain hygiene, and reduce stress."
        },
        {
            id: 21,
            title: "Respiratory Issues",
            desc: "Conditions like breathing difficulty may worsen due to pollution, smoking, or low fitness levels.",
            care: "Avoid smoking, exercise regularly, practice breathing exercises, and stay in clean environments."
        },
        {
            id: 22,
            title: "Hormonal Imbalance",
            desc: "Disruptions in hormones can affect weight, mood, energy, and overall health.",
            care: "Maintain a balanced diet, manage stress, exercise regularly, and get proper sleep."
        },
        {
            id: 23,
            title: "Low Immunity",
            desc: "Weak immune system increases susceptibility to infections.",
            care: "Eat nutrient-rich foods, exercise regularly, sleep well, and manage stress."
        },
        {
            id: 24,
            title: "Dehydration & Electrolyte Imbalance",
            desc: "Common due to poor water intake and unhealthy habits.",
            care: "Drink enough water daily, include natural fluids, and avoid excessive caffeine and sugary drinks."
        },
        {
            id: 25,
            title: "Sedentary Lifestyle Disorders",
            desc: "Health problems caused by prolonged sitting and lack of physical activity.",
            care: "Stay active throughout the day, take breaks from sitting, and include regular workouts."
        }
    ];

    return (
        <div className="fixed inset-0 z-[200] bg-black overflow-hidden flex flex-col font-['Inter',sans-serif]">
            {/* Background Grain/Noise */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Header */}
            <motion.header 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 border-b border-white/[0.05] backdrop-blur-md bg-black/40"
            >
                <button 
                    onClick={onBack}
                    className="flex items-center gap-3 text-white/40 hover:text-red-500 transition-all duration-300 group"
                >
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-500 group-hover:bg-red-500/10">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <span className="hidden sm:block text-[0.7rem] font-black uppercase tracking-[0.2em]">Back</span>
                </button>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <div className="flex items-center gap-4">
                        <img src="/images/logo/logo.jpeg" alt="FedFit Logo" className="w-8 h-8 rounded-full border border-red-600/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]" />
                        <div className="text-2xl font-black italic tracking-tighter uppercase whitespace-nowrap flex items-center">
                            <span className="text-white/50">FED</span>
                            <span className="text-red-600">FIT</span>
                            <span className="ml-3 text-[0.6rem] text-white/30 tracking-[0.3em] font-bold">— LIFECARE</span>
                        </div>
                    </div>
                </div>

                <div className="w-10" />
            </motion.header>

            {/* Content Container */}
            <div className="flex-1 overflow-y-auto px-6 py-12 md:px-20 md:py-20 custom-scrollbar">
                <div className="max-w-5xl mx-auto space-y-20">
                    
                    {/* Introduction */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="text-red-600 text-[0.6rem] font-black uppercase tracking-[0.4em] mb-4 block">Holistic Wellness</span>
                        <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tight mb-8 leading-[0.9]">
                            <span className="text-white/10 block mb-2 text-2xl md:text-3xl italic font-medium tracking-[0.2em] font-light">FEDFIT</span>
                            LIFESTYLE <span className="text-red-600">CARE</span>
                        </h2>
                        <p className="text-white/60 text-sm md:text-lg font-light leading-relaxed tracking-wide text-justify md:text-center max-w-4xl mx-auto">
                            At FedFit LifeCare, we focus on the prevention, management, and reversal of lifestyle diseases that are increasingly affecting people of all ages. Conditions such as high uric acid levels, cholesterol imbalance, diabetes, high blood pressure, and elevated creatinine are often the result of modern lifestyle habits including poor diet, lack of physical activity, stress, and inadequate sleep. Our approach is centered on holistic care—combining personalized nutrition plans, fitness guidance, and medical awareness to help you regain control of your health.
                        </p>
                        <p className="text-white/40 text-xs md:text-base font-light leading-relaxed mt-6 text-center max-w-3xl mx-auto italic">
                            We aim not just to treat symptoms, but to address the root causes of these conditions, empowering individuals to make sustainable lifestyle changes.
                        </p>
                    </motion.div>

                    {/* Conditions List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {conditions.map((item, idx) => (
                            <motion.div 
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (idx % 2) * 0.1 }}
                                className="group bg-[#0d0d0d] border border-white/5 rounded-3xl p-8 md:p-10 hover:border-red-600/20 transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <span className="text-red-600/20 text-4xl font-black italic group-hover:text-red-600 group-hover:opacity-40 transition-colors shrink-0 leading-none">0{item.id.toString().padStart(2, '')}</span>
                                    <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight leading-tight">{item.title}</h3>
                                </div>
                                <p className="text-white/70 text-sm leading-relaxed mb-8 font-light italic">
                                    {item.desc}
                                </p>
                                <div className="mt-auto pt-8 border-t border-white/5">
                                    <span className="text-red-600 text-[0.6rem] font-black uppercase tracking-widest mb-4 block">Prevention & Care:</span>
                                    <p className="text-white/40 group-hover:text-white/60 transition-colors text-xs md:text-sm leading-relaxed font-light">
                                        {item.care}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer/Approach */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="bg-red-600/5 border border-red-600/20 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden group"
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative z-10">
                            <span className="text-red-600 text-[0.6rem] font-black uppercase tracking-[0.4em] mb-6 block">Our Approach</span>
                            <h3 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-8">Sustainable Health Transformation</h3>
                            <p className="text-white/70 text-sm md:text-lg font-light leading-relaxed max-w-4xl mx-auto mb-10">
                                We believe that most lifestyle diseases can be prevented and managed through the right combination of nutrition, physical activity, and mindful living. Our goal is to educate, support, and guide you toward sustainable habits that improve your long-term health and quality of life.
                            </p>
                            <button 
                                onClick={onBack}
                                className="px-10 py-4 border border-red-600/30 rounded-full text-white text-[0.7rem] font-black uppercase tracking-widest hover:bg-red-600 transition-all duration-300"
                            >
                                Back to Hub
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>

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

export default LifeCare;
