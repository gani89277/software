import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail, Map, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const TeamPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const team = [
    {
      name: 'Alex Morgan',
      role: 'Founder & Lead Developer',
      bio: 'With over 10 years of experience in web development, Alex specializes in building scalable applications with React and Node.js. He founded NexusDev Studios with a vision to create digital solutions that make a difference.',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'System Architecture']
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      bio: 'Sarah brings creativity and user-centered thinking to every project. Her background in psychology helps her create interfaces that are not only beautiful but also intuitive and accessible to all users.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      skills: ['UI Design', 'UX Research', 'Prototyping', 'Figma', 'Design Systems']
    },
    {
      name: 'James Wilson',
      role: 'Backend Engineer',
      bio: 'James is our database and API expert. With deep knowledge of database optimization and security practices, he ensures our backend systems are robust, scalable, and performant.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Docker']
    },
    {
      name: 'Maya Patel',
      role: 'Project Manager',
      bio: 'Maya keeps our projects on track and clients happy. Her excellent communication skills and technical background allow her to bridge the gap between technical requirements and business needs.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      skills: ['Project Management', 'Agile Methodologies', 'Client Communication', 'Risk Management', 'JIRA']
    },
    {
      name: 'David Kim',
      role: 'Frontend Developer',
      bio: 'David creates pixel-perfect interfaces with a focus on performance and accessibility. His attention to detail and knowledge of modern frontend practices results in exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Accessibility', 'Animation', 'Jest']
    },
    {
      name: 'Olivia Martinez',
      role: 'DevOps Engineer',
      bio: 'Olivia handles our infrastructure and deployment pipelines. She ensures our applications are secure, reliable, and scalable through automated processes and best practices.',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Terraform', 'Security']
    },
    {
      name: 'Marcus Johnson',
      role: 'Mobile Developer',
      bio: 'Marcus specializes in cross-platform mobile development, creating seamless experiences on iOS and Android. His expertise in performance optimization ensures our mobile apps run smoothly on all devices.',
      image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'Mobile UX']
    },
    {
      name: 'Elena Rodriguez',
      role: 'Content Strategist',
      bio: 'Elena helps our clients develop compelling content strategies. Her background in marketing and copywriting ensures that every website we build has clear messaging that resonates with its target audience.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      },
      skills: ['Content Strategy', 'Copywriting', 'SEO', 'Brand Messaging', 'User Research']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
        title="Meet Our Team"
        subtitle="The talented people behind our innovative solutions"
        image="https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass group transition-all duration-300 overflow-hidden rounded-xl"
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-primary text-sm mb-4">{member.role}</p>
                      <div className="flex gap-3">
                        <a href={member.social.linkedin} className="glass p-2 rounded-full hover:bg-primary/20 transition-colors duration-300">
                          <Linkedin size={16} className="text-white" />
                        </a>
                        <a href={member.social.github} className="glass p-2 rounded-full hover:bg-primary/20 transition-colors duration-300">
                          <Github size={16} className="text-white" />
                        </a>
                        <a href={member.social.twitter} className="glass p-2 rounded-full hover:bg-primary/20 transition-colors duration-300">
                          <Twitter size={16} className="text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-white/70 text-sm mb-4">{member.bio}</p>
                  <h4 className="text-white font-medium mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section bg-dark-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass p-8 md:p-12 rounded-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="heading mb-6"
            >
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="subheading max-w-2xl mx-auto mb-8"
            >
              We're always looking for talented individuals to join our growing team
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
            >
              <div className="flex items-center gap-3 glass p-4 rounded-lg">
                <Mail size={20} className="text-primary" />
                <span className="text-white">careers@nexusdev.studio</span>
              </div>
              <div className="flex items-center gap-3 glass p-4 rounded-lg">
                <Phone size={20} className="text-primary" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 glass p-4 rounded-lg">
                <Map size={20} className="text-primary" />
                <span className="text-white">123 Tech St, San Francisco</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#" className="btn-primary">
                View Open Positions
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
 