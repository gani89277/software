import  { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ChevronRight, Check, Clock, DollarSign, FileText, Download } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { jsPDF } from 'jspdf';

const EstimatorPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    features: [] as string[],
    design: '',
    timeline: '',
    additionalInfo: '',
    clientName: '',
    clientEmail: '',
    clientCompany: ''
  });
  const [estimate, setEstimate] = useState<{
    cost: { min: number; max: number };
    time: { min: number; max: number };
    breakdown: { feature: string; cost: number; time: number }[];
  } | null>(null);
  
  const resultsRef = useRef<HTMLDivElement>(null);

  const projectTypes = [
    { id: 'website', label: 'Website', basePrice: 5000, baseTime: 4 },
    { id: 'e-commerce', label: 'E-commerce Store', basePrice: 25000, baseTime: 6 },
    { id: 'web-app', label: 'Web Application', basePrice: 100000, baseTime: 8 },
    { id: 'mobile-app', label: 'Mobile Application', basePrice: 120000, baseTime: 10 },
    { id: 'custom', label: 'Custom Solution', basePrice: 150000, baseTime: 12 }
  ];

  const featureOptions = [
    { id: 'auth', label: 'User Authentication', price: 15000, time: 1 },
    { id: 'payment', label: 'Payment Integration', price: 20000, time: 1.5 },
    { id: 'admin', label: 'Admin Dashboard', price: 5000, time: 2 },
    { id: 'search', label: 'Advanced Search Functionality', price: 5000, time: 1 },
    { id: 'analytics', label: 'Analytics & Reporting', price: 3000, time: 1.5 },
    { id: 'media', label: 'Media Management', price: 10000, time: 0.5 },
    { id: 'messaging', label: 'Messaging/Chat System', price: 22000, time: 2 },
    { id: 'api', label: 'Third-party API Integration', price: 15000, time: 1 },
    { id: 'multilingual', label: 'Multilingual Support', price: 12000, time: 1 },
    { id: 'notifications', label: 'Notifications System', price: 14000, time: 1 }
  ];

  const designOptions = [
    { id: 'basic', label: 'Basic (Using templates)', multiplier: 1 },
    { id: 'custom', label: 'Custom Design', multiplier: 1.3 },
    { id: 'premium', label: 'Premium (Unique branding & animations)', multiplier: 1.6 }
  ];

  const timelineOptions = [
    { id: 'standard', label: 'Standard Timeline', multiplier: 1 },
    { id: 'accelerated', label: 'Accelerated (25% faster)', multiplier: 1.25 },
    { id: 'urgent', label: 'Urgent (50% faster)', multiplier: 1.5 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      features: checked
        ? [...prev.features, value]
        : prev.features.filter(feature => feature !== value)
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateEstimate();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateEstimate = () => {
    const selectedProjectType = projectTypes.find(type => type.id === formData.projectType);
    const selectedDesign = designOptions.find(option => option.id === formData.design);
    const selectedTimeline = timelineOptions.find(option => option.id === formData.timeline);
    
    if (!selectedProjectType || !selectedDesign || !selectedTimeline) return;

    // Base costs
    let baseCost = selectedProjectType.basePrice;
    let baseTime = selectedProjectType.baseTime;
    
    // Feature costs and time
    const selectedFeatures = featureOptions.filter(feature => 
      formData.features.includes(feature.id)
    );
    
    const featureCost = selectedFeatures.reduce((sum, feature) => sum + feature.price, 0);
    const featureTime = selectedFeatures.reduce((sum, feature) => sum + feature.time, 0);
    
    // Apply multipliers
    const totalBaseCost = (baseCost + featureCost) * selectedDesign.multiplier;
    const totalBaseTime = (baseTime + featureTime);
    
    // Create ranges (±15% for cost, adjusted for timeline)
    const minCost = Math.round((totalBaseCost * 0.85) * selectedTimeline.multiplier);
    const maxCost = Math.round((totalBaseCost * 1.15) * selectedTimeline.multiplier);
    
    const minTime = Math.round(totalBaseTime / selectedTimeline.multiplier * 0.9);
    const maxTime = Math.round(totalBaseTime / selectedTimeline.multiplier * 1.1);
    
    // Create breakdown
    const breakdown = [
      { 
        feature: `Base ${selectedProjectType.label}`, 
        cost: Math.round(baseCost * selectedDesign.multiplier * selectedTimeline.multiplier), 
        time: Math.round(baseTime / selectedTimeline.multiplier) 
      },
      ...selectedFeatures.map(feature => ({
        feature: feature.label,
        cost: Math.round(feature.price * selectedDesign.multiplier * selectedTimeline.multiplier),
        time: Math.round(feature.time / selectedTimeline.multiplier)
      }))
    ];
    
    setEstimate({
      cost: { min: minCost, max: maxCost },
      time: { min: minTime, max: maxTime },
      breakdown
    });
    
    setCurrentStep(5);
  };

  const generatePDF = () => {
    if (!estimate) return;
    
    const doc = new jsPDF();
    
    // Add header
    doc.setFontSize(20);
    doc.setTextColor(139, 92, 246); // Primary color
    doc.text("Infinoxa", 105, 20, {align: "center"});
    
    doc.setFontSize(16);
    doc.text("Project Estimate", 105, 30, {align: "center"});
    
    // Add client info if available
    doc.setFontSize(12);
    doc.setTextColor(80, 80, 80);
    let yPos = 45;
    
    if (formData.clientName) {
      doc.text(`Client: ${formData.clientName}`, 20, yPos);
      yPos += 7;
    }
    
    if (formData.clientCompany) {
      doc.text(`Company: ${formData.clientCompany}`, 20, yPos);
      yPos += 7;
    }
    
    if (formData.clientEmail) {
      doc.text(`Email: ${formData.clientEmail}`, 20, yPos);
      yPos += 7;
    }
    
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, yPos);
    yPos += 15;
    
    // Project details
    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50);
    doc.text("Project Details", 20, yPos);
    yPos += 7;
    
    doc.setFontSize(11);
    doc.text(`Project Type: ${projectTypes.find(type => type.id === formData.projectType)?.label || ''}`, 20, yPos);
    yPos += 7;
    
    doc.text(`Design: ${designOptions.find(option => option.id === formData.design)?.label || ''}`, 20, yPos);
    yPos += 7;
    
    doc.text(`Timeline: ${timelineOptions.find(option => option.id === formData.timeline)?.label || ''}`, 20, yPos);
    yPos += 15;
    
    // Cost summary
    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50);
    doc.text("Estimate Summary", 20, yPos);
    yPos += 10;
    
    doc.setFontSize(11);
    doc.text(`Budget Range: ₹${estimate.cost.min.toLocaleString()} - ₹${estimate.cost.max.toLocaleString()}`, 20, yPos);
    yPos += 7;
    
    doc.text(`Timeline: ${estimate.time.min} - ${estimate.time.max} weeks`, 20, yPos);
    yPos += 15;
    
    // Cost breakdown
    doc.setFontSize(14);
    doc.text("Cost Breakdown", 20, yPos);
    yPos += 10;
    
    // Table headers
    doc.setFontSize(10);
    doc.text("Feature", 20, yPos);
    doc.text("Cost (₹)", 130, yPos);
    doc.text("Time (weeks)", 170, yPos);
    yPos += 5;
    
    // Line
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPos, 190, yPos);
    yPos += 7;
    
    // Table rows
    estimate.breakdown.forEach(item => {
      doc.text(item.feature, 20, yPos);
      doc.text(item.cost.toLocaleString(), 130, yPos);
      doc.text(item.time.toString(), 170, yPos);
      yPos += 7;
    });
    
    // Total row
    yPos += 5;
    doc.line(20, yPos, 190, yPos);
    yPos += 7;
    
    doc.setFontSize(11);
    doc.text("Total Estimate", 20, yPos);
    doc.text(`₹${estimate.cost.min.toLocaleString()} - ₹${estimate.cost.max.toLocaleString()}`, 130, yPos);
    doc.text(`${estimate.time.min} - ${estimate.time.max} weeks`, 170, yPos);
    
    // Footer
    yPos = 270;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text("This is a preliminary estimate based on the information provided.", 105, yPos, {align: "center"});
    doc.text("For a detailed quote, please contact us at info@infinoxa.com", 105, yPos + 5, {align: "center"});
    
    // Save PDF
    doc.save(`Infinoxa-Project-Estimate-${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">What type of project do you need?</h3>
            <div className="space-y-4">
              {projectTypes.map(type => (
                <label 
                  key={type.id}
                  className={`block glass p-4 rounded-lg cursor-pointer transition-all hover:border-primary ${
                    formData.projectType === type.id ? 'border-2 border-primary' : 'border border-white/10'
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="projectType"
                      value={type.id}
                      checked={formData.projectType === type.id}
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                      formData.projectType === type.id ? 'bg-primary' : 'border-2 border-white/40'
                    }`}>
                      {formData.projectType === type.id && <Check size={14} className="text-white" />}
                    </div>
                    <div>
                      <span className="text-white font-medium">{type.label}</span>
                      <p className="text-white/60 text-sm">Starting from ₹{type.basePrice.toLocaleString()}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">What features do you need?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featureOptions.map(feature => (
                <label 
                  key={feature.id}
                  className={`block glass p-4 rounded-lg cursor-pointer transition-all hover:border-primary ${
                    formData.features.includes(feature.id) ? 'border-2 border-primary' : 'border border-white/10'
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="features"
                      value={feature.id}
                      checked={formData.features.includes(feature.id)}
                      onChange={handleCheckboxChange}
                      className="hidden"
                    />
                    <div className={`w-6 h-6 rounded flex items-center justify-center mr-3 ${
                      formData.features.includes(feature.id) ? 'bg-primary' : 'border-2 border-white/40'
                    }`}>
                      {formData.features.includes(feature.id) && <Check size={14} className="text-white" />}
                    </div>
                    <div>
                      <span className="text-white font-medium">{feature.label}</span>
                      <p className="text-white/60 text-sm">+₹{feature.price.toLocaleString()}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        );
      
      case 3:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Design & Timeline Requirements</h3>
            
            <div className="mb-8">
              <h4 className="text-white font-medium mb-3">Design Level</h4>
              <div className="space-y-4">
                {designOptions.map(option => (
                  <label 
                    key={option.id}
                    className={`block glass p-4 rounded-lg cursor-pointer transition-all hover:border-primary ${
                      formData.design === option.id ? 'border-2 border-primary' : 'border border-white/10'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="design"
                        value={option.id}
                        checked={formData.design === option.id}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                        formData.design === option.id ? 'bg-primary' : 'border-2 border-white/40'
                      }`}>
                        {formData.design === option.id && <Check size={14} className="text-white" />}
                      </div>
                      <span className="text-white font-medium">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-3">Project Timeline</h4>
              <div className="space-y-4">
                {timelineOptions.map(option => (
                  <label 
                    key={option.id}
                    className={`block glass p-4 rounded-lg cursor-pointer transition-all hover:border-primary ${
                      formData.timeline === option.id ? 'border-2 border-primary' : 'border border-white/10'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="timeline"
                        value={option.id}
                        checked={formData.timeline === option.id}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                        formData.timeline === option.id ? 'bg-primary' : 'border-2 border-white/40'
                      }`}>
                        {formData.timeline === option.id && <Check size={14} className="text-white" />}
                      </div>
                      <span className="text-white font-medium">{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Your Information</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="clientName" className="block text-white/80 mb-2 text-sm">
                  Your Name (optional)
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="clientEmail" className="block text-white/80 mb-2 text-sm">
                  Your Email (optional)
                </label>
                <input
                  type="email"
                  id="clientEmail"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleInputChange}
                  className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="clientCompany" className="block text-white/80 mb-2 text-sm">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  id="clientCompany"
                  name="clientCompany"
                  value={formData.clientCompany}
                  onChange={handleInputChange}
                  className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="additionalInfo" className="block text-white/80 mb-2 text-sm">
                  Additional Notes (optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-dark-lighter text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about specific requirements or details that might affect the estimate..."
                ></textarea>
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div ref={resultsRef}>
            <div className="mb-8 text-center">
              <Calculator size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Your Project Estimate</h3>
              <p className="text-white/70">Based on your requirements</p>
            </div>
            
            {estimate && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-xl text-center">
                    <DollarSign size={32} className="text-primary mx-auto mb-2" />
                    <h4 className="text-white font-medium mb-1">Estimated Budget</h4>
                    <p className="text-3xl font-bold text-primary">
                      ₹{estimate.cost.min.toLocaleString()} - ₹{estimate.cost.max.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="glass p-6 rounded-xl text-center">
                    <Clock size={32} className="text-primary mx-auto mb-2" />
                    <h4 className="text-white font-medium mb-1">Estimated Timeline</h4>
                    <p className="text-3xl font-bold text-primary">
                      {estimate.time.min} - {estimate.time.max} weeks
                    </p>
                  </div>
                </div>
                
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-4">Cost Breakdown</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="pb-3 text-white/80 font-medium">Feature</th>
                          <th className="pb-3 text-white/80 font-medium text-right">Cost (₹)</th>
                          <th className="pb-3 text-white/80 font-medium text-right">Time (weeks)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {estimate.breakdown.map((item, index) => (
                          <tr key={index} className="border-b border-white/5">
                            <td className="py-3 text-white">{item.feature}</td>
                            <td className="py-3 text-white text-right">{item.cost.toLocaleString()}</td>
                            <td className="py-3 text-white text-right">{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td className="pt-3 text-white font-medium">Total Estimate</td>
                          <td className="pt-3 text-primary font-bold text-right">
                            ₹{estimate.cost.min.toLocaleString()} - ₹{estimate.cost.max.toLocaleString()}
                          </td>
                          <td className="pt-3 text-primary font-bold text-right">
                            {estimate.time.min} - {estimate.time.max} weeks
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-4">What's Next?</h4>
                  <p className="text-white/70 mb-6">
                    This is a preliminary estimate based on the information provided. For a detailed and accurate quote, our team will need to conduct a thorough analysis of your project requirements.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={generatePDF} 
                      className="btn-primary flex items-center gap-2"
                    >
                      <Download size={16} /> Download Estimate PDF
                    </button>
                    <a href="/contact" className="btn-outline flex items-center gap-2">
                      <FileText size={16} /> Contact for Detailed Quote
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <PageHeader
        title="Project Estimator"
        subtitle="Get a quick estimate for your web development project"
        image="https://images.unsplash.com/photo-1617957689233-207e3cd3c610?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass p-6 md:p-8 rounded-xl">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between w-full mx-auto max-w-3xl">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      currentStep >= step ? 'bg-primary' : 'glass'
                    }`}>
                      {currentStep > step ? <Check size={20} className="text-white" /> : <span>{step}</span>}
                    </div>
                    <span className={`text-xs hidden sm:block ${
                      currentStep >= step ? 'text-primary' : 'text-white/60'
                    }`}>
                      {step === 1 && 'Project Type'}
                      {step === 2 && 'Features'}
                      {step === 3 && 'Design & Timeline'}
                      {step === 4 && 'Your Info'}
                      {step === 5 && 'Estimate'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Form Steps */}
            <div className="max-w-3xl mx-auto">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
              
              {/* Navigation Buttons */}
              {currentStep !== 5 && (
                <div className="flex justify-between mt-8">
                  <button 
                    onClick={prevStep}
                    className={`btn-outline ${currentStep === 1 ? 'invisible' : ''}`}
                  >
                    Back
                  </button>
                  
                  <button 
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !formData.projectType) ||
                      (currentStep === 3 && (!formData.design || !formData.timeline))
                    }
                    className={`btn-primary flex items-center gap-2 ${
                      ((currentStep === 1 && !formData.projectType) ||
                      (currentStep === 3 && (!formData.design || !formData.timeline)))
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                  >
                    {currentStep < 4 ? 'Next' : currentStep === 4 ? 'Calculate Estimate' : ''}
                    {currentStep < 5 && <ChevronRight size={16} />}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EstimatorPage;
 