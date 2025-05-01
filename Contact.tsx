import  { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      info: 'info@nexusdev.studio',
      link: 'mailto:info@nexusdev.studio'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      info: '123 Innovation Drive, Tech City, TC 10101',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="section pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="heading mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading max-w-2xl mx-auto"
          >
            Let's discuss how we can help bring your vision to life
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-1"
          >
            <div className="glass p-6 rounded-xl h-full">
              <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="glass p-3 rounded-lg text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{item.title}</h4>
                      <a 
                        href={item.link} 
                        className="text-white/70 hover:text-primary transition-colors"
                      >
                        {item.info}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-medium text-white mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {['Twitter', 'Linkedin', 'Github', 'Instagram'].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <span className="text-white text-xs">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 lg:col-span-2"
          >
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-6 text-white">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white/80 mb-2 text-sm">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`btn-primary w-full flex items-center justify-center gap-2 ${
                      formStatus === 'submitting' ? 'opacity-80' : ''
                    } ${formStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}`}
                  >
                    {formStatus === 'idle' && (
                      <>Send Message <Send size={16} /></>
                    )}
                    {formStatus === 'submitting' && (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    )}
                    {formStatus === 'success' && (
                      <>Message Sent <CheckCircle size={16} /></>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
 