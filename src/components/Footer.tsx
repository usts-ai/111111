import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#002D62] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Logo et À propos */}
          <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              Delta<span className="text-[#00AEEF]">gel</span>
            </Link>
            <p className="text-gray-300 mt-4 mb-6">
              Depuis 1985, Deltagel est le partenaire privilégié des professionnels de la restauration en fournissant des solutions de gélification innovantes et de haute qualité.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`https://${social}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white text-[#002D62] p-2 rounded-full inline-flex items-center justify-center w-10 h-10 transition-colors hover:bg-[#00AEEF] hover:text-white"
                >
                  <span className="sr-only">{social}</span>
                  {/* Utilisation de simples symboles emoji pour éviter les problèmes d'icônes */}
                  {social === 'facebook' && '👍'}
                  {social === 'twitter' && '🐦'}
                  {social === 'instagram' && '📷'}
                  {social === 'linkedin' && '💼'}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00AEEF] pb-2">Navigation</h3>
            <ul className="space-y-2">
              {['Accueil', 'Produits', 'À Propos', 'Témoignages', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transition-all"
                >
                  <Link 
                    to={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="text-gray-300 hover:text-[#00AEEF] transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Produits */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00AEEF] pb-2">Nos produits</h3>
            <ul className="space-y-2">
              {['Gelées Premium', 'Préparations Professionnelles', 'Solutions Décoratives', 'Produits Sans Allergènes', 'Innovations Culinaires'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="transition-all"
                >
                  <Link 
                    to="/produits"
                    className="text-gray-300 hover:text-[#00AEEF] transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#00AEEF] pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span className="text-gray-300">123 Avenue de la Gastronomie<br />75001 Paris, France</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <a href="tel:+33123456789" className="text-gray-300 hover:text-[#00AEEF]">+33 1 23 45 67 89</a>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📧</span>
                <a href="mailto:contact@deltagel.fr" className="text-gray-300 hover:text-[#00AEEF]">contact@deltagel.fr</a>
              </li>
              <li className="flex items-center">
                <span className="mr-3">⏰</span>
                <span className="text-gray-300">Lun - Ven: 9h00 - 18h00</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 my-8" />

        {/* Copyright et mentions légales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} Deltagel. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="hover:text-[#00AEEF] transition-colors">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-[#00AEEF] transition-colors">Politique de confidentialité</Link>
            <Link to="/cgv" className="hover:text-[#00AEEF] transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
