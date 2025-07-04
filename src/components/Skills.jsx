import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaTools, FaChevronRight } from 'react-icons/fa';
import { profileData } from '../data/profile';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');
  const { technical, other } = profileData.skills;

  const categories = [
    {
      id: 'technical',
      title: 'Technical Skills',
      icon: <FaCode />,
      skills: technical
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <FaTools />,
      skills: other.map(skill => ({ name: skill, level: 90 }))
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div
          className="section-line"
          initial={{ width: 0 }}
          whileInView={{ width: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="skills-wrapper">
        <div className="skills-sidebar">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-title">{category.title}</span>
              <FaChevronRight className="arrow-icon" />
            </motion.button>
          ))}
        </div>

        <div className="skills-content">
          <AnimatePresence mode="wait">
            {categories.map((category) => (
              activeCategory === category.id && (
                <motion.div
                  key={category.id}
                  className="skills-grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="skill-header">
                        <h3>{skill.name}</h3>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills; 