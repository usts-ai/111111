import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/mockData';
import CTASection from '../components/CTASection';

const TestimonialsPage: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#002D62] mb-4">
            Ce Que Disent <span className="text-[#00AEEF]">Nos Clients</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez les témoignages de professionnels qui ont choisi Deltagel pour 
            leurs besoins en solutions de gélification.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Décorations */}
          <div className="absolute -top-10 -left-10 text-8xl text-[#00AEEF] opacity-10">"</div>
          <div className="absolute -bottom-10 -right-10 text-8xl text-[#00AEEF] opacity-10">"</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all ${
                  expandedId === testimonial.id ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
                onClick={() => toggleExpand(testimonial.id)}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 mr-4">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#00AEEF]"
                      />
                    </div>
                    <div>
                      <h3 className="text-[#002D62] font-semibold text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <p className="text-gray-600 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    <AnimatePresence>
                      {expandedId === testimonial.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6"
                        >
                          <p className="text-gray-600 italic leading-relaxed mb-4">
                            "Suite au témoignage... Nous avons également été impressionnés par le service client exceptionnel et la réactivité de l'équipe technique face à nos demandes spécifiques. Leur capacité à comprendre nos besoins et à proposer des solutions sur mesure a fait une réelle différence dans notre travail quotidien."
                          </p>
                          <p className="text-gray-600 italic leading-relaxed">
                            "Je recommande vivement Deltagel à tous les professionnels recherchant des produits de gélification de haute qualité, fiables et innovants."
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 text-[#00AEEF] font-medium flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(testimonial.id);
                      }}
                    >
                      {expandedId === testimonial.id ? 'Lire moins' : 'Lire plus'}
                      <span className="ml-1">
                        {expandedId === testimonial.id ? '↑' : '↓'}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soumettez votre témoignage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mt-20 bg-gradient-to-br from-[#002D62] to-[#001d40] rounded-xl shadow-xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Partagez Votre <span className="text-[#00AEEF]">Expérience</span>
          </h2>
          <p className="text-gray-200 mb-6 text-center">
            Vous êtes client Deltagel et souhaitez partager votre expérience ? 
            Nous serions ravis de vous entendre !
          </p>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-200 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                placeholder="Votre nom"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent text-white transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="enterprise" className="block text-gray-200 mb-2">
                Entreprise et fonction
              </label>
              <input
                type="text"
                id="enterprise"
                placeholder="Votre entreprise et votre fonction"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent text-white transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="testimonial" className="block text-gray-200 mb-2">
                Votre témoignage
              </label>
              <textarea
                id="testimonial"
                placeholder="Partagez votre expérience avec Deltagel..."
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent text-white transition-all"
              ></textarea>
            </div>
            
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0px 8px 15px rgba(0, 174, 239, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-[#00AEEF] text-white rounded-md font-medium hover:bg-[#0090C5] transition-colors duration-300"
              >
                Envoyer mon témoignage
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20">
        <CTASection />
      </div>
    </div>
  );
};

export default TestimonialsPage;
