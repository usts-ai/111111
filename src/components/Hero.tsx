import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Hero: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variants pour les animations
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 174, 239, 0.3)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      ref={ref}
      className="relative bg-gradient-to-b from-white to-gray-100 pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-16 w-96 h-96 bg-[#00AEEF] opacity-10 rounded-full blur-3xl transform translate-x-1/3"></div>
        <div className="absolute left-0 bottom-16 w-64 h-64 bg-[#002D62] opacity-10 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={heroVariants}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Texte du Hero */}
          <div className="w-full lg:w-1/2">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002D62] leading-tight"
            >
              Solutions de <span className="text-[#00AEEF]">gélification</span> premium pour professionnels
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              Depuis 1985, Deltagel innove dans le domaine de la gélification alimentaire, 
              offrant aux chefs et restaurateurs des produits d'excellence 
              pour sublimer leurs créations culinaires.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-3 bg-[#00AEEF] text-white font-medium rounded-md shadow-lg"
              >
                Découvrir nos produits
              </motion.button>
              
              <motion.button 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-3 border-2 border-[#002D62] text-[#002D62] font-medium rounded-md hover:bg-[#002D62] hover:text-white transition-colors duration-300"
              >
                Demander un échantillon
              </motion.button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 flex items-center space-x-6"
            >
              {['ISO 22000', 'Sans OGM', 'Made in France'].map((label, index) => (
                <div key={index} className="flex items-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + (index * 0.2), type: 'spring' }}
                    className="w-10 h-10 rounded-full bg-[#002D62] flex items-center justify-center text-white"
                  >
                    {index === 0 ? '✓' : index === 1 ? '🌱' : '🇫🇷'}
                  </motion.div>
                  <span className="ml-2 text-sm font-medium text-gray-700">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Image du Hero avec animation */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div
              initial={{ rotate: -5, y: 20 }}
              animate={{ rotate: 0, y: 0 }}
              transition={{ 
                repeat: Infinity,
                repeatType: "reverse",
                duration: 3
              }}
              className="relative z-20 rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Chef utilisant des produits Deltagel" 
                className="w-full h-auto rounded-xl object-cover"
              />
            </motion.div>
            
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#00AEEF] rounded-full opacity-80 blur-md z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#002D62] rounded-full opacity-70 blur-md z-10"></div>
          </motion.div>
        </motion.div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white fill-current">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.32,118.92,163.89,91.2,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
