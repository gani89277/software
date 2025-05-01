import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Layout, Code, Server, CheckCircle, Users } from 'lucide-react';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const steps = [
    {
      icon: <FileText size={24} />,
      title: 'Discovery',
      description: 'We begin by understanding your goals, target audience, and project requirements.'
    },
    {
      icon: <Layout size={24} />,
      title: 'Design',
      description: 'Our designers create wireframes and visual concepts aligned with your brand identity.'
    },
    {
      icon: <Code size={24} />,
      title: 'Development',
      description: 'Our developers build your solution using modern, efficient coding practices.'
    },
    {
      icon: <Server size={24} />,
      title: 'Testing',
      description: 'Rigorous quality assurance across devices and browsers ensures a flawless experience.'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Deployment',
      description: 'We launch your project with optimized performance and security configurations.'
    },
    {
      icon: <Users size={24} />,
      title: 'Support',
      description: 'Our team provides ongoing maintenance and support to keep everything running smoothly.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="process" className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="heading mb-4"
          >
            Our Development Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading max-w-2xl mx-auto"
          >
            A systematic approach to deliver exceptional digital solutions
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 border border-primary/20 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="flex items-start gap-4">
                <div className="glass p-3 rounded-lg text-primary">
                  {step.icon}
                </div>
                <div>
                  <span className="text-xs text-primary/70 font-medium">Step {index + 1}</span>
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
 