import { useState } from 'react';
import './App.css';
import Loader from './components/Loader';
import HomeAnimation from './components/HomeAnimation';
import BeginnerGuide from './components/BeginnerGuide';
import Academy from './components/Academy';
import QuickAid from './components/QuickAid';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Apparels from './components/Apparels';

function App() {
  const [phase, setPhase] = useState('loader');

  return (
    <div className="app-container">
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
    </div>
  );
}

export default App;
