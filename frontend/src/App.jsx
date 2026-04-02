import { useState, useEffect, useRef } from 'react';
import './App.css';
import Loader from './components/Loader';
import HomeAnimation from './components/HomeAnimation';
import BeginnerGuide from './components/BeginnerGuide';
import Academy from './components/Academy';
import QuickAid from './components/QuickAid';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Apparels from './components/Apparels';
import ExerciseLibrary from './components/ExerciseLibrary';
import LifeCare from './components/LifeCare';



function App() {
  const [phase, setPhase] = useState('loader');
  const containerRef = useRef(null);

  useEffect(() => {
    // Scroll both the container and window to top for consistency
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
    window.scrollTo(0, 0);
  }, [phase]);

  return (
    <div className="app-container" ref={containerRef}>
      {phase === 'loader' && (
        <Loader onFinish={() => setPhase('home')} />
      )}

      {phase === 'home' && (
        <HomeAnimation onNavigate={(target) => setPhase(target)} />
      )}

      {phase === 'beginner-guide' && (
        <BeginnerGuide onBack={() => setPhase('home')} />
      )}

      {phase === 'academy' && (
        <Academy onBack={() => setPhase('home')} />
      )}

      {phase === 'quick-aid' && (
        <QuickAid onBack={() => setPhase('home')} />
      )}

      {phase === 'contact-us' && (
        <ContactUs onBack={() => setPhase('home')} />
      )}

      {phase === 'about-us' && (
        <AboutUs onBack={() => setPhase('home')} />
      )}

      {phase === 'apparels' && (
        <Apparels onBack={() => setPhase('home')} />
      )}
      
      {phase === 'exercise-library' && (
        <ExerciseLibrary onBack={() => setPhase('home')} />
      )}
      
      {phase === 'lifecare' && (
        <LifeCare onBack={() => setPhase('home')} />
      )}
    </div>


  );
}

export default App;
