import { FaGithub, FaLinkedin, FaInstagram, FaCode } from 'react-icons/fa';
import { profileData } from '../data/profile';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaGithub />, url: profileData.social.github, label: 'GitHub' },
    { icon: <FaLinkedin />, url: profileData.social.linkedin, label: 'LinkedIn' },
    { icon: <FaInstagram />, url: profileData.social.instagram, label: 'Instagram' },
    { icon: <FaCode />, url: profileData.social.codolio, label: 'Codolio' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="footer-copyright">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 