import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-darker/90 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white tracking-tighter">
          Tipape<span className="text-primary">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/254715765561?text=Hello%20Tipape%2C%20I%20saw%20your%20site%20and%20skills%20and%20I%20wanna%20HIRE%20you%20please%20reach%20out"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/10 transition-colors"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-darker border-b border-gray-800 p-6 flex flex-col gap-4 md:hidden animate-fade-in shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-white py-2 block border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
              {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/254715765561?text=Hello%20Tipape%2C%20I%20saw%20your%20site%20and%20skills%20and%20I%20wanna%20HIRE%20you%20please%20reach%20out"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/10 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;