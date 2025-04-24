import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { productCategories, catalogProducts } from '../data/productCatalog';
import CTASection from '../components/CTASection';
import QuoteModal from '../components/QuoteModal';
import { useNavigate } from 'react-router-dom';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  const navigate = useNavigate();
  
  // Filtrer les produits en fonction de la catégorie sélectionnée et du terme de recherche
  useEffect(() => {
    let filtered = catalogProducts;
    
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.brand?.toLowerCase().includes(term) || 
        product.origin?.toLowerCase().includes(term)
      );
    }
    
    setDisplayProducts(filtered);
  }, [selectedCategory, searchTerm]);

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

  const getCategoryName = (categoryId: string): string => {
    const category = productCategories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };
  
  const handleQuoteRequest = (product: Product) => {
    setSelectedProduct(product);
    setIsQuoteModalOpen(true);
  };
  
  const handleNavigateToQuote = () => {
    navigate('/devis');
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#002D62] mb-4">
            Notre <span className="text-[#00AEEF]">Catalogue</span> de Produits
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez notre sélection de produits de la mer de haute qualité pour les professionnels de la restauration.
          </p>
        </motion.div>

        {/* Barre de recherche */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent shadow-sm"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Catégories de produits - mise en forme horizontale avec cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedCategory(null)}
              className={`cursor-pointer rounded-xl overflow-hidden shadow-md transition-all ${
                selectedCategory === null 
                  ? 'ring-2 ring-[#00AEEF] shadow-lg' 
                  : 'hover:shadow-lg'
              }`}
            >
              <div className="bg-gradient-to-br from-[#002D62] to-[#00AEEF] h-24 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Tous</span>
              </div>
            </motion.div>
            
            {productCategories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer rounded-xl overflow-hidden shadow-md transition-all ${
                  selectedCategory === category.id
                    ? 'ring-2 ring-[#00AEEF] shadow-lg' 
                    : 'hover:shadow-lg'
                }`}
              >
                <div className="h-24 relative">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white font-bold text-center px-2 text-md sm:text-lg">
                      {category.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Résumé de la catégorie sélectionnée */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8 bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold text-[#002D62] mb-2">
              {getCategoryName(selectedCategory)}
            </h2>
            <p className="text-gray-600">
              {productCategories.find(cat => cat.id === selectedCategory)?.description || 
               'Découvrez notre sélection de produits de qualité.'}
            </p>
          </motion.div>
        )}

        {/* Grille de produits */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {displayProducts.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              layout
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#002D62]/80 to-[#00AEEF]/40 opacity-70"
                />
                <motion.div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">
                    {product.name}
                  </h3>
                  {product.brand && (
                    <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-[#00AEEF] rounded-full mb-2">
                      {product.brand}
                    </span>
                  )}
                  {product.origin && (
                    <span className="text-white text-sm font-medium drop-shadow-md">
                      Origine: {product.origin}
                    </span>
                  )}
                </motion.div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  {product.format && (
                    <div>
                      <span className="font-medium text-gray-700">Format:</span>
                      <p className="text-gray-600">{product.format}</p>
                    </div>
                  )}
                  {product.caliber && (
                    <div>
                      <span className="font-medium text-gray-700">Calibre:</span>
                      <p className="text-gray-600">{product.caliber}</p>
                    </div>
                  )}
                  {product.packaging && (
                    <div>
                      <span className="font-medium text-gray-700">Conditionnement:</span>
                      <p className="text-gray-600">{product.packaging}</p>
                    </div>
                  )}
                  {product.unit && (
                    <div>
                      <span className="font-medium text-gray-700">Unité:</span>
                      <p className="text-gray-600">{product.unit}</p>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 bg-[#002D62] text-white rounded-md hover:bg-[#001d40] transition-colors duration-300 text-sm"
                  >
                    Fiche technique
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleQuoteRequest(product)}
                    className="px-3 py-1.5 border border-[#00AEEF] text-[#00AEEF] rounded-md hover:bg-[#00AEEF]/10 transition-colors duration-300 text-sm"
                  >
                    Demander un devis
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Message si aucun produit ne correspond aux filtres */}
        {displayProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-xl shadow-md"
          >
            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-600 text-lg mt-4">
              Aucun produit ne correspond à cette recherche.
            </p>
            <button 
              onClick={() => {
                setSelectedCategory(null);
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 bg-[#00AEEF] text-white rounded-md hover:bg-[#0099d6] transition-colors duration-300"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}

        <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-md">
          <p className="text-lg text-gray-600 mb-6">
            Vous ne trouvez pas ce que vous cherchez ? Contactez notre équipe commerciale pour des solutions personnalisées.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 46, 98, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNavigateToQuote}
            className="px-8 py-3 bg-[#002D62] text-white rounded-md font-medium"
          >
            Contactez-nous
          </motion.button>
        </div>
      </div>

      {/* Modal de demande de devis */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productId={selectedProduct?.id}
        productName={selectedProduct?.name}
      />

      <CTASection />
    </div>
  );
};

export default ProductsPage;
