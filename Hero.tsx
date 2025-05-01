import  { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="section min-h-screen flex items-center pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1 
              className="heading mb-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-block">Transforming</span>{" "}
              <span className="inline-block">Visions Into</span>{" "}
              <motion.span 
                className="inline-block relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="relative z-10">Digital Reality</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 h-3 bg-primary/30 w-full -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5, delay: 1 }}
                ></motion.span>
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="subheading mb-8 text-center lg:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              We craft cutting-edge web solutions that push the boundaries of what's possible online.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link to="/contact" className="btn-primary group">
                Start Your Project{" "}
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="inline ml-2" size={18} />
                </motion.span>
              </Link>
              <Link to="/projects" className="btn-outline relative overflow-hidden group">
                <span className="relative z-10">See Our Work</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-full bg-primary/10 -z-10"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/70">Always Online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="text-white/70">100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />
                <span className="text-white/70">24/7 Support</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative glass p-6 md:p-10 rounded-2xl overflow-hidden animate-float">
              <motion.div 
                className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary-light to-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjkxNTR8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920" 
                  alt="Digital Solutions" 
                  className="rounded-lg w-full object-cover h-[400px]"
                />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 glass p-4 rounded-lg backdrop-blur-lg"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-primary font-bold">Future-Ready Solutions</h3>
                    <p className="text-white/70 text-sm">Built for tomorrow's challenges</p>
                  </div>
                  <div className="flex gap-2">
                    <motion.span 
                      className="glass w-8 h-8 flex items-center justify-center rounded-full"
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: "rgba(139, 92, 246, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Code size={16} className="text-primary" />
                    </motion.span>
                    <motion.span 
                      className="glass w-8 h-8 flex items-center justify-center rounded-full"
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: "rgba(139, 92, 246, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Layers size={16} className="text-primary" />
                    </motion.span>
                    <motion.span 
                      className="glass w-8 h-8 flex items-center justify-center rounded-full"
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: "rgba(139, 92, 246, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Globe size={16} className="text-primary" />
                    </motion.span>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              ></motion.div>
            </div>
            
            {/* Floating dots decoration */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <div className="h-full w-full flex flex-wrap gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-primary"></div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="h-full w-full flex flex-wrap gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-primary"></div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 