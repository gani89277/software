import  { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-dark">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <svg 
          className="animate-spin h-12 w-12 mb-4 mx-auto" 
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6V2m0 20v-4m4-8h4M2 12h4m11.83 7.17l2.83 2.83M5.83 19.17l2.83-2.83M18.34 7.76l2.83-2.83M5.83 4.93L8.66 7.76" className="text-primary" />
        </svg>
        <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent text-2xl font-bold">
          Infinoxa
        </span>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
 