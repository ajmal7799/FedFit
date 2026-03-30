import { useEffect } from 'react';

const Landing = ({ onFinish }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            if (onFinish) onFinish();
        }, 3000); // Show landing for 3 seconds then transition to home
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`main-content fade-in overflow-hidden`}>
            <header className="home-header">
                <div className="nav-logo">
                    <span className="red-text">FED</span>FIT
                </div>
                <nav className="top-nav">
                    <a href="#home" className="hover:text-red-600 transition-colors">Home</a>
                    <a href="#about" className="hover:text-red-600 transition-colors">About</a>
                    <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
                    <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
                </nav>
            </header>

            <div className="home-body relative h-screen w-screen bg-black">
                <div className="absolute inset-0 z-0 bg-black"></div>
            </div>
        </div>
    );
};

export default Landing;
