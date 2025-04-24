import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import { stats, historyTimeline, companyValues, teamMembers } from '../data/mockData';

const AboutPage: React.FC = () => {
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
            À Propos de <span className="text-[#00AEEF]">Deltagel</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez notre histoire, nos valeurs et l'équipe passionnée qui fait de Deltagel
            le leader des solutions de gélification pour professionnels.
          </p>
        </motion.div>

        {/* Notre Histoire */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#002D62] mb-6">Notre Histoire</h2>
              <p className="text-gray-600 mb-6">
                Fondée en 1985 par Jean Delorme, Deltagel est née d'une vision audacieuse : 
                révolutionner les agents gélifiants traditionnels pour offrir aux professionnels 
                de la restauration des solutions plus performantes, plus fiables et plus faciles à utiliser.
              </p>
              <p className="text-gray-600 mb-6">
                Au fil des années, notre entreprise a connu une croissance constante, portée par 
                notre engagement indéfectible envers l'innovation et l'excellence. Nous avons 
                développé des brevets exclusifs et étendu notre présence à l'international, tout en 
                conservant notre savoir-faire artisanal et notre culture d'entreprise familiale.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, Deltagel est reconnu comme le partenaire privilégié des chefs et artisans 
                du monde entier, qui font confiance à nos produits pour sublimer leurs créations culinaires.
              </p>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ rotate: -5 }}
                whileInView={{ rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="rounded-xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="L'usine Deltagel" 
                  className="w-full h-auto"
                />
              </motion.div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00AEEF] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#002D62] rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section Chiffres clés, Histoire complète et Valeurs */}
      <AboutSection 
        stats={stats} 
        historyTimeline={historyTimeline} 
        companyValues={companyValues} 
      />

      {/* Notre équipe */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-4">
              Notre <span className="text-[#00AEEF]">Équipe</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Des experts passionnés qui œuvrent chaque jour pour vous offrir l'excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-3">
                        {['linkedin', 'twitter', 'email'].map((social, idx) => (
                          <motion.a
                            key={idx}
                            href="#"
                            whileHover={{ y: -5, scale: 1.2 }}
                            className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#002D62]"
                          >
                            {social === 'linkedin' && '💼'}
                            {social === 'twitter' && '🐦'}
                            {social === 'email' && '✉️'}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#002D62] mb-1">{member.name}</h3>
                  <p className="text-[#00AEEF]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Nos partenaires et certifications */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-4">
              Nos <span className="text-[#00AEEF]">Partenaires</span> et Certifications
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Des collaborations stratégiques et des standards d'excellence reconnus
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-5xl text-gray-400 flex items-center justify-center h-16">
                  {/* Emoji placeholders pour représenter les logos partenaires/certifications */}
                  {index === 0 && '🏆'}
                  {index === 1 && '🔍'}
                  {index === 2 && '🌿'}
                  {index === 3 && '📊'}
                  {index === 4 && '🛡️'}
                  {index === 5 && '📝'}
                  {index === 6 && '🔒'}
                  {index === 7 && '🧪'}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 46, 98, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#002D62] text-white rounded-md font-medium"
            >
              Devenir partenaire
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
