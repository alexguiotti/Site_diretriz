import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import TechSpotlight from './components/TechSpotlight';
import Suppliers from './components/Suppliers';
import About from './components/About';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import WhatsAppButton from './components/WhatsAppButton';
import { Loader2 } from 'lucide-react';
import { api } from './services/api';

// Lazy load admin components to improve initial performance
const DashboardLayout = lazy(() => import('./components/DashboardLayout'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const SuppliersManager = lazy(() => import('./components/SuppliersManager'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center gap-4">
      <Loader2 className="w-12 h-12 text-primary animate-spin" />
      <p className="text-slate-600 font-medium">Carregando sistema...</p>
    </div>
  </div>
);

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState('overview');

  // Check for existing session
  React.useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    api.logout();
    setIsLoggedIn(false);
    setActiveView('overview');
  };

  if (isLoggedIn) {
    return (
      <Suspense fallback={<PageLoader />}>
        <DashboardLayout
          onLogout={handleLogout}
          activeView={activeView}
          onViewChange={setActiveView}
        >
          {activeView === 'overview' ? <Dashboard /> : <SuppliersManager />}
        </DashboardLayout>
      </Suspense>
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
