import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuoteRequestForm from './QuoteRequestForm';
import { QuoteRequest } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId?: string;
  productName?: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose,
  productId,
  productName
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Fermer le modal en cliquant en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Désactiver le scroll du body quand le modal est ouvert
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Réactiver le scroll du body quand le modal est fermé
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Fermer le modal avec la touche Echap
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (data: QuoteRequest) => {
    // Simuler l'envoi des données vers une API
    console.log('Données du devis:', data);
    // Fermer le modal après un délai pour laisser le temps au message de succès de s'afficher
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          style={{ backdropFilter: 'blur(3px)' }}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b bg-white rounded-t-xl">
              <h2 className="text-xl font-bold text-[#002D62]">
                Demande de devis
                {productName && <span className="ml-1">- {productName}</span>}
              </h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fermer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <QuoteRequestForm 
                onSubmit={handleSubmit} 
                initialProductId={productId} 
                isModal={true}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
