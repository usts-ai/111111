import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Produits', path: '/produits' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Témoignages', path: '/temoignages' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleQuoteRequest = () => {
    navigate('/devis');
    setIsMenuOpen(false); // Ferme le menu mobile si ouvert
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <Link to="/" className="text-2xl md:text-3xl font-bold text-[#002D62]">
            <span className="flex items-center">
              <motion.span
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                className="mr-2 text-3xl"
              >
                ❄️
              </motion.span>
              Delta<span className="text-[#00AEEF]">gel</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item.path}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  scrolled ? 'text-[#002D62] hover:text-[#00AEEF]' : 'text-[#002D62] hover:text-[#00AEEF]'
                } transition-colors duration-300`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 px-4 py-2 bg-[#00AEEF] text-white rounded-md font-medium shadow-md hover:bg-[#0090C5] transition-colors duration-300"
            onClick={handleQuoteRequest}
          >
            Demander un devis
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#002D62] p-2"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className="px-3 py-2 rounded-md text-base font-medium text-[#002D62] hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                className="mt-3 w-full px-4 py-2 bg-[#00AEEF] text-white rounded-md font-medium shadow-md hover:bg-[#0090C5] transition-colors duration-300"
                onClick={handleQuoteRequest}
              >
                Demander un devis
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
