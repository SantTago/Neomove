
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#2eb3ff] selection:text-[#0a0a0a]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
