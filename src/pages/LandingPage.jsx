import React, { useState, useEffect } from 'react';
import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Sections/Hero';
import Features from '../components/Sections/Features';
import HowItWorks from '../components/Sections/HowItWorks';
import Templates from '../components/Sections/Templates';
import Pricing from '../components/Sections/Pricing';
import Footer from '../components/Layout/Footer';
const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  );
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero />
      <Features />
      <HowItWorks />
      <Templates />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;