import  { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, User, RefreshCw, MessageSquare } from 'lucide-react';
import PageHeader from '../components/PageHeader';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
};

const ChatSupportPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi there! Welcome to Infinoxa's live chat support. How can I help you today?",
      sender: 'agent',
      timestamp: new Date(Date.now() - 1000),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isChatStarted, setIsChatStarted] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate agent typing
    setIsTyping(true);
    
    // Simulate agent response
    setTimeout(() => {
      const responses = [
        "Thanks for your message! I'll look into that for you right away.",
        "Great question! Let me provide some information about that.",
        "I understand your concern. Here's what we can do to help you.",
        "Thank you for reaching out. Our team specializes in solving this exact issue.",
        "I appreciate your interest in our services. Let me tell you more about what we offer."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const agentMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'agent',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsChatStarted(true);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      <PageHeader
        title="Live Chat Support"
        subtitle="Get immediate assistance from our support team"
        image="https://images.unsplash.com/photo-1614285653636-af3191aa94bd?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto glass p-6 rounded-xl overflow-hidden"
          >
            <div className="glass p-4 rounded-lg mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-white font-bold">Infinoxa Support</h2>
                  <p className="text-white/70 text-sm">
                    {isTyping ? (
                      <span className="flex items-center gap-2">
                        <span className="inline-block">
                          <span className="animate-pulse">•</span>
                          <span className="animate-pulse delay-100">•</span>
                          <span className="animate-pulse delay-200">•</span>
                        </span>
                        Typing
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                        Online
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            
            {!isChatStarted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-white mb-4">Start a Conversation</h3>
                <p className="text-white/70 mb-6">
                  Please provide your information to begin chatting with our support team.
                </p>
                
                <form onSubmit={handleStartChat} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Start Chat
                  </button>
                </form>
              </motion.div>
            ) : (
              <>
                <div className="h-[400px] overflow-y-auto mb-4 p-2 glass rounded-lg">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[75%] rounded-lg px-4 py-2 ${
                            message.sender === 'user'
                              ? 'bg-primary text-white rounded-tr-none'
                              : 'bg-dark-lighter text-white rounded-tl-none'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            {message.sender === 'agent' && (
                              <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-xs">
                                <MessageSquare size={12} className="text-primary" />
                              </div>
                            )}
                            <span className="text-xs opacity-70">
                              {message.sender === 'user' ? 'You' : 'Support Agent'} • {formatTime(message.timestamp)}
                            </span>
                            {message.sender === 'user' && (
                              <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-xs">
                                <User size={12} className="text-primary" />
                              </div>
                            )}
                          </div>
                          <p>{message.text}</p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="max-w-[75%] rounded-lg px-4 py-2 bg-dark-lighter text-white rounded-tl-none">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center text-xs">
                              <MessageSquare size={12} className="text-primary" />
                            </div>
                            <span className="text-xs opacity-70">
                              Support Agent • {formatTime(new Date())}
                            </span>
                          </div>
                          <p className="flex items-center gap-2">
                            <span className="inline-block">
                              <span className="animate-pulse">•</span>
                              <span className="animate-pulse delay-100">•</span>
                              <span className="animate-pulse delay-200">•</span>
                            </span>
                            Typing
                          </p>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>
                
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="btn-primary p-3"
                    disabled={!newMessage.trim()}
                    aria-label="Send message"
                  >
                    <Send size={20} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto glass p-6 rounded-xl mt-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">About Our Live Chat Support</h3>
            <p className="text-white/70 mb-4">
              Our support team is available to assist you with any questions or issues you might have. We typically respond within minutes during business hours.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <RefreshCw size={14} className="text-primary" />
              <span>This is a demonstration of our chat interface. In a real implementation, you would be connected to a live support agent.</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ChatSupportPage;
 