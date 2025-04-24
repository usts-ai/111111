import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const formFields = [
    { id: 'nom', label: 'Nom', type: 'text', placeholder: 'Votre nom' },
    { id: 'entreprise', label: 'Entreprise', type: 'text', placeholder: 'Nom de votre entreprise' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'votre.email@exemple.fr' },
    { id: 'telephone', label: 'Téléphone', type: 'tel', placeholder: 'Votre numéro de téléphone' },
    { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Comment pouvons-nous vous aider ?' },
  ];

  return (
    <section 
      ref={ref} 
      className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#002D62] opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-4">
            Contactez <span className="text-[#00AEEF]">Nos Experts</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
            et vous accompagner dans vos projets culinaires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulaire de contact */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <motion.h3 
              variants={itemVariants} 
              className="text-2xl font-semibold text-[#002D62] mb-6"
            >
              Envoyez-nous un message
            </motion.h3>
            
            <form className="space-y-5">
              {formFields.map((field, index) => (
                <motion.div key={field.id} variants={itemVariants} className="w-full">
                  <label htmlFor={field.id} className="block text-gray-700 mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all"
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent transition-all"
                    />
                  )}
                </motion.div>
              ))}
              
              <motion.div variants={itemVariants} className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0px 8px 15px rgba(0, 174, 239, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-[#002D62] text-white rounded-md font-medium hover:bg-[#001d40] transition-colors duration-300"
                >
                  Envoyer
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#002D62] mb-6">
                Nos coordonnées
              </h3>
              <ul className="space-y-5">
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <span className="flex-shrink-0 text-2xl text-[#00AEEF]">📍</span>
                  <div>
                    <h4 className="font-medium text-[#002D62]">Adresse</h4>
                    <p className="text-gray-600">123 Avenue de la Gastronomie, 75001 Paris, France</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <span className="flex-shrink-0 text-2xl text-[#00AEEF]">📞</span>
                  <div>
                    <h4 className="font-medium text-[#002D62]">Téléphone</h4>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <span className="flex-shrink-0 text-2xl text-[#00AEEF]">📧</span>
                  <div>
                    <h4 className="font-medium text-[#002D62]">Email</h4>
                    <p className="text-gray-600">contact@deltagel.fr</p>
                  </div>
                </motion.li>
                
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <span className="flex-shrink-0 text-2xl text-[#00AEEF]">⏰</span>
                  <div>
                    <h4 className="font-medium text-[#002D62]">Horaires</h4>
                    <p className="text-gray-600">Lundi - Vendredi: 9h00 - 18h00</p>
                  </div>
                </motion.li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#002D62] mb-6">
                Service commercial
              </h3>
              <p className="text-gray-600 mb-4">
                Pour toute demande de devis ou information sur nos produits, notre équipe commerciale est à votre disposition.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 174, 239, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#00AEEF] text-white rounded-md font-medium hover:bg-[#0090C5] transition-colors duration-300"
              >
                Contacter un commercial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
