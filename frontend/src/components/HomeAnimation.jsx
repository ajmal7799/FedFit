import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomeAnimation = ({ onNavigate }) => {
    const canvasRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        height: '',
        weight: '',
        gender: '',
        injuries: '',
        otherInjuries: ''
    });

    const commonInjuries = ['Knee Pain', 'Back Pain', 'Shoulder Injury', 'None'];

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappNumber = "919072711358";
        const message = `*FedFit Program Inquiry*%0A%0A` +
            `*Program:* ${selectedProgram?.title}%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Age:* ${formData.age}%0A` +
            `*Height:* ${formData.height} cm%0A` +
            `*Weight:* ${formData.weight} kg%0A` +
            `*Gender:* ${formData.gender}%0A` +
            `*Injuries:* ${formData.injuries === 'Other' ? formData.otherInjuries : formData.injuries}`;
        
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        setModalOpen(false);
    };

    const frameCount = 90;
    const fps = 40;
    const frameInterval = 1000 / fps;

    const currentFramePath = (index) =>
        `/images/home/ezgif-608200a3ef701722-png-split/ezgif-frame-${(index + 1)
            .toString()
            .padStart(3, '0')}.png`;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        const images = [];
        let loadedCount = 0;
        let currentFrameIndex = 0;
        let lastTime = 0;
        let animationFrameId = null;
        let isAnimating = true;

        const startAnimationLoop = (loadedImages) => {
            if (!isAnimating) return;
            
            const firstImg = loadedImages[0];
            if (firstImg) {
                canvas.width = firstImg.width;
                canvas.height = firstImg.height;
            }

            const updateFrame = (timestamp) => {
                if (!isAnimating) return;
                if (!lastTime) lastTime = timestamp;
                const deltaTime = timestamp - lastTime;

                if (deltaTime >= frameInterval) {
                    // Only draw if frame exists and is loaded
                    const frameToDraw = loadedImages[currentFrameIndex];
                    if (frameToDraw && frameToDraw.complete && frameToDraw.width > 0) {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(frameToDraw, 0, 0);
                        currentFrameIndex = (currentFrameIndex + 1) % frameCount;
                        lastTime = timestamp - (deltaTime % frameInterval);
                    } else {
                        // Skip or loop back if missing a frame
                        currentFrameIndex = (currentFrameIndex + 1) % frameCount;
                    }
                }
                animationFrameId = requestAnimationFrame(updateFrame);
            };

            animationFrameId = requestAnimationFrame(updateFrame);
        };

        const loadAndStart = async () => {
            // Initiate all loads immediately
            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    // Start loop as soon as the first frame is ready
                    if (i === 0) {
                        setIsLoaded(true);
                        startAnimationLoop(images);
                    }
                };
                img.onerror = () => {
                    console.warn(`Frame ${i} failed to load`);
                    // If frame 0 fails, we have a problem, but we'll try to find any frame
                    if (i === 0) setError('Initial frame failed');
                };
                img.src = currentFramePath(i);
                images.push(img);
            }

            // Fallback: if after 4 seconds nothing started, check if we have ANY frame
            setTimeout(() => {
                if (!isLoaded && images[0]) {
                    setIsLoaded(true);
                    startAnimationLoop(images);
                }
            }, 4000);
        };

        loadAndStart();

        return () => {
            isAnimating = false;
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);


    const navItems = [
        'Home', 
        'Programs', 
        'Exercise library & Nutrition guide', 
        'Fedfit quick aid', 
        'Fedfit academy', 
        'Fedfit LifeCare', 
        'Beginners guide', 
        'Fedfit apparels', 
        'About us', 
        'Contact us'
    ];

    const services = [
        { id: 1, title: 'Personal Coaching', image: '/images/service/personalcoaching.png', tag: 'Elite Training' },
        { id: 2, title: 'Diet Plan', image: '/images/service/dietplan.png', tag: 'Nutrition' },
        { id: 3, title: 'Workout Plan', image: '/images/service/workoutplan.png', tag: 'Custom Routines' },
        { id: 4, title: 'Apparel', image: '/images/service/apparel.png', tag: 'Branded Gear' }
    ];

    const [activeService, setActiveService] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length);
        }, 3000); // Auto move every 3 seconds
        return () => clearInterval(interval);
    }, [services.length]);

    const programs = [
        { id: 1, title: 'Personal Coaching', image: '/images/programms/personalcoching.jpeg', tag: '1-on-1 Training' },
        { id: 2, title: 'Diet Plans', image: '/images/programms/dietplans.jpeg', tag: 'Nutrition Mastery' },
        { id: 3, title: 'Workout Plans', image: '/images/programms/workoutplans.jpeg', tag: 'Elite Routines' }
    ];

    return (
        <div className="main-content relative w-full min-h-screen bg-[#0a0a0a] flex flex-col overflow-x-hidden">
            {/* ── Hero Section (Full Screen) ── */}
            <div className="h-screen flex flex-col flex-shrink-0">
                {/* ── Header ── */}
                <motion.header
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="relative z-50 flex items-center justify-between
                               px-5 py-4
                               sm:px-8 sm:py-5
                               md:px-12 md:py-6
                               border-b border-white/[0.06] flex-shrink-0"
                >
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/images/logo/logo+title.jpeg" alt="FedFit Logo" className="h-14 w-auto object-contain cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-10">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={['Beginners guide','Fedfit academy','Fedfit quick aid','Contact us','About us','Fedfit apparels'].includes(item) ? '#' : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={(e) => {
                                    if (item === 'Beginners guide') {
                                        e.preventDefault(); onNavigate('beginner-guide');
                                    } else if (item === 'Fedfit academy') {
                                        e.preventDefault(); onNavigate('academy');
                                    } else if (item === 'Fedfit quick aid') {
                                        e.preventDefault(); onNavigate('quick-aid');
                                    } else if (item === 'Contact us') {
                                        e.preventDefault(); onNavigate('contact-us');
                                    } else if (item === 'About us') {
                                        e.preventDefault(); onNavigate('about-us');
                                    } else if (item === 'Fedfit apparels') {
                                        e.preventDefault(); onNavigate('apparels');
                                    } else if (item === 'Exercise library & Nutrition guide') {
                                        e.preventDefault(); onNavigate('exercise-library');
                                    } else if (item === 'Fedfit LifeCare') {
                                        e.preventDefault(); onNavigate('lifecare');
                                    }
                                }}


                                className="relative text-white/60 hover:text-white
                                           text-[0.65rem] lg:text-[0.7rem]
                                           font-semibold tracking-[0.1em] uppercase no-underline
                                           transition-colors duration-200 group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600
                                                 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 z-50"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center
                                         ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                        <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300
                                         ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 origin-center
                                         ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
                    </button>
                </motion.header>

                {/* ── Side Mobile Menu Overlay ── */}
                <AnimatePresence>
                    {menuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setMenuOpen(false)}
                                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] md:hidden"
                            />
                            
                            {/* Drawer */}
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '-100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-[#0d0d0d] border-r border-white/10 z-[101] md:hidden p-8 flex flex-col"
                            >
                                <div className="mb-12 pt-4">
                                    <img src="/images/logo/logo+title.jpeg" alt="FedFit Logo" className="h-16 w-auto object-contain" />
                                </div>
                                
                                <nav className="flex flex-col gap-5 overflow-y-auto max-h-[60vh] py-2">
                                    {navItems.map((item, i) => (
                                        <motion.a
                                            key={item}
                                            href={['Beginners guide','Fedfit academy','Fedfit quick aid','Contact us','About us','Fedfit apparels'].includes(item) ? '#' : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + (i * 0.05) }}
                                            onClick={(e) => {
                                                setMenuOpen(false);
                                                if (item === 'Beginners guide') {
                                                    e.preventDefault(); onNavigate('beginner-guide');
                                                } else if (item === 'Fedfit academy') {
                                                    e.preventDefault(); onNavigate('academy');
                                                } else if (item === 'Fedfit quick aid') {
                                                    e.preventDefault(); onNavigate('quick-aid');
                                                } else if (item === 'Contact us') {
                                                    e.preventDefault(); onNavigate('contact-us');
                                                } else if (item === 'About us') {
                                                    e.preventDefault(); onNavigate('about-us');
                                                } else if (item === 'Fedfit apparels') {
                                                    e.preventDefault(); onNavigate('apparels');
                                                } else if (item === 'Exercise library & Nutrition guide') {
                                                    e.preventDefault(); onNavigate('exercise-library');
                                                } else if (item === 'Fedfit LifeCare') {
                                                    e.preventDefault(); onNavigate('lifecare');
                                                }
                                            }}


                                            className="text-white/60 hover:text-white text-lg font-black uppercase tracking-widest no-underline transition-colors"
                                        >
                                            {item}
                                        </motion.a>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-10 border-t border-white/5">
                                    <p className="text-red-600 text-[0.6rem] font-black uppercase tracking-[0.3em] mb-4">Contact Info</p>
                                    <p className="text-white/40 text-xs mb-2">Fedfitbrand@gmail.com</p>
                                    <p className="text-white/40 text-xs">+91 90727 11358</p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* ── Hero Body ── */}
                <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                    {/* ── Canvas Section ── */}
                    <motion.div
                        className="relative order-1 md:order-2 w-full md:flex-1 h-[42%] sm:h-[45%] md:h-auto overflow-hidden flex items-center justify-center min-w-0"
                        style={{ background: '#0a0a0a' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        <div className="hidden md:block absolute inset-y-0 left-0 w-28 z-30 pointer-events-none bg-gradient-to-r from-[#0a0a0a] to-transparent" />
                        <div className="absolute inset-y-0 right-0 w-10 md:w-20 z-30 pointer-events-none bg-gradient-to-l from-[#0a0a0a] to-transparent" />
                        <div className="absolute inset-x-0 top-0 h-10 md:h-20 z-30 pointer-events-none bg-gradient-to-b from-[#0a0a0a] to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-[35%] md:h-[30%] z-30 pointer-events-none bg-gradient-to-t from-[#0a0a0a] to-transparent" />

                        <canvas ref={canvasRef} className="w-full h-full object-contain object-center scale-110" />

                        {!isLoaded && !error && (
                            <div className="absolute inset-0 flex items-center justify-center z-40">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-8 h-8 md:w-10 md:h-10 border-4 border-red-600/30 border-t-red-600 rounded-full animate-spin" />
                                    <p className="text-white/50 text-xs md:text-sm">Loading...</p>
                                </div>
                            </div>
                        )}

                        {error && (
                            <div className="absolute inset-0 flex items-center justify-center z-40 bg-black/80">
                                <div className="text-center text-red-400 px-4">
                                    <p className="font-medium text-sm md:text-base">Animation failed to load</p>
                                    <p className="text-xs md:text-sm mt-1 text-red-400/70">{error}</p>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {/* ── Text Panel ── */}
                    <motion.div
                        className="relative order-2 md:order-1 flex flex-col justify-center gap-3 sm:gap-4 md:gap-5 px-5 sm:px-8 md:px-12 py-6 sm:py-7 md:py-0 w-full md:w-[42%] lg:w-[38%] h-[58%] sm:h-[55%] md:h-auto flex-shrink-0 z-10"
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
                    >
                        <div className="md:hidden absolute top-0 inset-x-0 h-px bg-white/[0.04]" />
                        <p className="text-red-500 font-semibold tracking-[0.28em] uppercase m-0 text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem]">Est. 2026</p>
                        <h1 className="text-[#f0f0f0] uppercase leading-[0.9] tracking-wide m-0 font-black text-[2rem] sm:text-[2.6rem] md:text-[clamp(3.5rem,5.5vw,5.5rem)] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
                            Shape<br />Your<br /><span className="text-red-500 drop-shadow-[0_0_16px_rgba(239,68,68,0.35)]">Confidence</span>
                        </h1>
                        <p className="text-white/60 font-normal leading-relaxed tracking-wide m-0 text-[0.75rem] sm:text-[0.82rem] md:text-[0.9rem] max-w-[200px] sm:max-w-[240px] md:max-w-[260px]">
                            Elite coaching. Proven results.<br />Built for those who refuse to settle.
                        </p>
                        <a href="#services" className="mt-1 md:mt-2 self-start px-6 py-2.5 sm:px-7 sm:py-3 md:px-9 md:py-3 bg-red-600 hover:bg-red-500 text-white text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] font-bold tracking-[0.22em] uppercase no-underline transition-all duration-200 hover:-translate-y-0.5 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,10px_100%,0_calc(100%-10px))]">
                            Get Started
                        </a>
                    </motion.div>
                </div>

                {/* ── Footer Bar ── */}
                <motion.div
                    className="flex-shrink-0 flex items-center gap-4 px-5 sm:px-8 md:px-12 py-2 sm:py-2.5 md:py-3 border-t border-white/[0.06] z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                >
                    <span className="flex-1 h-px bg-white/10" />
                    <span className="text-white/30 tracking-[0.26em] sm:tracking-[0.32em] uppercase whitespace-nowrap text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem]">
                        — Shape Your Confidence —
                    </span>
                    <span className="flex-1 h-px bg-white/10" />
                </motion.div>
            </div>

            {/* ── Services Section ── */}
            <section id="services" className="relative w-full py-20 px-5 sm:px-12 md:px-20 bg-[#050505] border-t border-white/[0.03]">
                <div className="max-w-7xl mx-auto">
                    <div className="hidden lg:grid grid-cols-4 gap-6">
                        {services.map((service) => (
                            <motion.div 
                                key={service.id} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="relative h-[480px] overflow-hidden rounded-sm group bg-[#0a0a0a] flex items-center justify-center p-4 border border-white/[0.02]"
                            >
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110 relative z-10" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-20" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile & Tablet Slider (Auto-Moving) */}
                    <div className="lg:hidden relative overflow-hidden group">
                        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeService * 100}%)` }}>
                            {services.map((service) => (
                            <div key={service.id} className="w-full flex-shrink-0 px-2 lg:px-4">
                                <div className="relative h-[450px] w-full overflow-hidden rounded-sm group bg-[#0a0a0a] flex items-center justify-center">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-20" />
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-3 mt-10">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveService(index)}
                                    className={`h-1.5 transition-all duration-300 rounded-full ${activeService === index ? 'w-12 bg-red-600' : 'w-4 bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Our Programs Section ── */}
            <section id="programs" className="relative w-full py-20 px-5 sm:px-12 md:px-20 bg-black border-t border-white/[0.03]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-white text-5xl md:text-6xl font-black uppercase tracking-tight"
                        >
                            Our <span className="text-red-600">Programs</span>
                        </motion.h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {programs.map((program, index) => {
                            const isDiet = program.title.toLowerCase().includes('diet');
                            const glowColor = isDiet ? 'rgba(74, 222, 128, 0.4)' : 'rgba(239, 68, 68, 0.4)';
                            const borderColor = isDiet ? '#4ade80' : '#ef4444';
                            
                            // Mock icons for the visual look in the reference
                            const Icon = () => {
                                if (program.title.includes('Coaching')) return (
                                    <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 mb-4 opacity-90"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                                );
                                if (program.title.includes('Diet')) return (
                                    <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 mb-4 opacity-90"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
                                );
                                return (
                                    <svg viewBox="0 0 24 24" fill="white" className="w-12 h-12 mb-4 opacity-90"><path d="M20.5 7h-3V6c0-1.1-.9-2-2-2h-7c-1.1 0-2 .9-2 2v1h-3C2.56 7 2 7.56 2 8.2v7.6c0 .64.56 1.2 1.25 1.2h3V18c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-1h3c.69 0 1.25-.56 1.25-1.2V8.2c0-.64-.56-1.2-1.25-1.2zM8.5 6h7v11h-7V6z"/></svg>
                                );
                            };

                            return (
                                <motion.div 
                                    key={program.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    whileHover={{ scale: 1.03 }}
                                    className="relative flex flex-col items-center group cursor-pointer"
                                >
                                    {/* Glowy Card Outer Container */}
                                    <div 
                                        className="relative w-full h-[600px] rounded-[3.5rem] overflow-hidden border-2 flex flex-col items-center justify-center transition-all duration-500 shadow-2xl"
                                        style={{ 
                                            borderColor: borderColor,
                                            boxShadow: `0 0 40px ${glowColor}, inset 0 0 30px ${glowColor}`,
                                            background: '#050505'
                                        }}
                                    >
                                        {/* Background Image (Full Crop/Fit) */}
                                        <div className="absolute inset-0 z-0">
                                            <img 
                                                src={program.image} 
                                                alt={program.title} 
                                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110 brightness-50" 
                                            />
                                            {/* Complex Vignette Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
                                        </div>
                                        
                                        {/* Centered Content Overlay (Stacked like reference) */}
                                        <div className="relative z-20 flex flex-col items-center px-8 text-center h-full pt-16 pb-12">
                                            <div className="mt-auto mb-auto flex flex-col items-center">
                                                <Icon />
                                                <h4 className="text-white text-[2.8rem] sm:text-[3.2rem] font-black uppercase tracking-tight leading-[0.85] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                                                    {program.title.split(' ').map((word, i) => (
                                                        <span key={i} className="block">{word}</span>
                                                    ))}
                                                </h4>
                                            </div>
                                            
                                            {/* Click Here Button */}
                                            <motion.button 
                                                onClick={() => {
                                                    setSelectedProgram(program);
                                                    setModalOpen(true);
                                                }}
                                                whileHover={{ scale: 1.05, background: borderColor }}
                                                className="mt-auto px-12 py-3.5 rounded-full border border-white/20 text-white font-black uppercase tracking-[0.25em] text-[0.75rem] backdrop-blur-xl transition-all duration-300 pointer-events-auto"
                                                style={{ 
                                                    background: `linear-gradient(90deg, rgba(20,20,20,0.9) 0%, ${glowColor} 100%)`,
                                                    boxShadow: `0 10px 30px rgba(0,0,0,0.9)`
                                                }}
                                            >
                                                CLICK HERE
                                            </motion.button>
                                        </div>

                                        {/* Light Accent Border Highlights */}
                                        <div className="absolute inset-0 border border-white/5 rounded-[3.5rem] pointer-events-none" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Testimonials Section ── */}
            <section id="reviews" className="relative w-full py-28 px-5 sm:px-12 md:px-20 bg-[#050505] border-t border-white/[0.03]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-red-600 text-xs font-black tracking-[0.5em] uppercase mb-4"
                        >
                            Social Proof
                        </motion.h2>
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight"
                        >
                            Client <span className="text-red-600">Reviews</span>
                        </motion.h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Alex Murdock", role: "Elite Athlete", text: "FedFit has completely transformed my approach to fitness. The 1-on-1 coaching is world-class and pushed me beyond my limits." },
                            { name: "Sarah Jenkins", role: "Nutrition Client", text: "The diet plans are so easy to follow and the results were almost immediate. Truly elite performance and scientific approach." },
                            { name: "David Lyons", role: "Powerlifter", text: "The workout routines are intense but perfectly tailored for my goals. Best thing I've done for my health and strength." }
                        ].map((review, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-10 bg-[#0a0a0a] border border-white/[0.05] rounded-[2rem] hover:border-red-600/30 transition-all duration-500 group shadow-2xl"
                            >
                                <div className="absolute top-8 left-8 text-red-600/20 text-7xl font-serif select-none pointer-events-none group-hover:text-red-600/40 transition-colors">"</div>
                                <div className="relative z-10 flex flex-col h-full">
                                    <p className="text-white/70 text-lg sm:text-xl font-light italic leading-relaxed mb-10 tracking-tight group-hover:text-white transition-colors">
                                        {review.text}
                                    </p>
                                    <div className="mt-auto pt-8 border-t border-white/[0.03] flex items-center gap-4">
                                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-black text-xl shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                                            {review.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black uppercase tracking-tight text-sm">{review.name}</h4>
                                            <p className="text-red-600 text-[0.65rem] font-bold uppercase tracking-[0.2em]">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Professional Footer ── */}
            <footer className="relative bg-black border-t border-white/5 pt-24 pb-12 px-5 sm:px-12 md:px-20 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 mb-20">
                        {/* Brand Column */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="mb-6">
                                <img src="/images/logo/logo+title.jpeg" alt="FedFit Logo" className="h-28 w-auto object-contain" />
                            </div>
                            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-light tracking-wide mb-8">
                                Elite performance coaching and high-end fitness solutions for those who refuse to settle. Join the revolution.
                            </p>
                            <div className="flex gap-6">
                                <a href="https://www.instagram.com/fd.fahd?igsh=eThxNThxb284eG9y" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group">
                                    <svg className="w-5 h-5 fill-white/40 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                </a>
                                <a href="https://wa.me/919072711358" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group">
                                    <svg className="w-5 h-5 fill-white/40 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.133 1.432 4.717 1.433 5.093 0 9.235-4.144 9.237-9.237.001-2.463-.956-4.78-2.695-6.521-1.739-1.74-4.053-2.699-6.523-2.701-5.11 0-9.237 4.147-9.24 9.239-.001 1.688.487 3.15 1.411 4.606l-.995 3.635 3.73-.979zm12.56-4.521c-.341-.171-2.02-.996-2.333-1.111-.313-.114-.541-.171-.77.171-.228.341-.884 1.111-1.084 1.339-.199.228-.399.256-.74.085-.341-.171-1.44-.531-2.743-1.693-1.014-.904-1.7-2.022-1.899-2.363-.199-.341-.022-.525.149-.694.154-.153.341-.399.512-.598.171-.199.228-.341.342-.569.114-.228.057-.427-.028-.598-.085-.171-.77-1.854-1.055-2.538-.278-.666-.56-.575-.77-.585-.199-.01-.427-.011-.655-.011-.228 0-.598.085-.912.427-.313.341-1.198 1.169-1.198 2.849 0 1.68 1.226 3.305 1.397 3.533.171.228 2.413 3.685 5.845 5.166.817.352 1.454.562 1.95.72.82.261 1.567.224 2.158.136.659-.098 2.02-.826 2.305-1.623.285-.796.285-1.48.199-1.623-.085-.144-.313-.228-.655-.399z"/></svg>
                                </a>
                            </div>
                        </div>

                        {/* Navigation Column */}
                        <div className="flex flex-col items-center text-center">
                            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Navigation</h4>
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Column */}
                        <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                            <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8">Contact Us</h4>
                            <div className="flex flex-col gap-5">
                                <a href="mailto:Fedfitbrand@gmail.com" className="flex items-center lg:flex-row-reverse gap-4 group">
                                    <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-red-600 transition-colors">
                                        <svg className="w-4 h-4 fill-white/40 group-hover:fill-red-600 transition-colors" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l12-9.725v15.438h-24v-15.438l12 9.725z"/></svg>
                                    </div>
                                    <span className="text-white/40 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Fedfitbrand@gmail.com</span>
                                </a>
                                <div className="flex items-center lg:flex-row-reverse gap-4 group cursor-pointer">
                                    <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-red-600 transition-colors">
                                        <svg className="w-4 h-4 fill-white/40 group-hover:fill-red-600 transition-colors" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.558-8.903.088-.041 1.977-.971 1.986-.975l-3.473-6.959s-2.023 1.026-2.123 1.078c-4.505 2.348 4.007 19.102 8.512 16.755.1-.052 5.241-2.252 5.241-2.252z"/></svg>
                                    </div>
                                    <span className="text-white/40 group-hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">+91 90727 11358</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-white/20 text-[0.6rem] tracking-[0.4em] uppercase">
                            Designed for elite performance
                        </div>
                        <div className="text-white/20 text-[0.6rem] tracking-[0.4em] uppercase text-center md:text-right">
                            &copy; 2024 FedFit. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </footer>

            {/* ── Inquiry Modal ── */}
            <AnimatePresence>
                {modalOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-black/80 overflow-y-auto"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.2)] p-8 sm:p-10 my-8"
                        >
                            {/* Close Button */}
                            <button 
                                onClick={() => setModalOpen(false)}
                                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            </button>

                            <div className="mb-8">
                                <h2 className="text-red-600 text-xs font-black tracking-[0.4em] uppercase mb-2">Program Inquiry</h2>
                                <h3 className="text-white text-3xl font-black uppercase tracking-tight">{selectedProgram?.title}</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest pl-1">Full Name</label>
                                    <input required name="name" onChange={handleFormChange} placeholder="Enter your name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-red-600/50 outline-none transition-colors" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest pl-1">Age</label>
                                        <input required name="age" type="number" onChange={handleFormChange} placeholder="Years" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-red-600/50 outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest pl-1">Gender</label>
                                        <select required name="gender" onChange={handleFormChange} className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-red-600/50 outline-none transition-colors appearance-none">
                                            <option value="">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest pl-1">Height (cm)</label>
                                        <input required name="height" type="number" onChange={handleFormChange} placeholder="cm" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-red-600/50 outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest pl-1">Weight (kg)</label>
                                        <input required name="weight" type="number" onChange={handleFormChange} placeholder="kg" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-red-600/50 outline-none transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white/40 text-[0.65rem] font-bold uppercase tracking-widest pl-1">Injuries / Health Issues</label>
                                    <div className="grid grid-cols-2 gap-2 mt-2">
                                        {commonInjuries.map(injury => (
                                            <label key={injury} className="flex items-center gap-2 group cursor-pointer">
                                                <input required type="radio" name="injuries" value={injury} onChange={handleFormChange} className="hidden" />
                                                <div className={`px-4 py-2.5 rounded-xl border border-white/10 text-[0.7rem] font-bold uppercase tracking-wider transition-all w-full text-center ${formData.injuries === injury ? 'bg-red-600 text-white border-red-600' : 'bg-white/5 text-white/40 group-hover:bg-white/10'}`}>
                                                    {injury}
                                                </div>
                                            </label>
                                        ))}
                                        <label className="flex items-center gap-2 group cursor-pointer col-span-2">
                                            <input type="radio" name="injuries" value="Other" onChange={handleFormChange} className="hidden" />
                                            <div className={`px-4 py-2.5 rounded-xl border border-white/10 text-[0.7rem] font-bold uppercase tracking-wider transition-all w-full text-center ${formData.injuries === 'Other' ? 'bg-red-600 text-white border-red-600' : 'bg-white/5 text-white/40 group-hover:bg-white/10'}`}>
                                                Other Injuries
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                {formData.injuries === 'Other' && (
                                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-2">
                                        <textarea name="otherInjuries" onChange={handleFormChange} placeholder="Please specify your injuries..." className="w-full h-24 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-red-600/50 outline-none transition-colors resize-none" />
                                    </motion.div>
                                )}

                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 mt-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-[0.2em] text-sm rounded-xl transition-all shadow-[0_0_30px_rgba(239,68,68,0.3)]"
                                >
                                    SEND VIA WHATSAPP
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HomeAnimation;