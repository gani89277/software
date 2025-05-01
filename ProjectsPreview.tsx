import  { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ProjectsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A full-featured online store with seamless payment processing and inventory management.',
      image: 'https://images.unsplash.com/photo-1614285653636-af3191aa94bd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com/project1'
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      description: 'An intuitive analytics dashboard displaying complex data in an accessible format.',
      image: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjkxNTR8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['Vue.js', 'D3.js', 'Tailwind CSS'],
      link: 'https://example.com/project2'
    },
    {
      title: 'Health & Fitness App',
      category: 'Mobile Development',
      description: 'A cross-platform mobile application for tracking workouts and nutrition with personalized plans.',
      image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjkxNTR8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['React Native', 'Firebase', 'GraphQL'],
      link: 'https://example.com/project3'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 60 }
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
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="subheading max-w-xl text-center md:text-left"
            >
              Discover our most impactful work and the results we've delivered
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-auto mt-6 md:mt-0 text-center md:text-left"
          >
            <Link to="/projects" className="btn-outline flex items-center gap-2 justify-center md:justify-start mx-auto md:mx-0 max-w-xs group">
              View All Projects
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glass group overflow-hidden backdrop-blur-md"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden h-56 md:h-64">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.7 }
                    }}
                  />
                  
                  {/* Glowing overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-primary/40 via-dark/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs backdrop-blur-md">
                    {project.category}
                  </div>
                  
                  <motion.div 
                    className="absolute top-4 right-4 glass p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md"
                    whileHover={{ 
                      scale: 1.2,
                      boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <ExternalLink size={16} className="text-primary" />
                  </motion.div>
                </div>
              </a>
              
              <motion.div 
                className="p-6 relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.h3 
                  className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300"
                  layoutId={`project-title-${index}`}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-white/70 mb-4 text-sm group-hover:text-white/90 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tagIndex} 
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center gap-1"
                      whileHover={{ 
                        backgroundColor: "rgba(139, 92, 246, 0.3)",
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                {/* Hover indicator line */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary-light"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
 