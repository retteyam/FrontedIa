import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TechSpecs from './components/TechSpecs';
import Footer from './components/Footer';
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TechSpecs />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
