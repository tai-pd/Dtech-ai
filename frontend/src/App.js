import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import EnhancedProductDetailPage from './components/EnhancedProductDetailPage';
import BlogDetailPage from './components/BlogDetailPage';
import ChatWidget from './components/ChatWidget';
import './App.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col bg-gray-50">
        <Header onMenuToggle={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
        <div className="flex flex-1">
          <Sidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:slug" element={<EnhancedProductDetailPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <ChatWidget />
      </div>
    </BrowserRouter>
  );
}

export default App;