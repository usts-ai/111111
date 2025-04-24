import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import QuoteRequestForm from '../components/QuoteRequestForm';
import { QuoteRequest } from '../types';

const QuotePage: React.FC = () => {
  const location = useLocation();
  const productId = location.state?.productId;

  const handleSubmit = (data: QuoteRequest) => {
    // Dans un environnement réel, nous enverrions ces données à une API
    console.log('Données du formulaire soumises:', data);
    // On pourrait également rediriger l'utilisateur ou afficher un message de succès
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#002D62] mb-4">
            Demande de <span className="text-[#00AEEF]">Devis</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Complétez ce formulaire pour recevoir une offre personnalisée adaptée à vos besoins spécifiques.
          </p>
        </motion.div>

        <QuoteRequestForm onSubmit={handleSubmit} initialProductId={productId} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-bold text-[#002D62] mb-4">Pourquoi choisir nos produits ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#002D62]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#002D62] mb-2">Qualité Supérieure</h3>
              <p className="text-gray-600">
                Nos produits sont rigoureusement sélectionnés pour vous garantir une qualité et une fraîcheur exceptionnelles.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#002D62]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#002D62] mb-2">Livraison Rapide</h3>
              <p className="text-gray-600">
                Notre système logistique optimisé nous permet de vous livrer rapidement tout en préservant la fraîcheur des produits.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#002D62]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#002D62] mb-2">Support Personnalisé</h3>
              <p className="text-gray-600">
                Notre équipe commerciale est à votre disposition pour vous conseiller et répondre à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuotePage;
