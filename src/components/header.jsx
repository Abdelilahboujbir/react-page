
import '../App.css'
import logo from '../assets/logo.png'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'h-16 backdrop-blur-lg bg-black/70' 
            : 'h-20 backdrop-blur-md bg-black/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <a href="/">
                <img 
                src={logo} 
                alt="Immobati" 
                className={`transition-all duration-500 ${
                  isScrolled ? 'h-8' : 'h-12'
                } w-auto object-contain`}
              />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative text-white font-medium tracking-wide transition-all duration-300 hover:text-yellow-400 group py-2"
                >
                  {link.name}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: '#FFD700' }}
                  ></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300"
              style={{ color: isMobileMenuOpen ? '#FFD700' : 'white' }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        ></div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 transform transition-transform duration-500 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full backdrop-blur-xl bg-black/80 border-l border-white/10">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <img 
              src={logo} 
              alt="Immobati" 
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col p-6 space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={toggleMobileMenu}
                className="relative text-white text-lg font-medium tracking-wide transition-all duration-300 hover:text-yellow-400 group py-3 border-b border-white/10 last:border-b-0"
              >
                {link.name}
                <span 
                  className="absolute bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#FFD700' }}
                ></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
            <div className="text-center text-sm text-gray-400">
              <p className="font-light">Premium Real Estate</p>
              <p className="text-yellow-400 font-medium">Immobatti</p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Header;