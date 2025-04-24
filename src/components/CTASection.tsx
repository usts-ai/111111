import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CTASection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-20 relative overflow-hidden bg-[#002D62]"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF] opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#00AEEF] opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Prêt à Transformer Vos <span className="text-[#00AEEF]">Créations Culinaires</span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Rejoignez les milliers de professionnels qui font confiance à Deltagel pour sublimer leurs desserts et préparations. Nos solutions innovantes vous aideront à vous démarquer.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 174, 239, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#00AEEF] text-white rounded-md font-medium shadow-lg hover:bg-[#0090C5] transition-colors duration-300"
            >
              Demander un devis gratuit
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-[#002D62] transition-colors duration-300"
            >
              Découvrir notre catalogue
            </motion.button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-2">🔒</span>
              <span className="text-gray-200">Engagement sans frais</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-2xl mr-2">⏱️</span>
              <span className="text-gray-200">Réponse sous 24h</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-2xl mr-2">📦</span>
              <span className="text-gray-200">Échantillons gratuits</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.32,118.92,163.89,91.2,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
