import  { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, FileText, Building, Clock, Send, CheckCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const RequestQuotePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeframe: '',
    requirements: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeframe: '',
        requirements: ''
      });
      
      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <PageHeader
        title="Request a Quote"
        subtitle="Get a detailed quote for your project from our experts"
        image="https://images.unsplash.com/photo-1614706007211-76ad2e997bf5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto glass p-6 md:p-8 rounded-xl"
          >
            <div className="text-center mb-8">
              <FileText size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">Custom Project Quote</h3>
              <p className="text-white/70">
                Fill out the form below to receive a detailed quote tailored to your specific needs
              </p>
            </div>
            
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Quote Request Received!</h3>
                <p className="text-white/70 mb-6">
                  Thank you for submitting your project details. We'll prepare a custom quote for you.
                </p>
                <p className="text-white/80">
                  Our team will contact you within 24-48 business hours with a detailed proposal or any additional questions. If you need immediate assistance, please email us at quotes@infinoxa.com
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                      Your Name*
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-lighter text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your name"
                      />
                      <User size={16} className="absolute left-3 top-3.5 text-white/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                      Your Email*
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-lighter text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your email"
                      />
                      <Mail size={16} className="absolute left-3 top-3.5 text-white/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white/80 mb-2 text-sm">
                      Phone Number*
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-lighter text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your phone number"
                      />
                      <Phone size={16} className="absolute left-3 top-3.5 text-white/50" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-white/80 mb-2 text-sm">
                      Company Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-dark-lighter text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your company name"
                      />
                      <Building size={16} className="absolute left-3 top-3.5 text-white/50" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-white/80 mb-2 text-sm">
                    Project Type*
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="" disabled>Select project type</option>
                    <option value="Website">Website</option>
                    <option value="E-commerce">E-commerce Store</option>
                    <option value="Mobile App">Mobile Application</option>
                    <option value="Web Application">Web Application</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-white/80 mb-2 text-sm">
                      Budget Range*
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="" disabled>Select your budget</option>
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000</option>
                      <option value="₹5,00,000 - ₹10,00,000">₹5,00,000 - ₹10,00,000</option>
                      <option value="₹10,00,000+">₹10,00,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeframe" className="block text-white/80 mb-2 text-sm">
                      Timeframe*
                    </label>
                    <div className="relative">
                      <select
                        id="timeframe"
                        name="timeframe"
                        value={formData.timeframe}
                        onChange={handleChange}
                        required
                        className="w-full bg-dark-lighter text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="" disabled>Select your timeframe</option>
                        <option value="Less than 1 month">Less than 1 month</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                      <Clock size={16} className="absolute left-3 top-3.5 text-white/50" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="requirements" className="block text-white/80 mb-2 text-sm">
                    Project Requirements*
                  </label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Please describe your project in detail. Include key features, goals, and any specific requirements you have..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`btn-primary w-full flex items-center justify-center gap-2 ${
                      formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'submitting' ? (
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
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Request Quote
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto glass p-6 rounded-xl mt-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">Our Quote Process</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Request Submission</h4>
                  <p className="text-white/70 text-sm">
                    You submit your project details through our quote request form.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Initial Assessment</h4>
                  <p className="text-white/70 text-sm">
                    Our team reviews your requirements and assesses the project scope.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Consultation Call (Optional)</h4>
                  <p className="text-white/70 text-sm">
                    We may schedule a call to discuss your project in more detail if needed.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Quote Delivery</h4>
                  <p className="text-white/70 text-sm">
                    You receive a detailed quote with timeline, cost breakdown, and project plan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RequestQuotePage;
 