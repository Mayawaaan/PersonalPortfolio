import React, { useState } from 'react';
import certificationsData from '../data/certificationsData';
import Modal from './Modal';
import { motion } from 'framer-motion';

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div 
              key={cert.id} 
              onClick={() => openModal(cert)} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer block bg-gray-50 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800 group-hover:text-emerald-500 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-gray-500">Issued by: {cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedCert && (
          <div>
            <h3 className="text-2xl font-bold mb-4">{selectedCert.title}</h3>
            <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto object-contain max-h-[75vh] rounded" />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certifications;