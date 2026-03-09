import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
        <Header darkMode={darkMode} onToggleDark={() => setDarkMode(!darkMode)} />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </div>
  );
}
