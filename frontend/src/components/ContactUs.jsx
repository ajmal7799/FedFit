import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = ({ onBack }) => {
    const contactInfo = [
        {
            id: 'email',
            label: 'Send an Email',
            value: 'Fedfitbrand@gmail.com',
            link: 'mailto:Fedfitbrand@gmail.com',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            id: 'whatsapp',
            label: 'Quick Support',
            value: '+91 90727 11358',
            link: 'https://wa.me/919072711358',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.518 0-9.997 4.48-9.997 9.998 0 1.936.551 3.743 1.503 5.282l-1.603 5.864 6.009-1.575c1.285.748 2.766 1.177 4.341 1.177L12.012 22.753c5.518 0 9.997-4.48 9.997-9.998s-4.479-9.997-9.997-9.997zm6.98 14.887l-.988-.13c-.156-.021-.305-.084-.424-.183l-2.008-1.55a.724.724 0 01-.1-.856l1.09-1.597c.184-.27.13-.637-.128-.846l-2.316-1.89a.728.728 0 00-.916.035l-1.666 1.48c-.287.255-.705.289-1.03.085a11.166 11.166 0 01-3.692-3.69c-.204-.325-.17-.743.085-1.03l1.48-1.666a.731.731 0 00.035-.916l-1.89-2.316a.721.721 0 00-.846-.128L3.921 7.234a.724.724 0 00-.856-.1L6.155 9.143c-.099.119-.162.268-.183.424l-.13.988a10.026 10.026 0 009.682 9.682z"/>
                </svg>
            )
        }
    ];

    const socials = [
        {
            id: 'fedfit',
            label: 'Instagram',
            sub: 'FedFit Official',
            link: 'https://www.instagram.com/fedfit.co?igsh=MWt2aGpzNDc1Zjk4OQ==',
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
            )
        },
        {
            id: 'personal',
            label: 'Founder & Head Coach',
            sub: 'Performance Coach',
            link: 'https://www.instagram.com/fd.fahd?igsh=eThxNThxb284eG9y',
            image: '/images/personal/trainer.jpeg'
        }
    ];

    return (
        <div className="relative w-full min-h-screen bg-[#050505] text-white font-['Outfit',sans-serif] overflow-x-hidden">
            {/* Header */}
            <header className="relative z-[50] flex items-center justify-between px-8 py-6 backdrop-blur-md sticky top-0 bg-black/40">
                <button 
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/60 hover:text-red-500 transition-colors uppercase text-[0.7rem] font-black tracking-widest"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <div className="text-xl font-black italic tracking-tighter uppercase whitespace-nowrap flex items-center gap-4">
                        <img src="/images/logo/logo.jpeg" alt="FedFit Logo" className="w-8 h-8 rounded-full border border-red-600/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]" />
                        <div className="flex items-center">
                            <span className="text-white/50">FED</span>
                            <span className="text-red-600">FIT</span>
                            <span className="ml-3 text-[0.6rem] text-white/30 tracking-[0.3em] font-bold">— CONTACT</span>
                        </div>
                    </div>
                </div>
                <div className="w-24 hidden md:block" />
            </header>

            <main className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <p className="text-red-600 font-extrabold uppercase tracking-[0.4em] text-[0.6rem] mb-3">Connect with elite</p>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight flex flex-col items-center gap-2 leading-none">
                        <div className="text-white/10 text-2xl md:text-3xl italic font-light tracking-[0.2em] mb-4 font-light">FEDFIT</div>
                        CONTACT <span className="text-red-600">US</span>
                    </h1>
                </motion.div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    {/* Left Column: Direct Contacts */}
                    <div className="flex flex-col gap-6">
                        {contactInfo.map((item, idx) => (
                            <motion.a
                                key={item.id}
                                href={item.link}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex items-center gap-6 p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] hover:bg-white/[0.05] hover:border-red-600/30 transition-all duration-500 no-underline"
                            >
                                <div className="w-14 h-14 flex-shrink-0 bg-red-600/10 rounded-full flex items-center justify-center text-red-600 shadow-[0_0_20px_rgba(239,68,68,0.1)] group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-red-600 text-[0.6rem] font-black uppercase tracking-widest mb-1">{item.label}</p>
                                    <p className="text-white text-lg sm:text-xl font-bold truncate">{item.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Column: Elite Socials Box */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden"
                    >
                        {/* Background subtle glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[60px] rounded-full" />
                        
                        <h2 className="text-white/80 text-xl font-black uppercase tracking-tight mb-10 z-10">Elite Socials</h2>
                        
                        <div className="grid grid-cols-2 gap-4 w-full z-10">
                            {socials.map((social, idx) => (
                                <a
                                    key={social.id}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:bg-red-600/10 hover:border-red-600/40 transition-all duration-500 no-underline text-center"
                                >
                                    {social.image ? (
                                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-red-600 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                                            <img src={social.image} alt="Profile" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 text-red-600 mb-4 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                                            {social.icon}
                                        </div>
                                    )}
                                    <p className="text-white/40 text-[0.55rem] font-bold uppercase tracking-widest leading-tight mb-1">{social.label}</p>
                                    <p className="text-white text-[0.7rem] font-black uppercase tracking-tight leading-none">{social.sub}</p>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center opacity-20 hover:opacity-40 transition-opacity cursor-default"
                >
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="py-20 border-t border-white/[0.05] flex flex-col items-center bg-black relative z-20">
                <div className="text-xl font-black italic tracking-tighter uppercase mb-4 opacity-20">
                    <span className="text-white">FED</span>
                    <span className="text-white">FIT</span>
                </div>
                <div className="text-white/10 text-[0.5rem] tracking-[0.3em] uppercase">
                    &copy; 2026 FedFit. All Rights Reserved.
                </div>
            </footer>

            {/* Custom scrollbar and aesthetics */}
            <style jsx="true">{`
                .truncate {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            `}</style>
        </div>
    );
};

export default ContactUs;
