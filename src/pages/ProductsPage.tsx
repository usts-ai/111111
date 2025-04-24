import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { products } from '../data/mockData';
import CTASection from '../components/CTASection';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Extraire les catégories uniques des produits
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  // Filtrer les produits en fonction de la catégorie sélectionnée
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

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
            Nos <span className="text-[#00AEEF]">Produits</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez notre gamme complète de solutions de gélification pour professionnels, 
            conçues pour sublimer vos créations culinaires.
          </p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                selectedCategory === null 
                  ? 'bg-[#002D62] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tous
            </motion.button>
            
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  selectedCategory === category 
                    ? 'bg-[#002D62] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grille de produits */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProducts.map((product: Product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              layout
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#00AEEF]/80 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#002D62] mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-[#002D62] text-white rounded-md hover:bg-[#001d40] transition-colors duration-300"
                  >
                    Fiche technique
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-[#00AEEF] text-[#00AEEF] rounded-md hover:bg-[#00AEEF]/10 transition-colors duration-300"
                  >
                    Demander un devis
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Message si aucun produit ne correspond aux filtres */}
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">
              Aucun produit ne correspond à cette catégorie. Veuillez sélectionner une autre catégorie.
            </p>
          </motion.div>
        )}

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Vous avez besoin d'une solution personnalisée ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 46, 98, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#002D62] text-white rounded-md font-medium"
          >
            Contactez notre équipe R&D
          </motion.button>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default ProductsPage;
