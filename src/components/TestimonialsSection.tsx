import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation des témoignages
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 6000);
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  // Réinitialiser le timer lorsque l'utilisateur change manuellement
  const handleDotClick = (index: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
  };

  const handlePrev = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
  };

  const handleNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D62] mb-4">
            Ce Que Disent <span className="text-[#00AEEF]">Nos Clients</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Découvrez pourquoi les professionnels de la restauration font confiance à Deltagel
            pour leurs besoins en solutions de gélification.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Décorations */}
          <div className="absolute -top-6 -left-6 text-6xl text-[#00AEEF] opacity-20">"</div>
          <div className="absolute -bottom-6 -right-6 text-6xl text-[#00AEEF] opacity-20">"</div>
          
          <div className="relative h-[350px] md:h-[300px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full"
              >
                <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 text-lg italic leading-relaxed mb-8">
                      "{testimonials[currentIndex].content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#00AEEF]"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#002D62] font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-500">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Contrôles */}
          <div className="mt-8 flex justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="mx-1 w-10 h-10 rounded-full bg-[#002D62] text-white flex items-center justify-center shadow-md"
            >
              <span className="sr-only">Précédent</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
            
            <div className="mx-4 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#00AEEF] w-6' : 'bg-gray-300'
                  }`}
                >
                  <span className="sr-only">Témoignage {index + 1}</span>
                </button>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="mx-1 w-10 h-10 rounded-full bg-[#002D62] text-white flex items-center justify-center shadow-md"
            >
              <span className="sr-only">Suivant</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
