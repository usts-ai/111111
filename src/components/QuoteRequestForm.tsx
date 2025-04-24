import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QuoteRequest } from '../types';

interface QuoteRequestFormProps {
  onSubmit: (data: QuoteRequest) => void;
  initialProductId?: string;
  isModal?: boolean;
}

const productCategoryOptions = [
  { id: 'morues-cabillaud', label: 'Morues et cabillaud' },
  { id: 'espadons-thons-lotte', label: 'Espadons, thons, lotte' },
  { id: 'merlu-saumon-fletan', label: 'Merlu, saumon, fletan' },
  { id: 'poulpes-calamars-seiches', label: 'Poulpes, calamars, seiches' },
  { id: 'crevettes-gambas-crustaces', label: 'Crevettes, gambas, crustacés' },
  { id: 'charcuteries-iberiques', label: 'Charcuteries ibériques' },
  { id: 'fromages-desserts-turrons', label: 'Fromages, desserts, turrons' },
  { id: 'paellas-croquettes-surgeles', label: 'Paellas, croquettes, produits surgelés' },
  { id: 'epicerie-fine', label: 'Épicerie fine' },
];

const QuoteRequestForm: React.FC<QuoteRequestFormProps> = ({ 
  onSubmit, 
  initialProductId,
  isModal = false 
}) => {
  const [formData, setFormData] = useState<QuoteRequest>({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    cityPostalCode: '',
    productCategories: [],
    otherProducts: '',
    estimatedQuantities: '',
    packagingRequirements: '',
    deliveryDate: '',
    callbackRequested: false,
    preferredCallTime: '',
    attachedFile: null,
    productId: initialProductId || undefined
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Réinitialiser le formulaire si initialProductId change
  useEffect(() => {
    if (initialProductId) {
      setFormData(prev => ({ ...prev, productId: initialProductId }));
    }
  }, [initialProductId]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.companyName.trim()) newErrors.companyName = "Veuillez indiquer le nom de votre établissement";
    if (!formData.fullName.trim()) newErrors.fullName = "Veuillez indiquer votre nom et prénom";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez indiquer une adresse email valide";
    }
    
    const phoneRegex = /^[0-9+\s()-]{8,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Veuillez indiquer un numéro de téléphone valide";
    }
    
    if (!formData.cityPostalCode.trim()) newErrors.cityPostalCode = "Veuillez indiquer votre ville et code postal";
    
    if (formData.productCategories.length === 0 && !formData.otherProducts?.trim()) {
      newErrors.productCategories = "Veuillez sélectionner au moins une catégorie de produits ou préciser dans 'Autres'";
    }
    
    if (!formData.estimatedQuantities.trim()) newErrors.estimatedQuantities = "Veuillez indiquer les quantités estimées";
    if (!formData.deliveryDate.trim()) newErrors.deliveryDate = "Veuillez indiquer une date de livraison souhaitée";
    
    if (formData.callbackRequested && !formData.preferredCallTime?.trim()) {
      newErrors.preferredCallTime = "Veuillez indiquer une heure de préférence pour être rappelé";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Effacer l'erreur lorsque l'utilisateur commence à corriger le champ
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData(prev => ({
        ...prev,
        productCategories: [...prev.productCategories, value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        productCategories: prev.productCategories.filter(cat => cat !== value)
      }));
    }
    
    // Effacer l'erreur si au moins une catégorie est sélectionnée
    if (errors.productCategories) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.productCategories;
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, attachedFile: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simuler un appel API avec délai
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit(formData);
      setSubmitSuccess(true);
      
      // Réinitialiser le formulaire après soumission réussie
      setTimeout(() => {
        setFormData({
          companyName: '',
          fullName: '',
          email: '',
          phone: '',
          cityPostalCode: '',
          productCategories: [],
          otherProducts: '',
          estimatedQuantities: '',
          packagingRequirements: '',
          deliveryDate: '',
          callbackRequested: false,
          preferredCallTime: '',
          attachedFile: null,
          productId: initialProductId
        });
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`bg-white rounded-xl shadow-lg ${isModal ? "p-6" : "p-8 max-w-4xl mx-auto my-8"}`}
    >
      {!isModal && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-[#002D62] mb-2">
            Demande de <span className="text-[#00AEEF]">Devis</span>
          </h2>
          <p className="text-gray-600">
            Complétez ce formulaire et notre équipe commerciale vous contactera dans les plus brefs délais.
          </p>
        </motion.div>
      )}

      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
        >
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Demande envoyée avec succès !</h3>
          <p className="text-green-700">
            Nous avons bien reçu votre demande de devis. Notre équipe commerciale vous contactera dans les plus brefs délais.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Coordonnées professionnelles */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-[#002D62] mb-4">Vos coordonnées professionnelles</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom de votre établissement *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
                    errors.companyName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom / Prénom *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse e-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="cityPostalCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Ville / Code postal *
                </label>
                <input
                  type="text"
                  id="cityPostalCode"
                  name="cityPostalCode"
                  value={formData.cityPostalCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
                    errors.cityPostalCode ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.cityPostalCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.cityPostalCode}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Produits souhaités */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-[#002D62] mb-4">
              Produits souhaités (vous pouvez sélectionner plusieurs catégories)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {productCategoryOptions.map((category) => (
                <div key={category.id} className="flex items-start">
                  <input
                    type="checkbox"
                    id={category.id}
                    name="productCategories"
                    value={category.id}
                    checked={formData.productCategories.includes(category.id)}
                    onChange={handleCategoryChange}
                    className="mt-1 h-4 w-4 text-[#00AEEF] border-gray-300 rounded focus:ring-[#00AEEF]"
                  />
                  <label htmlFor={category.id} className="ml-2 text-sm text-gray-700">
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <label htmlFor="otherProducts" className="block text-sm font-medium text-gray-700 mb-1">
                Autres
              </label>
              <textarea
                id="otherProducts"
                name="otherProducts"
                value={formData.otherProducts}
                onChange={handleInputChange}
                rows={2}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] border-gray-300`}
                placeholder="Précisez d'autres produits si nécessaire"
              />
            </div>
            
            {errors.productCategories && (
              <p className="mt-1 text-sm text-red-600">{errors.productCategories}</p>
            )}
          </div>

          {/* Section 3: Détail de la demande */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-[#002D62] mb-4">Détail de votre demande</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="estimatedQuantities" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantités estimées *
                </label>
                <input
                  type="text"
                  id="estimatedQuantities"
                  name="estimatedQuantities"
                  value={formData.estimatedQuantities}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
                    errors.estimatedQuantities ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.estimatedQuantities && (
                  <p className="mt-1 text-sm text-red-600">{errors.estimatedQuantities}</p>
                )}
              </div>

              <div>
                <label htmlFor="packagingRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                  Conditionnements souhaités
                </label>
                <input
                  type="text"
                  id="packagingRequirements"
                  name="packagingRequirements"
                  value={formData.packagingRequirements}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF]"
                />
              </div>

              <div>
                <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Livraison souhaitée à partir de *
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
                    errors.deliveryDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.deliveryDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.deliveryDate}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 4: Rappel */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-[#002D62] mb-4">Souhaitez-vous être rappelé ?</h3>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="callbackYes"
                  name="callbackRequested"
                  checked={formData.callbackRequested}
                  onChange={() => setFormData(prev => ({ ...prev, callbackRequested: true }))}
                  className="h-4 w-4 text-[#00AEEF] border-gray-300 focus:ring-[#00AEEF]"
                />
                <label htmlFor="callbackYes" className="ml-2 text-sm text-gray-700">
                  Oui
                </label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="radio"
                  id="callbackNo"
                  name="callbackRequested"
                  checked={!formData.callbackRequested}
                  onChange={() => setFormData(prev => ({ ...prev, callbackRequested: false }))}
                  className="h-4 w-4 text-[#00AEEF] border-gray-300 focus:ring-[#00AEEF]"
                />
                <label htmlFor="callbackNo" className="ml-2 text-sm text-gray-700">
                  Non
                </label>
              </div>
            </div>
            
            {formData.callbackRequested && (
              <div>
                <label htmlFor="preferredCallTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Heure de préférence *
                </label>
                <input
                  type="time"
                  id="preferredCallTime"
                  name="preferredCallTime"
                  value={formData.preferredCallTime}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00AEEF] ${
                    errors.preferredCallTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.preferredCallTime && (
                  <p className="mt-1 text-sm text-red-600">{errors.preferredCallTime}</p>
                )}
              </div>
            )}
          </div>

          {/* Section 5: Fichier */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-[#002D62] mb-4">Ajoutez un fichier (facultatif)</h3>
            
            <div>
              <label htmlFor="attachedFile" className="block text-sm font-medium text-gray-700 mb-2">
                Format accepté : PDF, Excel (max 5 Mo)
              </label>
              <input
                type="file"
                id="attachedFile"
                name="attachedFile"
                onChange={handleFileChange}
                accept=".pdf,.xls,.xlsx"
                className="w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-medium
                  file:bg-[#002D62] file:text-white
                  hover:file:bg-[#001d40]
                  focus:outline-none"
              />
              {formData.attachedFile && (
                <p className="mt-2 text-sm text-gray-600">
                  Fichier sélectionné : {formData.attachedFile.name}
                </p>
              )}
            </div>
          </div>

          {/* Bouton de soumission */}
          <div className="flex justify-end">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 bg-[#002D62] text-white rounded-md shadow-md hover:bg-[#001d40] focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:ring-opacity-50 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                'Envoyer ma demande de devis'
              )}
            </motion.button>
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default QuoteRequestForm;
