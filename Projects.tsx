import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A full-featured online store with seamless payment processing and inventory management.',
      image: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyMTA5M3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      description: 'An intuitive analytics dashboard displaying complex data in an accessible format.',
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyMTA5M3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['Vue.js', 'D3.js', 'Tailwind CSS']
    },
    {
      title: 'Health & Fitness App',
      category: 'Mobile Development',
      description: 'A cross-platform mobile application for tracking workouts and nutrition with personalized plans.',
      image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyMTA5M3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['React Native', 'Firebase', 'GraphQL']
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="heading mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="subheading max-w-xl"
            >
              Discover our most impactful work and the results we've delivered
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#contact" className="btn-outline flex items-center gap-2 mt-6 md:mt-0">
              View All Projects <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass group hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 glass p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={16} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
 