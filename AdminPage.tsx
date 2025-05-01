import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, Search, User, LogOut, 
  Filter, Mail, MapPin, Phone, Calendar as CalendarIcon,
  MoreVertical, Check, X, AlertTriangle, Download
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

// Mock inquiries data
const MOCK_INQUIRIES = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+91 9812345678',
    company: 'Tech Solutions Inc.',
    subject: 'Web Development',
    message: 'I need a new website for my tech company. Looking for something modern and responsive.',
    date: '2023-06-15T14:30:00',
    status: 'new'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+91 8765432109',
    company: 'Fashion Forward',
    subject: 'E-commerce',
    message: 'We want to launch an online store for our fashion brand. Need help setting up payments and inventory.',
    date: '2023-06-14T09:15:00',
    status: 'in-progress'
  },
  {
    id: 3,
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    phone: '+91 7890123456',
    company: 'Brown Consulting',
    subject: 'Mobile App',
    message: 'Looking to develop a mobile app for our consulting services. Need both iOS and Android versions.',
    date: '2023-06-13T16:45:00',
    status: 'completed'
  },
  {
    id: 4,
    name: 'Emily Chen',
    email: 'emily.chen@example.com',
    phone: '+91 9567890123',
    company: 'GreenLife Foods',
    subject: 'Web Development',
    message: 'Our organic food company needs a website redesign. Current site is outdated and not mobile-friendly.',
    date: '2023-06-12T11:20:00',
    status: 'new'
  },
  {
    id: 5,
    name: 'David Wilson',
    email: 'david.w@example.com',
    phone: '+91 8901234567',
    company: 'Wilson Properties',
    subject: 'UI/UX Design',
    message: 'Need a UX audit and redesign of our real estate platform. Users are having trouble navigating the interface.',
    date: '2023-06-11T13:10:00',
    status: 'in-progress'
  }
];

type Inquiry = {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'in-progress' | 'completed' | 'archived';
};

const AdminPage = () => {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [filteredInquiries, setFilteredInquiries] = useState<Inquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/admin/login');
      return;
    }

    // Load inquiries (simulating API call)
    setTimeout(() => {
      setInquiries(MOCK_INQUIRIES);
      setFilteredInquiries(MOCK_INQUIRIES);
      setLoading(false);
    }, 1000);
  }, [navigate]);

  useEffect(() => {
    // Filter inquiries based on search and status filter
    let filtered = inquiries;
    
    if (searchTerm) {
      filtered = filtered.filter(inquiry => 
        inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inquiry.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(inquiry => inquiry.status === statusFilter);
    }
    
    setFilteredInquiries(filtered);
  }, [inquiries, searchTerm, statusFilter]);

  const updateInquiryStatus = (id: number, status: 'new' | 'in-progress' | 'completed' | 'archived') => {
    setInquiries(prev => 
      prev.map(inquiry => 
        inquiry.id === id ? { ...inquiry, status } : inquiry
      )
    );
    
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(prev => prev ? { ...prev, status } : null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'new':
        return 'bg-blue-500/20 text-blue-400';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'completed':
        return 'bg-green-500/20 text-green-400';
      case 'archived':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const renderStatusBadge = (status: string) => {
    const className = `px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(status)}`;
    return <span className={className}>{status.replace('-', ' ')}</span>;
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="glass p-8 rounded-xl">
          <svg className="animate-spin h-8 w-8 text-primary mx-auto mb-4" viewBox="0 0 24 24">
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
          <p className="text-white text-center">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white"
          >
            Admin Dashboard
          </motion.h1>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleLogout}
            className="btn-outline flex items-center gap-2"
          >
            <LogOut size={16} /> Logout
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Inquiries List */}
          <div className="lg:col-span-1">
            <div className="glass p-4 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Contact Inquiries</h2>
                <span className="glass px-2 py-1 rounded-full text-xs text-primary">{filteredInquiries.length} total</span>
              </div>
              
              <div className="flex gap-2 mb-4">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search inquiries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-dark-lighter text-white px-4 py-2 pl-9 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <Search size={16} className="absolute left-3 top-2.5 text-white/50" />
                </div>
                
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="h-full bg-dark-lighter text-white px-8 py-2 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="all">All</option>
                    <option value="new">New</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="archived">Archived</option>
                  </select>
                  <Filter size={16} className="absolute right-3 top-2.5 text-white/50 pointer-events-none" />
                </div>
              </div>
              
              <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-280px)]">
                {filteredInquiries.length > 0 ? (
                  filteredInquiries.map(inquiry => (
                    <div 
                      key={inquiry.id}
                      onClick={() => setSelectedInquiry(inquiry)}
                      className={`p-3 rounded-lg cursor-pointer transition-all hover:bg-primary/10 ${
                        selectedInquiry?.id === inquiry.id ? 'bg-primary/20 border border-primary/30' : 'border border-white/5'
                      }`}
                    >
                      <div className="flex justify-between mb-1">
                        <h3 className="font-medium text-white">{inquiry.name}</h3>
                        {renderStatusBadge(inquiry.status)}
                      </div>
                      <p className="text-white/60 text-sm">{inquiry.subject}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-white/40 text-xs">{formatDate(inquiry.date)}</span>
                        <span className="text-white/40 text-xs">{inquiry.company}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle size={32} className="text-white/30 mx-auto mb-2" />
                    <p className="text-white/50">No inquiries found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Inquiry Details */}
          <div className="lg:col-span-2">
            {selectedInquiry ? (
              <div className="glass p-6 rounded-xl h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{selectedInquiry.subject}</h2>
                    <p className="text-white/60">{formatDate(selectedInquiry.date)}</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="dropdown relative">
                      <button className="glass p-2 rounded-lg">
                        <MoreVertical size={18} className="text-white/70" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="glass w-12 h-12 rounded-full flex items-center justify-center">
                      <User size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{selectedInquiry.name}</h3>
                      <p className="text-white/60">{selectedInquiry.company}</p>
                    </div>
                    <div className="ml-auto">
                      {renderStatusBadge(selectedInquiry.status)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 glass px-3 py-2 rounded-lg">
                      <Mail size={16} className="text-primary" />
                      <a href={`mailto:${selectedInquiry.email}`} className="text-white/80 text-sm truncate">
                        {selectedInquiry.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 glass px-3 py-2 rounded-lg">
                      <Phone size={16} className="text-primary" />
                      <a href={`tel:${selectedInquiry.phone}`} className="text-white/80 text-sm truncate">
                        {selectedInquiry.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 glass px-3 py-2 rounded-lg">
                      <CalendarIcon size={16} className="text-primary" />
                      <span className="text-white/80 text-sm truncate">
                        {new Date(selectedInquiry.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="glass p-4 rounded-lg mb-6">
                    <h4 className="text-white font-medium mb-2">Message:</h4>
                    <p className="text-white/80 whitespace-pre-line">{selectedInquiry.message}</p>
                  </div>
                  
                  <div className="space-x-2">
                    <button 
                      onClick={() => updateInquiryStatus(selectedInquiry.id, 'new')}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedInquiry.status === 'new' 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'glass text-white/70 hover:bg-blue-500/10 hover:text-blue-400'
                      }`}
                    >
                      New
                    </button>
                    <button 
                      onClick={() => updateInquiryStatus(selectedInquiry.id, 'in-progress')}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedInquiry.status === 'in-progress' 
                          ? 'bg-yellow-500/20 text-yellow-400' 
                          : 'glass text-white/70 hover:bg-yellow-500/10 hover:text-yellow-400'
                      }`}
                    >
                      In Progress
                    </button>
                    <button 
                      onClick={() => updateInquiryStatus(selectedInquiry.id, 'completed')}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedInquiry.status === 'completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'glass text-white/70 hover:bg-green-500/10 hover:text-green-400'
                      }`}
                    >
                      Completed
                    </button>
                    <button 
                      onClick={() => updateInquiryStatus(selectedInquiry.id, 'archived')}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedInquiry.status === 'archived' 
                          ? 'bg-gray-500/20 text-gray-400' 
                          : 'glass text-white/70 hover:bg-gray-500/10 hover:text-gray-400'
                      }`}
                    >
                      Archive
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <button className="btn-outline flex items-center gap-2">
                        <Download size={16} /> Export
                      </button>
                      <button className="glass px-4 py-2 rounded-lg text-white/70 hover:text-red-400 hover:bg-red-500/10 transition-colors flex items-center gap-2">
                        <X size={16} /> Delete
                      </button>
                    </div>
                    <button className="btn-primary flex items-center gap-2">
                      <Mail size={16} /> Reply
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass p-8 rounded-xl h-full flex flex-col items-center justify-center text-center">
                <MessageSquare size={48} className="text-white/20 mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">No Inquiry Selected</h3>
                <p className="text-white/60 max-w-md">
                  Select an inquiry from the list to view its details and manage its status.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
 