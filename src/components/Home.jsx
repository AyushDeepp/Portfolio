import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from 'react-icons/fa';
import { profileData } from '../data/profile';
import '../styles/Home.css';

const Home = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: profileData.social.github, label: 'GitHub' },
    { icon: <FaLinkedin />, url: profileData.social.linkedin, label: 'LinkedIn' },
    { icon: <FaInstagram />, url: profileData.social.instagram, label: 'Instagram' },
    { icon: <FaCode />, url: profileData.social.codolio, label: 'Codolio' }
  ];

  return (
    <section id="home" className="home">
      <div className="home-container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="home-title">
            Hi, I'm <span className="highlight">{profileData.name}</span>
          </h1>
          <h2 className="home-subtitle">{profileData.title}</h2>
          <p className="home-description">{profileData.about}</p>

          <div className="home-social">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="home-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home; 