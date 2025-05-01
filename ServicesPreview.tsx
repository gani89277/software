import  { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Code, Layout, Globe, Server, Package, Smartphone, ArrowRight } from 'lucide-react';

const ServicesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Custom websites built with modern frameworks and cutting-edge technologies.'
    },
    {
      icon: <Layout size={32} />,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces that engage users and elevate your brand experience.'
    },
    {
      icon: <Globe size={32} />,
      title: 'E-commerce Solutions',
      description: 'Scalable online stores that drive conversions and boost revenue.'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Robust server-side solutions that power your applications securely.'
    },
    {
      icon: <Package size={32} />,
      title: 'API Integration',
      description: 'Seamless connectivity with third-party services to enhance functionality.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Responsive Design',
      description: 'Websites that look and function flawlessly on all devices and screen sizes.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="heading mb-4 text-center md:text-left"
            >
              Our Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="subheading max-w-2xl text-center md:text-left"
            >
              We offer a complete range of digital services to help your business thrive online
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-auto mt-6 md:mt-0 text-center md:text-left"
          >
            <Link to="/services" className="btn-outline flex items-center gap-2 justify-center md:justify-start mx-auto md:mx-0 max-w-xs group">
              All Services 
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(139, 92, 246, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="glass p-8 rounded-xl border border-primary/10 hover:border-primary/30 group backdrop-blur-md"
            >
              <div className="flex flex-col items-start">
                <motion.div 
                  className="text-primary mb-6 p-4 glass rounded-lg group-hover:animate-pulse-glow relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated circle background */}
                  <motion.div 
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    initial={{ scale: 0 }}
                    whileHover={{ 
                      scale: 2,
                      opacity: [0, 0.5, 0],
                      transition: { 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop"
                      }
                    }}
                  />
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
 