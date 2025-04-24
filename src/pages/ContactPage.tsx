import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  const mapRef = useRef(null);
  const isMapInView = useInView(mapRef, { once: true, amount: 0.2 });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#002D62] mb-4">
            Contactez <span className="text-[#00AEEF]">Deltagel</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
            et vous accompagner dans vos projets culinaires.
          </p>
        </motion.div>

        {/* Localisation avec carte */}
        <div ref={mapRef} className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#002D62] mb-6 text-center"
          >
            Où Nous <span className="text-[#00AEEF]">Trouver</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-lg"
          >
            {/* Placeholder pour la carte - En production, on intégrerait Google Maps ou autre */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold text-[#002D62] mb-2">Siège social Deltagel</h3>
                <p className="text-gray-600">123 Avenue de la Gastronomie, 75001 Paris, France</p>
                <button className="mt-4 px-4 py-2 bg-[#002D62] text-white rounded-md hover:bg-[#001d40] transition-colors duration-300">
                  Ouvrir dans Google Maps
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Nos bureaux à travers le monde */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-[#002D62] mb-6 text-center">
            Nos Bureaux à <span className="text-[#00AEEF]">l'International</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: 'Paris', country: 'France', address: '123 Avenue de la Gastronomie, 75001', phone: '+33 1 23 45 67 89', email: 'paris@deltagel.fr' },
              { city: 'Madrid', country: 'Espagne', address: 'Calle Gran Vía 123, 28013', phone: '+34 91 234 56 78', email: 'madrid@deltagel.fr' },
              { city: 'Milan', country: 'Italie', address: 'Via Monte Napoleone 10, 20121', phone: '+39 02 1234 5678', email: 'milan@deltagel.fr' },
              { city: 'Berlin', country: 'Allemagne', address: 'Kurfürstendamm 234, 10719', phone: '+49 30 1234 5678', email: 'berlin@deltagel.fr' },
              { city: 'Londres', country: 'Royaume-Uni', address: '10 Oxford Street, W1D 1BS', phone: '+44 20 1234 5678', email: 'london@deltagel.fr' },
              { city: 'New York', country: 'États-Unis', address: '350 Fifth Avenue, NY 10118', phone: '+1 212 123 4567', email: 'newyork@deltagel.fr' },
            ].map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#002D62] mb-2">
                  {office.city}, <span className="font-normal">{office.country}</span>
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0">📍</span>
                    <span>{office.address}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0">📞</span>
                    <span>{office.phone}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="flex-shrink-0">📧</span>
                    <span>{office.email}</span>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full py-2 border border-[#002D62] text-[#002D62] rounded-md hover:bg-[#002D62] hover:text-white transition-colors duration-300"
                >
                  Plus d'informations
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Formulaire de contact */}
      <ContactSection />

      {/* FAQ section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#002D62] mb-4">
            Questions <span className="text-[#00AEEF]">Fréquentes</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Trouvez rapidement les réponses à vos questions les plus courantes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {[
            { 
              question: 'Quels sont les délais de livraison pour les produits Deltagel ?', 
              answer: 'Nos délais de livraison standard sont de 3 à 5 jours ouvrés en France métropolitaine et de 5 à 10 jours pour les livraisons internationales. Pour les commandes urgentes, nous proposons également des options de livraison express sous 24h à 48h selon votre localisation.' 
            },
            { 
              question: 'Comment puis-je commander des échantillons de vos produits ?', 
              answer: 'Vous pouvez demander des échantillons gratuits directement depuis notre site web en remplissant le formulaire dédié ou en contactant notre service commercial par téléphone ou email. Pour les professionnels, nous proposons également des kits de découverte comprenant une sélection de nos produits les plus populaires.' 
            },
            { 
              question: "Vos produits sont-ils adaptés aux régimes alimentaires spécifiques ?", 
              answer: "Nous proposons une gamme complète de produits adaptés à différents régimes alimentaires et restrictions : sans gluten, végétaliens, casher, halal, etc. Chaque produit dispose d'une fiche technique détaillée indiquant sa composition exacte et les allergènes potentiels. N'hésitez pas à consulter notre équipe pour des recommandations personnalisées."
            },
            { 
              question: "Proposez-vous des formations pour l'utilisation de vos produits ?", 
              answer: "Oui, nous organisons régulièrement des sessions de formation dans nos locaux et proposons également des formations sur site pour les équipes professionnelles. Ces formations sont dispensées par nos chefs experts et peuvent être adaptées à vos besoins spécifiques. Consultez notre calendrier ou contactez-nous pour organiser une session personnalisée."
            },
            { 
              question: 'Quelles sont les conditions de conservation de vos produits ?', 
              answer: "La plupart de nos produits se conservent à température ambiante, dans un endroit sec et à l'abri de la lumière. Certaines préparations spécifiques peuvent nécessiter une conservation au réfrigérateur. Toutes les informations détaillées sont indiquées sur l'emballage et dans les fiches techniques disponibles en téléchargement sur notre site."
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg font-medium text-[#002D62]">{item.question}</h3>
                  <span className="text-[#00AEEF] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-6 bg-white">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 46, 98, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#002D62] text-white rounded-md font-medium hover:bg-[#001d40] transition-colors duration-300"
          >
            Contactez notre support
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
