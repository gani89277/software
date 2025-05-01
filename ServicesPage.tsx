import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Layout, Globe, Server, Package, Smartphone, Database, Shield, Terminal, Clock, Users, Settings } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Custom websites built with modern frameworks and cutting-edge technologies.',
      details: 'We develop responsive, high-performance websites using React, Vue.js, Next.js, and other modern frameworks. Our code is clean, maintainable, and optimized for speed and search engines.'
    },
    {
      icon: <Layout size={32} />,
      title: 'UI/UX Design',
      description: 'Intuitive interfaces that engage users and elevate your brand experience.',
      details: 'Our design process focuses on creating beautiful, intuitive interfaces that delight users while achieving your business goals. We prototype, test, and refine until every interaction feels natural.'
    },
    {
      icon: <Globe size={32} />,
      title: 'E-commerce Solutions',
      description: 'Scalable online stores that drive conversions and boost revenue.',
      details: 'From product catalogs to checkout flows, we build e-commerce experiences that convert browsers into buyers. We integrate payment gateways, shipping APIs, and inventory management systems seamlessly.'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Robust server-side solutions that power your applications securely.',
      details: 'We build scalable backend systems using Node.js, Python, and other technologies. Our expertise includes RESTful APIs, GraphQL, microservices architecture, and cloud deployment.'
    },
    {
      icon: <Package size={32} />,
      title: 'API Integration',
      description: 'Seamless connectivity with third-party services to enhance functionality.',
      details: 'We integrate your platforms with payment processors, CRMs, marketing tools, and other third-party services. Our approach focuses on security, reliability, and maintainable code.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Responsive Design',
      description: 'Websites that look and function flawlessly on all devices and screen sizes.',
      details: 'Our mobile-first approach ensures your website looks and performs beautifully on smartphones, tablets, laptops, and desktops. We test extensively across devices to guarantee consistency.'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Architecture',
      description: 'Optimized data structures for performance, security, and scalability.',
      details: 'We design and implement database solutions using SQL and NoSQL technologies. Our schemas are carefully planned for data integrity, query performance, and future scalability.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Security Audits',
      description: 'Comprehensive vulnerability assessments and security implementations.',
      details: 'Our security experts identify vulnerabilities in your web applications and implement robust solutions. We follow OWASP guidelines and industry best practices to protect your data and users.'
    },
    {
      icon: <Terminal size={32} />,
      title: 'DevOps & Deployment',
      description: 'Streamlined development workflows and reliable hosting solutions.',
      details: 'We set up CI/CD pipelines, containerization, and cloud infrastructure to ensure smooth deployments. Our DevOps practices reduce downtime and accelerate your time to market.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Performance Optimization',
      description: 'Speed enhancements for faster loading and better user experience.',
      details: "We analyze and optimize your website's performance using techniques like code splitting, lazy loading, image optimization, and caching. The result is faster load times and better user experience."
    },
    
    {
      icon: <Users size={32} />,
      title: 'Consultation & Strategy',
      description: 'Expert advice on digital transformation and technology adoption.',
      details: 'Our consultants provide strategic guidance on technology selection, digital transformation, and product roadmaps. We help you make informed decisions aligned with your business goals.'
    },
    {
      icon: <Settings size={32} />,
      title: 'Maintenance & Support',
      description: 'Ongoing technical support and regular updates for your digital assets.',
      details: 'We provide reliable support and maintenance services to keep your websites and applications running smoothly. Our team handles security updates, bug fixes, and performance monitoring.'
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
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive web development solutions to power your digital presence"
        image="https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
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
                  <p className="text-white/70 mb-4">{service.description}</p>
                  <p className="text-white/60 text-sm">{service.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
 