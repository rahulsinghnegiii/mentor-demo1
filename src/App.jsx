import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturedMentorsSection from './components/FeaturedMentorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FinalCTASection from './components/FinalCTASection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <HowItWorksSection />
      <FeaturedMentorsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </div>
  );
}

export default App;