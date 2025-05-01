import  { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call for admin login
    setTimeout(() => {
      // Demo credentials for testing
      if (email === 'admin@infinoxa.com' && password === 'admin123') {
        // In a real app, you would set auth tokens/state here
        localStorage.setItem('adminLoggedIn', 'true');
        navigate('/admin');
      } else {
        setError('Invalid email or password');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass p-8 rounded-xl w-full max-w-md"
      >
        <div className="flex justify-center mb-6">
          <Code size={48} className="text-primary" />
        </div>
        
        <h1 className="text-2xl font-bold text-center text-white mb-2">Admin Login</h1>
        <p className="text-white/60 text-center mb-8">Sign in to access the admin dashboard</p>
        
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-white p-3 rounded-lg mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-dark-lighter text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
              <Mail size={16} className="absolute left-3 top-3.5 text-white/50" />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-white/80 mb-2 text-sm">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-dark-lighter text-white px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
              <Lock size={16} className="absolute left-3 top-3.5 text-white/50" />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-white/50 hover:text-white"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {loading ? (
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
                Signing in...
              </>
            ) : (
              <>
                Sign In <LogIn size={16} />
              </>
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-white/60 text-sm">
            For demo, use: admin@infinoxa.com / admin123
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
 