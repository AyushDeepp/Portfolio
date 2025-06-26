import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaBuilding, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { profileData } from '../data/profile';
import '../styles/Certifications.css';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const [selectedItem, setSelectedItem] = useState(null);

  const renderContent = () => {
    const items = activeTab === 'certifications' ? profileData.certifications : profileData.internships;
    const Icon = activeTab === 'certifications' ? FaCertificate : FaBuilding;

    return (
      <div className="items-grid">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="item-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedItem(item)}
          >
            <div className="item-icon">
              <Icon />
            </div>
            <h3>{item.title}</h3>
            <p className="item-org">{item.organization || item.company}</p>
            <p className="item-date">{item.date || item.duration}</p>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section id="certifications" className="certifications">
      <div className="section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications & Experience
        </motion.h2>
        <motion.div
          className="section-line"
          initial={{ width: 0 }}
          whileInView={{ width: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="tabs">
        <button
          className={`tab ${activeTab === 'certifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('certifications')}
        >
          <FaCertificate /> Certifications
        </button>
        <button
          className={`tab ${activeTab === 'internships' ? 'active' : ''}`}
          onClick={() => setActiveTab('internships')}
        >
          <FaBuilding /> Internships
        </button>
      </div>

      {renderContent()}

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
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
                onClick={() => setSelectedItem(null)}
              >
                <FaTimes />
              </button>
              <div className="modal-header">
                <div className="modal-icon">
                  {activeTab === 'certifications' ? <FaCertificate /> : <FaBuilding />}
                </div>
                <h3>{selectedItem.title}</h3>
              </div>
              <div className="modal-body">
                <p className="modal-org">{selectedItem.organization || selectedItem.company}</p>
                <p className="modal-date">{selectedItem.date || selectedItem.duration}</p>
                <p className="modal-description">{selectedItem.description}</p>
                {selectedItem.image && (
                  <div className="modal-image">
                    <img src={selectedItem.image} alt={selectedItem.title} />
                  </div>
                )}
                {selectedItem.link && (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    View {activeTab === 'certifications' ? 'Certificate' : 'Company'} <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications; 