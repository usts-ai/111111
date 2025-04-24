import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { StatItem, HistoryItem, ValueItem } from '../types';

interface AboutSectionProps {
  stats: StatItem[];
  historyTimeline: HistoryItem[];
  companyValues: ValueItem[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ stats, historyTimeline, companyValues }) => {
  const statsRef = useRef(null);
  const historyRef = useRef(null);
  const valuesRef = useRef(null);
  
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const historyInView = useInView(historyRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="py-16 bg-white">
      {/* Section Statistiques */}
      <div 
        ref={statsRef}
        className="container mx-auto px-4 mb-20"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-4">
            Deltagel <span className="text-[#00AEEF]">en Chiffres</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Des décennies d'expertise au service de l'excellence culinaire
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-4xl mb-3 text-[#00AEEF]">{stat.icon}</div>
              <motion.div
                initial={{ scale: 1 }}
                whileInView={{ 
                  scale: [1, 1.2, 1],
                  transition: { 
                    duration: 1,
                    times: [0, 0.5, 1],
                    delay: 0.3 + (0.1 * index)
                  }
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-[#002D62]">{stat.value}</h3>
              </motion.div>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Historique */}
      <div 
        ref={historyRef}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={historyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-4">
              Notre <span className="text-[#00AEEF]">Histoire</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Une success story française dans le domaine de l'innovation culinaire
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Ligne de temps verticale */}
            <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-1 bg-[#00AEEF] mx-auto"></div>

            {/* Événements de l'historique */}
            {historyTimeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={historyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className={`mb-12 flex flex-col ${
                  index % 2 === 0 
                    ? 'md:flex-row items-start' 
                    : 'md:flex-row-reverse items-start'
                }`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] w-6 h-6 rounded-full bg-[#002D62] border-4 border-[#00AEEF] z-10"></div>
                
                {/* Contenu */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 md:text-right pl-10 md:pl-0' : 'md:pl-10 pl-10'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#00AEEF] text-white font-bold mb-4">{item.year}</span>
                    <h3 className="text-xl font-bold text-[#002D62] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    
                    {item.image && (
                      <motion.div 
                        className="mt-4 overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Valeurs */}
      <div 
        ref={valuesRef} 
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-4">
              Nos <span className="text-[#00AEEF]">Valeurs</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Ce qui guide chacune de nos décisions et innovations au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <motion.div
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-5xl mb-4 mx-auto"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#002D62] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
