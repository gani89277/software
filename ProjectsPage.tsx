import  { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Search, Tag } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A full-featured online store with seamless payment processing and inventory management.',
      image: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: 'https://example.com/project1',
      featured: true
    },
    {
      title: 'Financial Dashboard',
      category: 'UI/UX Design',
      description: 'An intuitive analytics dashboard displaying complex data in an accessible format.',
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['Vue.js', 'D3.js', 'Tailwind CSS'],
      link: 'https://example.com/project2',
      featured: true
    },
    {
      title: 'Health & Fitness App',
      category: 'Mobile Development',
      description: 'A cross-platform mobile application for tracking workouts and nutrition with personalized plans.',
      image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['React Native', 'Firebase', 'GraphQL'],
      link: 'https://example.com/project3',
      featured: true
    },
    {
      title: 'Corporate Website Redesign',
      category: 'Web Development',
      description: 'Complete overhaul of a corporate website with modern design and improved UX.',
      image: 'https://images.unsplash.com/photo-1497506928652-500166625d53?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['React', 'Next.js', 'GSAP', 'Contentful'],
      link: 'https://example.com/project4',
      featured: false
    },
    {
      title: 'Inventory Management System',
      category: 'Backend Development',
      description: 'Robust backend system for tracking inventory across multiple warehouses.',
      image: 'https://images.unsplash.com/photo-1668242372382-9e6282c63578?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
      link: 'https://example.com/project5',
      featured: false
    },
    {
      title: 'Real Estate Marketplace',
      category: 'Web Development',
      description: 'Platform connecting property buyers, sellers, and agents with interactive maps.',
      image: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920',
      tags: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
      link: 'https://example.com/project6',
      featured: false
    }
  ];

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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
    <>
      <PageHeader
        title="Our Projects"
        subtitle="Explore our portfolio of innovative digital solutions"
        image="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="mb-12 glass p-6 rounded-xl">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <h3 className="text-white text-lg font-medium mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        filter === category
                          ? 'bg-primary text-white'
                          : 'glass text-white/70 hover:bg-primary/20'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-64">
                <h3 className="text-white text-lg font-medium mb-4">Search Projects</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name, tech..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-dark-lighter text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Search size={16} className="absolute left-3 top-3.5 text-white/50" />
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass group hover:scale-105 transition-all duration-500 overflow-hidden"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative overflow-hidden h-64">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                      
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs">
                          Featured
                        </div>
                      )}
                      
                      <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs">
                        {project.category}
                      </div>
                      
                      <div className="absolute bottom-4 right-4 glass p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink size={16} className="text-primary" />
                      </div>
                    </div>
                  </a>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full flex items-center gap-1"
                        >
                          <Tag size={10} /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="glass p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                  <p className="text-white/70">Try adjusting your search or filter criteria</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
 