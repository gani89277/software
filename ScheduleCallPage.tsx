import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, Calendar as CalendarIcon } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ScheduleCallPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    topic: '',
    message: ''
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
        date: '',
        time: '',
        topic: '',
        message: ''
      });
      
      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  // Generate available dates (next 14 days excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends (0 is Sunday, 6 is Saturday)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        const formattedDate = date.toISOString().split('T')[0];
        dates.push(formattedDate);
      }
    }
    return dates;
  };

  // Generate available time slots
  const getAvailableTimeSlots = () => {
    return [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
      '15:00', '15:30', '16:00', '16:30', '17:00'
    ];
  };

  return (
    <>
      <PageHeader
        title="Schedule a Call"
        subtitle="Book a discovery call with our experts to discuss your project"
        image="https://images.unsplash.com/photo-1617957689233-207e3cd3c610?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto glass p-6 md:p-8 rounded-xl"
          >
            <div className="text-center mb-6">
              <CalendarIcon size={40} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">Book Your Discovery Call</h3>
              <p className="text-white/70">
                Select a date and time that works for you, and our experts will be ready to discuss your project
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
                <h3 className="text-2xl font-bold text-white mb-2">Call Scheduled Successfully!</h3>
                <p className="text-white/70 mb-6">
                  Thank you for scheduling a call with us. We've sent you a confirmation email with the details.
                </p>
                <p className="text-white/80">
                  Our team will contact you at your scheduled time. If you need to reschedule, please email us at support@infinoxa.com
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
                    <label htmlFor="topic" className="block text-white/80 mb-2 text-sm">
                      Discussion Topic*
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="E-commerce Solutions">E-commerce Solutions</option>
                      <option value="Digital Transformation">Digital Transformation</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-4">Select Date & Time for Call*</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-white/80 mb-2 text-sm">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <select
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-lighter text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="" disabled>Select a date</option>
                          {getAvailableDates().map(date => (
                            <option key={date} value={date}>
                              {new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                            </option>
                          ))}
                        </select>
                        <Calendar size={16} className="absolute left-3 top-3.5 text-white/50" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-white/80 mb-2 text-sm">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full bg-dark-lighter text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="" disabled>Select a time</option>
                          {getAvailableTimeSlots().map(time => (
                            <option key={time} value={time}>
                              {time} IST
                            </option>
                          ))}
                        </select>
                        <Clock size={16} className="absolute left-3 top-3.5 text-white/50" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us a bit about your project or what you'd like to discuss during the call..."
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
                        Scheduling...
                      </>
                    ) : (
                      <>Schedule Call</>
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
            <h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Calendar size={24} className="text-primary" />
                </div>
                <h4 className="text-white font-medium mb-1">30-Minute Call</h4>
                <p className="text-white/70 text-sm">
                  A focused discussion about your project needs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <User size={24} className="text-primary" />
                </div>
                <h4 className="text-white font-medium mb-1">Expert Consultation</h4>
                <p className="text-white/70 text-sm">
                  Talk directly with our experienced developers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle size={24} className="text-primary" />
                </div>
                <h4 className="text-white font-medium mb-1">Clear Next Steps</h4>
                <p className="text-white/70 text-sm">
                  Get a roadmap for moving your project forward.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ScheduleCallPage;
 