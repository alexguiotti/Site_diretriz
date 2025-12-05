import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import TechSpotlight from './components/TechSpotlight';
import Suppliers from './components/Suppliers';
import About from './components/About';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';
import WhatsAppButton from './components/WhatsAppButton';

import SuppliersManager from './components/SuppliersManager';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState('overview');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveView('overview');
  };

  if (isLoggedIn) {
    return (
      <DashboardLayout
        onLogout={handleLogout}
        activeView={activeView}
        onViewChange={setActiveView}
      >
        {activeView === 'overview' ? <Dashboard /> : <SuppliersManager />}
      </DashboardLayout>
    );
  }

  return (
    <div className="min-h-screen text-slate-100">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />

      <main>
        <Hero />
        <Stats />
        <Features />
        <TechSpotlight />
        <Suppliers />
        <About />
      </main>

      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />

      <WhatsAppButton />
    </div>
  );
}

export default App;
