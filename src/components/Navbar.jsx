import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaGraduationCap, FaCode, FaProjectDiagram, FaTrophy, FaCertificate, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'education', 'skills', 'projects', 'achievements', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.nav-content')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '#home', icon: <FaHome /> },
    { name: 'Education', path: '#education', icon: <FaGraduationCap /> },
    { name: 'Skills', path: '#skills', icon: <FaCode /> },
    { name: 'Projects', path: '#projects', icon: <FaProjectDiagram /> },
    { name: 'Achievements', path: '#achievements', icon: <FaTrophy /> },
    { name: 'Certifications', path: '#certifications', icon: <FaCertificate /> },
    { name: 'Contact', path: '#contact', icon: <FaEnvelope /> }
  ];

  const handleNavClick = (path, sectionName) => {
    setIsOpen(false);
    setActiveSection(sectionName);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mobileMenuVariants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">
            <span className="logo-text">Portfolio</span>
            <span className="logo-dot"></span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
            <motion.ul
          className="nav-links desktop-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.path}
                className={activeSection === link.name.toLowerCase() ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.path, link.name.toLowerCase());
                }}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-text">{link.name}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Toggle */}
        <motion.div
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="mobile-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                className="mobile-menu"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="mobile-menu-header">
                  <h3>Navigation</h3>
                  <p>Choose a section to explore</p>
                </div>
                <ul className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={link.path}
                        className={activeSection === link.name.toLowerCase() ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                          handleNavClick(link.path, link.name.toLowerCase());
                    }}
                  >
                        <span className="mobile-nav-icon">{link.icon}</span>
                        <span className="mobile-nav-text">{link.name}</span>
                        <span className="mobile-nav-indicator"></span>
                  </a>
                </motion.li>
              ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 