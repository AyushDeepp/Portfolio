import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import { profileData } from '../data/profile';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
        <motion.div
          className="section-line"
          initial={{ width: 0 }}
          whileInView={{ width: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="timeline">
        {profileData.education.map((edu, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <div className="timeline-icon">
                <FaGraduationCap />
              </div>
              <div className="timeline-date">
                <FaCalendarAlt />
                <span>{edu.year}</span>
              </div>
              <div className="timeline-school">
                <FaUniversity />
                <span>{edu.school}</span>
              </div>
              <h3 className="timeline-title">{edu.degree}</h3>
              <p className="timeline-description">{edu.description}</p>
              <div className="timeline-arrow"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education; 