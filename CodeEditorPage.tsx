import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Play, Save, Copy, Download, RefreshCw } from 'lucide-react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css';
import PageHeader from '../components/PageHeader';

const CodeEditorPage = () => {
  const [code, setCode] = useState('// Start coding here...');
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [languageMap, setLanguageMap] = useState(languages.javascript);
  const [isExecuting, setIsExecuting] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isCopied, setIsCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const languageOptions = [
    { value: 'javascript', label: 'JavaScript', defaultCode: '// JavaScript code\nconsole.log("Hello, world!");' },
    { value: 'python', label: 'Python', defaultCode: '# Python code\nprint("Hello, world!")' },
    { value: 'java', label: 'Java', defaultCode: '// Java code\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}' },
    { value: 'c', label: 'C', defaultCode: '// C code\n#include <stdio.h>\n\nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n}' },
    { value: 'cpp', label: 'C++', defaultCode: '// C++ code\n#include <iostream>\n\nint main() {\n    std::cout << "Hello, world!" << std::endl;\n    return 0;\n}' },
    { value: 'ruby', label: 'Ruby', defaultCode: '# Ruby code\nputs "Hello, world!"' },
    { value: 'go', label: 'Go', defaultCode: '// Go code\npackage main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, world!")\n}' },
    { value: 'typescript', label: 'TypeScript', defaultCode: '// TypeScript code\nconst greeting: string = "Hello, world!";\nconsole.log(greeting);' },
    { value: 'markup', label: 'HTML', defaultCode: '<!-- HTML code -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello World</title>\n</head>\n<body>\n    <h1>Hello, world!</h1>\n</body>\n</html>' },
    { value: 'css', label: 'CSS', defaultCode: '/* CSS code */\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f0f0f0;\n    color: #333;\n}\n\nh1 {\n    color: #0066cc;\n}' },
  ];

  // Check if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set the appropriate language highlighting when language changes
  useEffect(() => {
    switch (language) {
      case 'javascript':
        setLanguageMap(languages.javascript);
        break;
      case 'python':
        setLanguageMap(languages.python);
        break;
      case 'java':
        setLanguageMap(languages.java);
        break;
      case 'c':
        setLanguageMap(languages.c);
        break;
      case 'cpp':
        setLanguageMap(languages.cpp);
        break;
      case 'ruby':
        setLanguageMap(languages.ruby);
        break;
      case 'go':
        setLanguageMap(languages.go);
        break;
      case 'typescript':
        setLanguageMap(languages.typescript);
        break;
      case 'markup':
        setLanguageMap(languages.markup);
        break;
      case 'css':
        setLanguageMap(languages.css);
        break;
      default:
        setLanguageMap(languages.javascript);
    }
  }, [language]);

  // Change code template when language changes
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    
    // Set default code for the selected language
    const selectedLanguage = languageOptions.find(option => option.value === newLanguage);
    if (selectedLanguage) {
      setCode(selectedLanguage.defaultCode);
    }
    
    // Reset output
    setOutput('');
  };

  const executeCode = () => {
    setIsExecuting(true);
    setOutput('');
    
    // Simulate code execution
    setTimeout(() => {
      let result = '';
      
      try {
        switch (language) {
          case 'javascript':
          case 'typescript':
            // For demo purposes, we'll just display some output
            result = '> "Hello, world!"\n> undefined';
            break;
          case 'python':
            result = 'Hello, world!';
            break;
          case 'java':
          case 'c':
          case 'cpp':
          case 'go':
            result = 'Hello, world!';
            break;
          case 'ruby':
            result = 'Hello, world!';
            break;
          case 'markup':
            result = 'HTML doesn\'t execute, but would display in a browser';
            break;
          case 'css':
            result = 'CSS doesn\'t execute, but would style HTML elements';
            break;
          default:
            result = 'Language execution not implemented in this demo';
        }
        
        setOutput(result);
      } catch (error) {
        if (error instanceof Error) {
          setOutput(`Error: ${error.message}`);
        } else {
          setOutput('An unknown error occurred');
        }
      }
      
      setIsExecuting(false);
    }, 1500);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const downloadCode = () => {
    const element = document.createElement('a');
    let extension = '.txt';
    
    switch (language) {
      case 'javascript': extension = '.js'; break;
      case 'python': extension = '.py'; break;
      case 'java': extension = '.java'; break;
      case 'c': extension = '.c'; break;
      case 'cpp': extension = '.cpp'; break;
      case 'ruby': extension = '.rb'; break;
      case 'go': extension = '.go'; break;
      case 'typescript': extension = '.ts'; break;
      case 'markup': extension = '.html'; break;
      case 'css': extension = '.css'; break;
    }
    
    const file = new Blob([code], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `code${extension}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const resetCode = () => {
    const selectedLanguage = languageOptions.find(option => option.value === language);
    if (selectedLanguage) {
      setCode(selectedLanguage.defaultCode);
    }
    setOutput('');
  };

  return (
    <>
      <PageHeader
        title="Online Code Editor"
        subtitle="Write, run, and test code in multiple languages"
        image="https://images.unsplash.com/photo-1617957689233-207e3cd3c610?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxkYXJrJTIwcHVycGxlJTIwdGVjaCUyMGNvZGUlMjBwcm9ncmFtbWluZyUyMGFic3RyYWN0fGVufDB8fHx8MTc0NjAyNDAwM3ww&ixlib=rb-4.0.3&fit=fillmax&h=1080&w=1920"
      />

      <section className="section pb-16 sm:pb-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass p-4 sm:p-6 rounded-xl overflow-hidden"
          >
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <div className="flex items-center gap-2">
                <Code size={18} className="text-primary" />
                <h2 className="text-white font-bold">Code Editor</h2>
              </div>
              
              <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="bg-dark-lighter text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary flex-grow sm:flex-grow-0"
                >
                  {languageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                
                <div className="flex gap-2 ml-auto sm:ml-0">
                  <button
                    onClick={resetCode}
                    className="p-2 rounded-lg bg-dark-lighter text-white hover:bg-primary/20 transition-colors flex items-center gap-1"
                    title="Reset code"
                  >
                    <RefreshCw size={18} />
                  </button>
                  
                  <button
                    onClick={copyCode}
                    className="p-2 rounded-lg bg-dark-lighter text-white hover:bg-primary/20 transition-colors flex items-center gap-1"
                    title="Copy code"
                  >
                    <Copy size={18} />
                    {isCopied && <span className="text-xs">Copied!</span>}
                  </button>
                  
                  <button
                    onClick={downloadCode}
                    className="p-2 rounded-lg bg-dark-lighter text-white hover:bg-primary/20 transition-colors"
                    title="Download code"
                  >
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Editor */}
            <div className={`rounded-lg overflow-hidden mb-4 border ${theme === 'dark' ? 'border-gray-700 bg-[#1e1e1e]' : 'border-gray-300 bg-white'}`}>
              <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => highlight(code, languageMap, language)}
                padding={isMobile ? 10 : 15}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: isMobile ? 12 : 14,
                  backgroundColor: theme === 'dark' ? '#1e1e1e' : 'white',
                  color: theme === 'dark' ? 'white' : 'black',
                  minHeight: isMobile ? '200px' : '300px'
                }}
                className="code-editor"
              />
            </div>
            
            {/* Run Button */}
            <div className="mb-4">
              <button
                onClick={executeCode}
                disabled={isExecuting}
                className={`btn-primary flex items-center gap-2 ${isExecuting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isExecuting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
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
                    Executing...
                  </>
                ) : (
                  <>
                    <Play size={18} /> Run Code
                  </>
                )}
              </button>
            </div>
            
            {/* Output */}
            <div>
              <div className="flex items-center mb-2">
                <h3 className="text-white font-medium">Output</h3>
              </div>
              
              <div className="bg-dark-lighter rounded-lg p-4 text-white/90 font-mono text-sm min-h-[100px] sm:min-h-[120px] whitespace-pre-wrap overflow-auto">
                {output || 'Run your code to see the output here...'}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-6 rounded-xl mt-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">About the Editor</h3>
            <p className="text-white/80 mb-4">
              This is a simple online code editor that supports multiple programming languages. You can write, run, and test your code directly in the browser.
            </p>
            <p className="text-white/80">
              <strong className="text-primary">Note:</strong> This is a demonstration editor with limited functionality. For security reasons, actual code execution is simulated. In a real-world implementation, code would be executed on a secure backend.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CodeEditorPage;
 