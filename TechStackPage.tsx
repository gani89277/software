import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const TechStackPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const techCategories = [
    {
      name: 'Frontend Technologies',
      description: 'Modern frameworks and libraries for building exceptional user interfaces',
      technologies: [
        { name: 'React', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { name: 'Vue.js', logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg' },
        { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg' },
        { name: 'Angular', logo: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg' },
        { name: 'TypeScript', logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
        { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
        { name: 'HTML5', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
        { name: 'CSS3', logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' }
      ]
    },
    {
      name: 'UI Frameworks & Libraries',
      description: 'Tools that help us create beautiful, responsive interfaces',
      technologies: [
        { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
        { name: 'Material UI', logo: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
        { name: 'Styled Components', logo: 'https://cdn.worldvectorlogo.com/logos/styled-components-1.svg' },
        { name: 'Framer Motion', logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
        { name: 'SASS', logo: 'https://cdn.worldvectorlogo.com/logos/sass-1.svg' }
      ]
    },
    {
      name: 'Backend Technologies',
      description: 'Powerful solutions for server-side development',
      technologies: [
        { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
        { name: 'Express', logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
        { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
        { name: 'Django', logo: 'https://cdn.worldvectorlogo.com/logos/django.svg' },
        { name: 'Ruby on Rails', logo: 'https://cdn.worldvectorlogo.com/logos/rails.svg' },
        { name: 'PHP', logo: 'https://cdn.worldvectorlogo.com/logos/php-1.svg' },
        { name: 'Laravel', logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg' }
      ]
    },
    {
      name: 'Database Technologies',
      description: 'Robust solutions for data storage and management',
      technologies: [
        { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
        { name: 'PostgreSQL', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
        { name: 'MySQL', logo: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg' },
        { name: 'Redis', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg' },
        { name: 'Firebase', logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
        { name: 'GraphQL', logo: 'https://cdn.worldvectorlogo.com/logos/graphql.svg' }
      ]
    },
    {
      name: 'DevOps & Cloud Services',
      description: 'Tools for efficient deployment and scalable infrastructure',
      technologies: [
        { name: 'AWS', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
        { name: 'Google Cloud', logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
        { name: 'Azure', logo: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg' },
        { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.worldvectorlogo.com/logos/kubernets.svg' },
        { name: 'GitHub Actions', logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
        { name: 'Jenkins', logo: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg' }
      ]
    },
    {
      name: 'Testing Tools',
      description: 'Technologies we use to ensure quality and reliability',
      technologies: [
        { name: 'Jest', logo: 'https://cdn.worldvectorlogo.com/logos/jest-2.svg' },
        { name: 'React Testing Library', logo: 'https://testing-library.com/img/octopus-128x128.png' },
        { name: 'Cypress', logo: 'https://cdn.worldvectorlogo.com/logos/cypress.svg' },
        { name: 'Selenium', logo: 'https://cdn.worldvectorlogo.com/logos/selenium-1.svg' },
        { name: 'Mocha', logo: 'https://cdn.worldvectorlogo.com/logos/mocha-1.svg' },
        { name: 'Chai', logo: 'https://cdn.worldvectorlogo.com/logos/chai.svg' }
      ]
    }
  ];

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
        title="Our Tech Stack"
        subtitle="The cutting-edge technologies and tools we use to build exceptional digital experiences"
        image="https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGFic3RyYWN0JTIwcGF0dGVybnxlbnwwfHx8fDE3NDYwMjI1MDZ8MA&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-24"
          >
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="glass p-8 md:p-12 rounded-2xl"
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent mb-4">
                  {category.name}
                </h2>
                <p className="text-white/80 text-xl mb-12">
                  {category.description}
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="glass p-4 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
                    >
                      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white/5 rounded-full p-3 group-hover:bg-white/10 transition-colors">
                        <img 
                          src={tech.logo} 
                          alt={tech.name} 
                          className="w-full h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100"
                        />
                      </div>
                      <h3 className="text-white text-center font-medium">{tech.name}</h3>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TechStackPage;
 