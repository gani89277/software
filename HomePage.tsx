import  { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layers, Globe, MessageCircle, Calendar, FileText } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      <section id="home" className="section min-h-screen flex items-center pt-20 sm:pt-24 md:pt-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h1 className="heading mb-4 sm:mb-6 text-center lg:text-left">
                Transforming Visions Into Digital Reality
              </h1>
              <p className="subheading mb-6 sm:mb-8 text-center lg:text-left">
                We craft cutting-edge web solutions that push the boundaries of what's possible online.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-primary">
                  Start Your Project <ArrowRight className="inline ml-2" size={18} />
                </Link>
                <Link to="/projects" className="btn-outline">
                  See Our Work
                </Link>
              </div>
              
              <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
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
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative glass p-4 sm:p-6 md:p-8 rounded-2xl overflow-hidden animate-float">
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary-light to-primary" />
                <img 
                  src="https://images.unsplash.com/photo-1617957772002-57adde1156fa?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920" 
                  alt="Digital Solutions" 
                  className="rounded-lg w-full object-cover h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
                />
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 glass p-4 rounded-lg">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                    <div>
                      <h3 className="text-primary font-bold">Future-Ready Solutions</h3>
                      <p className="text-white/70 text-sm">Built for tomorrow's challenges</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="glass w-8 h-8 flex items-center justify-center rounded-full">
                        <Code size={16} className="text-primary" />
                      </span>
                      <span className="glass w-8 h-8 flex items-center justify-center rounded-full">
                        <Layers size={16} className="text-primary" />
                      </span>
                      <span className="glass w-8 h-8 flex items-center justify-center rounded-full">
                        <Globe size={16} className="text-primary" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1614285653636-af3191aa94bd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920" 
            alt="Main Background" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="heading mb-4 sm:mb-6 text-center"
          >
            How Can We Help You?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading max-w-2xl mx-auto mb-8 sm:mb-12 text-center"
          >
            Connect with us through our support channels
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="glass p-6 rounded-xl text-center border border-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <div className="text-primary mb-4 p-3 glass rounded-lg w-16 h-16 flex items-center justify-center mx-auto">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Chat with Us</h3>
              <p className="text-white/70 mb-6">Get quick answers to your questions via our live chat support.</p>
              <Link to="/chat-support" className="btn-outline inline-block w-full">
                Start Chat
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-6 rounded-xl text-center border border-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <div className="text-primary mb-4 p-3 glass rounded-lg w-16 h-16 flex items-center justify-center mx-auto">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Schedule a Call</h3>
              <p className="text-white/70 mb-6">Book a discovery call with our experts to discuss your project.</p>
              <Link to="/schedule-call" className="btn-outline inline-block w-full">
                Book a Call
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass p-6 rounded-xl text-center border border-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1"
            >
              <div className="text-primary mb-4 p-3 glass rounded-lg w-16 h-16 flex items-center justify-center mx-auto">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Request a Quote</h3>
              <p className="text-white/70 mb-6">Fill out our detailed questionnaire to get a custom quote.</p>
              <Link to="/request-quote" className="btn-outline inline-block w-full">
                Get Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 right-0 opacity-30 z-0">
          <img 
            src="https://images.unsplash.com/photo-1617957689233-207e3cd3c610?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/70"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading mb-4 sm:mb-6 text-center md:text-left">Our Expertise in Digital Solutions</h2>
              <p className="text-white/80 mb-6 sm:mb-8 text-center md:text-left">
                At Infinoxa, we blend creativity with technical excellence to deliver exceptional digital experiences. Our team of experts is passionate about turning your ideas into reality.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom Web Development",
                  "Mobile App Solutions",
                  "E-commerce Platforms",
                  "UI/UX Design",
                  "Digital Transformation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="glass p-1 rounded-full mt-1">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 sm:mt-8 text-center md:text-left">
                <Link to="/services" className="btn-primary">
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden relative mt-6 md:mt-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1614706007211-76ad2e997bf5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920" 
                alt="Our Expertise" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 to-transparent opacity-50 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass py-3 px-6 rounded-full">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Innovative Solutions</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section relative">
        <div className="absolute top-0 bottom-0 right-0 w-3/5 z-0 opacity-20 hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1614285653636-af3191aa94bd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920" 
            alt="Digital Background" 
            className="h-full object-cover rounded-l-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="glass p-6 sm:p-8 md:p-12 rounded-2xl overflow-hidden text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading mb-4 sm:mb-6">Ready to Start Your Project?</h2>
              <p className="subheading max-w-2xl mx-auto mb-6 sm:mb-8">
                Get an instant estimate or contact us for a detailed consultation
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/estimator" className="btn-primary">
                  Project Estimator
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="glass p-6 sm:p-8 md:p-12 rounded-2xl overflow-hidden text-center"
          >
            <h2 className="heading mb-4 sm:mb-6">Try Our Online Code Editor</h2>
            <p className="subheading max-w-2xl mx-auto mb-6 sm:mb-8">
              Write, compile, and test code in multiple programming languages directly in your browser
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden mb-6 sm:mb-8">
              <img 
                src="https://images.unsplash.com/photo-1617957689233-207e3cd3c610?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920" 
                alt="Code Editor Preview" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center">
                <p className="text-white font-code bg-dark/60 inline-block px-3 py-2 rounded-lg text-sm sm:text-base">
                  <span className="text-primary">const</span> <span className="text-blue-400">infinoxa</span> = <span className="text-green-400">"innovation"</span>;
                </p>
              </div>
            </div>
            <Link to="/code-editor" className="btn-primary">
              Launch Code Editor
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
 