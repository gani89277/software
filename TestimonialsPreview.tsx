import  { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'CEO, InnovateTech',
      content: 'Infinoxa transformed our online presence completely. They delivered a website that not only looks stunning but also performs exceptionally well. Our conversions have increased by 150% since launch.',
      image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Marketing Director, BrandX',
      content: 'Working with Infinoxa was a game-changer for our business. Their attention to detail and technical expertise helped us create a platform that stands out in a crowded marketplace.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      rating: 5
    },
    {
      name: 'Jessica Wu',
      role: 'Founder, StyleCraft',
      content: 'I had a specific vision for my e-commerce site, and Infinoxa exceeded all expectations. The site is beautiful, fast, and has significantly improved our customer engagement and sales.',
      image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Variants for page transitions
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 200 : -200,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 200 : -200,
        opacity: 0
      };
    }
  };

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="heading mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="subheading max-w-2xl mx-auto"
          >
            Hear what our clients have to say about working with us
          </motion.p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-6 sm:p-10 overflow-hidden backdrop-blur-lg relative"
          >
            {/* Glowing background effect */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px]"></div>
            </div>
            
            <div className="absolute top-6 right-8 text-primary/30 rotate-12">
              <Quote size={40} className="hidden sm:block" />
              <Quote size={60} className="hidden md:block" />
            </div>
            
            <div className="relative z-10 h-[350px] sm:h-[300px] md:h-[220px]">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="h-full flex flex-col justify-between absolute w-full"
                >
                  <p className="text-white/90 text-base sm:text-lg mb-6 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center mt-6 gap-4 sm:gap-0">
                    <motion.img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <motion.h4 
                        className="text-white font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                      >
                        {testimonials[currentIndex].name}
                      </motion.h4>
                      <motion.p 
                        className="text-primary text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                      >
                        {testimonials[currentIndex].role}
                      </motion.p>
                    </div>
                    <div className="sm:ml-auto flex mt-2 sm:mt-0">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + (i * 0.1), duration: 0.4 }}
                        >
                          <Star 
                            size={16} 
                            className="text-yellow-400 fill-yellow-400"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center mt-6">
              <motion.button 
                onClick={prevTestimonial}
                className="glass p-2 rounded-full mr-4 hover:bg-primary/20 transition-colors backdrop-blur-md"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} className="text-primary" />
              </motion.button>
              
              {testimonials.map((_, index) => (
                <motion.button 
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                />
              ))}
              
              <motion.button 
                onClick={nextTestimonial}
                className="glass p-2 rounded-full ml-4 hover:bg-primary/20 transition-colors backdrop-blur-md"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} className="text-primary" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
 