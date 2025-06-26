import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaTimes } from 'react-icons/fa';
import { profileData } from '../data/profile';
import '../styles/Achievements.css';

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section id="achievements" className="achievements">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Achievements & Awards
        </motion.h2>
        <motion.div
          className="section-line"
          initial={{ width: 0 }}
          whileInView={{ width: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="achievements-grid">
        {profileData.achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedAchievement(achievement)}
          >
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <h3>{achievement.title}</h3>
            <p className="achievement-org">{achievement.organization}</p>
            <p className="achievement-date">{achievement.date}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
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
                onClick={() => setSelectedAchievement(null)}
              >
                <FaTimes />
              </button>
              <div className="modal-header">
                <div className="modal-icon">
                  <FaTrophy />
                </div>
                <h3>{selectedAchievement.title}</h3>
              </div>
              <div className="modal-body">
                <p className="modal-org">{selectedAchievement.organization}</p>
                <p className="modal-date">{selectedAchievement.date}</p>
                <p className="modal-description">{selectedAchievement.description}</p>
                {selectedAchievement.image && (
                  <div className="modal-image">
                    <img src={selectedAchievement.image} alt={selectedAchievement.title} />
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements; 