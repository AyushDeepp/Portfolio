import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
  FaFileAlt,
} from "react-icons/fa";
import { profileData } from "../data/profile";
import "../styles/Home.css";

const Home = () => {
  // Typewriter effect for name
  const fullName = profileData.name;
  const [typedName, setTypedName] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < fullName.length) {
        setTypedName((prev) => prev + fullName[index]);
        setIndex(index + 1);
      } else {
        setTimeout(() => {
          setTypedName("");
          setIndex(0);
        }, 1200);
      }
    }, 120);
    return () => clearTimeout(timeout);
  }, [index, fullName]);

  const socialLinks = [
    { icon: <FaGithub />, url: profileData.social.github, label: "GitHub" },
    {
      icon: <FaLinkedin />,
      url: profileData.social.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: profileData.social.instagram,
      label: "Instagram",
    },
    { icon: <FaCode />, url: profileData.social.codolio, label: "Codolio" },
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
            Hi, I'm <span className="highlight typewriter">{typedName}</span>
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

          <div className="home-buttons">
            <motion.a
              href={profileData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileAlt /> View Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
        {/* Remove the home-background shapes */}
        <div className="home-background" />
      </div>
    </section>
  );
};

export default Home;
