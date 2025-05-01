import  { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';

// Lazy-loaded page components
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const TechStackPage = lazy(() => import('./pages/TechStackPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const EstimatorPage = lazy(() => import('./pages/EstimatorPage'));
const AdminPage = lazy(() => import('./pages/AdminPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const CodeEditorPage = lazy(() => import('./pages/CodeEditorPage'));
const ChatSupportPage = lazy(() => import('./pages/ChatSupportPage'));
const ScheduleCallPage = lazy(() => import('./pages/ScheduleCallPage'));
const RequestQuotePage = lazy(() => import('./pages/RequestQuotePage'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/tech-stack" element={<TechStackPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/estimator" element={<EstimatorPage />} />
              <Route path="/admin/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/code-editor" element={<CodeEditorPage />} />
              <Route path="/chat-support" element={<ChatSupportPage />} />
              <Route path="/schedule-call" element={<ScheduleCallPage />} />
              <Route path="/request-quote" element={<RequestQuotePage />} />
            </Routes>
          </Suspense>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
 