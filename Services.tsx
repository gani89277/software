import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layout, Globe, Server, Package, Smartphone } from 'lucide-react';

const Services = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="heading mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading max-w-2xl mx-auto"
          >
            We offer a complete range of digital services to help your business thrive online
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 border border-primary/20 hover:border-primary/50 group"
            >
              <div className="flex flex-col items-start">
                <div className="text-primary mb-4 p-3 glass rounded-lg group-hover:animate-glow">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
 