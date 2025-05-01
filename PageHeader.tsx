import  { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image?: string;
}

const PageHeader = ({ title, subtitle, image }: PageHeaderProps) => {
  return (
    <section className="w-full relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-16">
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm" />
        </div>
      )}
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subheading text-lg sm:text-xl md:text-2xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
 