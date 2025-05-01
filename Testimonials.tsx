import  { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Emma Thompson',
      role: 'CEO, InnovateTech',
      content: 'NexusDev Studios transformed our online presence completely. They delivered a website that not only looks stunning but also performs exceptionally well. Our conversions have increased by 150% since launch.',
      image: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Marketing Director, BrandX',
      content: 'Working with NexusDev was a game-changer for our business. Their attention to detail and technical expertise helped us create a platform that stands out in a crowded marketplace.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      rating: 5
    },
    {
      name: 'Jessica Wu',
      role: 'Founder, StyleCraft',
      content: 'I had a specific vision for my e-commerce site, and NexusDev exceeded all expectations. The site is beautiful, fast, and has significantly improved our customer engagement and sales.',
      image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="heading mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading max-w-2xl mx-auto"
          >
            Hear what our clients have to say about working with us
          </motion.p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-6 md:p-10 overflow-hidden">
            <div className="absolute top-6 right-8 text-primary/30 rotate-12">
              <Quote size={60} />
            </div>
            
            <div className="relative z-10 h-[300px] md:h-[220px]">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-between"
              >
                <p className="text-white/90 text-lg mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center mt-6">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                  <div className="ml-auto flex">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-6">
              <button 
                onClick={prevTestimonial}
                className="glass p-2 rounded-full mr-4 hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft size={20} className="text-primary" />
              </button>
              
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              
              <button 
                onClick={nextTestimonial}
                className="glass p-2 rounded-full ml-4 hover:bg-primary/20 transition-colors"
              >
                <ChevronRight size={20} className="text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
 