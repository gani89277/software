import  { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageCircle, Calendar } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Here you would integrate with your contact form backend
    // For now simulating API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      info: 'info@infinoxa.com',
      link: 'mailto:info@infinoxa.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      info: '+91 98765 43210',
      link: 'tel:+919876543210'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      info: '123 Tech Park, Bengaluru, KA 560001',
      link: 'https://maps.google.com'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      info: 'Monday - Friday: 9AM - 6PM IST',
      link: '#'
    }
  ];

  const contactOptions = [
    {
      icon: <MessageCircle size={36} />,
      title: 'Chat with Us',
      description: 'Get quick answers to your questions via our live chat support.',
      action: 'Start Chat',
      link: '/chat-support'
    },
    {
      icon: <Calendar size={36} />,
      title: 'Schedule a Call',
      description: 'Book a discovery call with our experts to discuss your project.',
      action: 'Book a Call',
      link: '/schedule-call'
    },
    {
      icon: <Mail size={36} />,
      title: 'Request a Quote',
      description: 'Fill out our detailed questionnaire to get a custom quote.',
      action: 'Get Quote',
      link: '/request-quote'
    }
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let's discuss how we can help bring your vision to life"
        image="https://images.unsplash.com/photo-1614706007211-76ad2e997bf5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-16"
          >
            {contactOptions.map((option, index) => (
              <div 
                key={index}
                className="glass p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 border border-primary/20 hover:border-primary/50"
              >
                <div className="text-primary mb-4 p-3 glass rounded-lg w-16 h-16 flex items-center justify-center mx-auto">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{option.title}</h3>
                <p className="text-white/70 mb-6">{option.description}</p>
                <a 
                  href={option.link} 
                  className="btn-outline inline-block w-full"
                >
                  {option.action}
                </a>
              </div>
            ))}
          </motion.div>

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
                        Your Name*
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
                        Your Email*
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-white/80 mb-2 text-sm">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-white/80 mb-2 text-sm">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-white/80 mb-2 text-sm">
                      Subject*
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
                      <option value="E-commerce">E-commerce Solution</option>
                      <option value="Consultation">Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="budget" className="block text-white/80 mb-2 text-sm">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="" disabled>Select your budget</option>
                        <option value="Less than ₹5,000">Less than ₹5,000</option>
                        <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                        <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                        <option value="₹50,000+">₹50,000+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-white/80 mb-2 text-sm">
                        Timeframe
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="" disabled>Select your timeframe</option>
                        <option value="Less than 1 month">Less than 1 month</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                      Your Message*
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
                    
                    {formStatus === 'success' && (
                      <p className="text-green-400 text-sm mt-2">
                        Thank you for your message! We'll get back to you shortly.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section pb-16 sm:pb-24">
        <div className="container mx-auto">
          <div className="glass p-4 sm:p-8 rounded-xl overflow-hidden">
            <div className="w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471643!3d34.02016130653034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1658766622576!5m2!1sen!2sca" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Infinoxa Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
 