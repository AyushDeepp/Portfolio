import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPython, FaCode, FaLaptopCode } from 'react-icons/fa';
import { profileData } from '../data/profile';
import '../styles/Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaLaptopCode /> },
    { id: 'python', name: 'Python Projects', icon: <FaPython /> },
    { id: 'fullstack', name: 'Full Stack Projects', icon: <FaCode /> }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? profileData.projects 
    : profileData.projects.filter(project => 
        activeCategory === 'python' 
          ? project.technologies.some(tech => tech.toLowerCase().includes('python'))
          : project.technologies.some(tech => 
              ['react', 'node', 'express', 'mongodb', 'sql'].includes(tech.toLowerCase())
            )
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="section-line"
          initial={{ width: 0 }}
          whileInView={{ width: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="projects-wrapper">
        <div className="category-tabs">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </motion.button>
          ))}
        </div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={projectVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img 
                  src={project.image || `https://picsum.photos/400/300?random=${index}`} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/400/300?random=${index}`;
                  }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <div className="modal-links">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProject.image || `https://picsum.photos/800/400?random=${filteredProjects.findIndex(p => p.title === selectedProject.title)}`}
                  alt={selectedProject.title}
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/800/400?random=${filteredProjects.findIndex(p => p.title === selectedProject.title)}`;
                  }}
                />
                <p>{selectedProject.description}</p>
                <div className="modal-tech">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 