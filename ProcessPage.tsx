import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Layout, Code, Server, CheckCircle, Users, MessageCircle, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ProcessPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const steps = [
    {
      icon: <MessageCircle size={40} />,
      title: 'Initial Consultation',
      description: 'We start with a thorough discussion to understand your vision, goals, target audience, and specific requirements.',
      details: [
        'In-depth discussion of your project goals',
        'Understanding of your target audience',
        'Identification of key requirements',
        'Budget and timeline discussions'
      ],
      color: 'from-blue-500 to-primary'
    },
    {
      icon: <FileText size={40} />,
      title: 'Research & Planning',
      description: 'Our team conducts comprehensive research and creates a detailed project plan with milestones and deliverables.',
      details: [
        'Competitor analysis',
        'Target audience research',
        'Technical feasibility assessment',
        'Detailed project roadmap creation'
      ],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: <Layout size={40} />,
      title: 'Design',
      description: 'Our designers create wireframes and visual concepts aligned with your brand identity and user expectations.',
      details: [
        'Wireframing and prototyping',
        'UI/UX design',
        'Brand alignment',
        'Interactive mockups'
      ],
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: <Code size={40} />,
      title: 'Development',
      description: 'Our developers build your solution using modern, efficient coding practices and best-in-class technologies.',
      details: [
        'Front-end development',
        'Back-end implementation',
        'Database architecture',
        'API integrations'
      ],
      color: 'from-fuchsia-500 to-pink-600'
    },
    {
      icon: <Server size={40} />,
      title: 'Testing',
      description: 'Rigorous quality assurance across devices and browsers ensures a flawless experience for all users.',
      details: [
        'Cross-browser compatibility testing',
        'Responsive design verification',
        'Performance optimization',
        'Security testing'
      ],
      color: 'from-rose-500 to-red-600'
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Deployment',
      description: 'We launch your project with optimized performance and security configurations on your preferred hosting platform.',
      details: [
        'Server configuration',
        'Domain setup',
        'SSL implementation',
        'Performance monitoring setup'
      ],
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <Clock size={40} />,
      title: 'Post-Launch Review',
      description: 'We monitor performance, gather feedback, and make necessary adjustments to ensure everything is working perfectly.',
      details: [
        'Performance monitoring',
        'User feedback collection',
        'Analytics review',
        'Initial optimization'
      ],
      color: 'from-lime-500 to-green-600'
    },
    {
      icon: <Users size={40} />,
      title: 'Ongoing Support',
      description: 'Our team provides continuous maintenance and support to keep your digital solution running smoothly.',
      details: [
        'Regular maintenance',
        'Security updates',
        'Performance optimization',
        'Feature enhancements'
      ],
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  return (
    <>
      <PageHeader
        title="Our Development Process"
        subtitle="A systematic approach to delivering exceptional digital solutions"
        image="https://images.unsplash.com/photo-1497506928652-500166625d53?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={ref} className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 z-0"></div>
            
            {/* Process steps */}
            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step number indicator */}
                  <div className="absolute left-0 md:left-1/2 z-10 transform -translate-x-1/2 flex items-center justify-center">
                    <div className={`w-9 h-9 rounded-full glass flex items-center justify-center text-white font-bold border-2 border-primary`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                    <div className="glass p-6 md:p-8 rounded-xl overflow-hidden">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${step.color} w-16 h-16 flex items-center justify-center mb-4`}>
                        {step.icon}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-white/80 mb-6">{step.description}</p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-white/70">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessPage;
 