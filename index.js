import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Code, Brain, Database, Cloud, Award, BookOpen, Calendar, ChevronDown, Menu, X } from 'lucide-react';
import './style.css';
import TechIcon from './TechIcon';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'blog', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "Senior Machine Learning Engineer",
      company: "Netcompany-Intrasoft",
      location: "Athens, Greece",
      period: "09-2024 – Present",
      description: "Responsible for the development of ML-based projects and data preprocessing actions for the Research and Innovation Development department (RID).",
      technologies: ["Python", "Machine Learning", "Data Processing"]
    },
    {
      title: "Freelance Machine Learning Engineer",
      company: "Various Clients",
      location: "Remote",
      period: "09-2022 – 07-2024",
      description: "Offered consulting and development services for machine learning solutions, primarily in healthcare and entertainment industries.",
      technologies: ["TensorFlow", "PyTorch", "Statistical Modeling", "Predictive Analytics"]
    },
    {
      title: "iOS Developer",
      company: "EXUS",
      location: "Athens, Greece",
      period: "07-2020 – 07-2022",
      description: "iOS Software engineer in projects for major telecommunications companies in Europe and in-house products in the debt-collection sector.",
      technologies: ["Swift", "iOS", "Mobile Development"]
    },
    {
      title: "Software Engineer (Military Service)",
      company: "Greek Army (KEPYES)",
      location: "Athens, Greece",
      period: "10-2019 – 07-2020",
      description: "Full-stack implementation and maintenance of internal web applications, analytical SQL queries development, and generating reports for Greek Army officials.",
      technologies: ["Java EE", "SQL", "Web Applications"]
    },
    {
      title: "Freelance Full Stack Software Developer",
      company: "Various clients",
      location: "Remote",
      period: "09-2015 – 06-2019",
      description: "Worked as a freelance software developer while studying. Collaborated with many international clients mainly operating in the maritime industry and delivery services.  iOS, Back-end (REST API) and Front-end web development (Angular and React frameworks)",
      technologies: ["Swift", "Javascript", "Web Applications", "Python", "React", "Angular"]
    }
  ];

  const skills = [
    {
      category: "Machine Learning & AI",
      icon: <Brain className="w-6 h-6" />,
      items: ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn","OpenAI API", "Statistical Modeling", "Generative AI", "Predictive Analytics"]
    },
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      items: ["Python", "Java", "Swift", "JavaScript", "C/C++", "R"]
    },
    {
      category: "Data & Databases",
      icon: <Database className="w-6 h-6" />,
      items: ["SQL", "NoSQL", "Pandas", "Data Preprocessing", "Analytics"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      items: ["Azure", "AWS", "Docker", "MLflow", "Git", "CI/CD"]
    }
  ];

  const education = [
    {
      degree: "Master's degree (MSc)",
      field: "Data Science and Artificial Intelligence",
      institution: "Eindhoven University of Technology (TU/e)",
      location: "Eindhoven, The Netherlands",
      period: "2022-2024",
      grade: "8.5/10"
    },
    {
      degree: "Bachelor's degree (BSc)",
      field: "Computer Science",
      institution: "Athens University of Economics and Business (AUEB)",
      location: "Athens, Greece",
      period: "2015-2019",
      grade: "7.4/10"
    }
  ];
  
  const blogPosts = [
    {
      title: "AI Waterfall: How to spend less money on LLMs using tiered intelligence",
      excerpt: "Let's face it. Gen AI and LLMs have changed forever the way we develop software and write code.",
      date: "May 26, 2024",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*VMkZybP0ExjYL6Ti",
      url: "https://petrosdemetrakopoulos.medium.com/ai-waterfall-how-to-spend-less-money-on-llms-using-tiered-intelligence-0e1baf64bce7"
    },
    {
      title: "5 ways I use ChatGPT in my daily workflow as a software developer",
      excerpt: "Since late 2022, ChatGPT has gradually entered many aspects of our daily lives, automated or simplified processes...",
      date: "Nov 16, 2023",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*2UbTWQNl-X8Mjoi9",
      url: "https://petrosdemetrakopoulos.medium.com/5-ways-i-use-chatgpt-in-my-daily-worklfow-as-a-software-developer-cc1246ae34f3"
    },
    {
      title: "Creating a Fall Detection Model Using Unsupervised Learning",
      excerpt: "Using data from smartphone sensors",
      date: "Oct 5, 2023",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*0WpDdfnD9EGBnAob",
      url: "https://petrosdemetrakopoulos.medium.com/creating-a-fall-detection-model-using-unsupervised-learning-102ed2fcacbc"
    },
    {
      title: "Navigating Data and Context: A Reflection on Interpretive Challenges",
      excerpt: "In the digital age, where data flows ceaselessly and information shapes our decisions...",
      date: "Aug 17, 2023",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*PSCgqjKjtgBsjMmj",
      url: "https://petrosdemetrakopoulos.medium.com/navigating-data-and-context-a-reflection-on-interpretive-challenges-3d30c603782d"
    },
    {
      title: "Greek elections, neural nets and the \"Echo chamber\" effect",
      excerpt: "Why recommendation algorithms trained on biased date lead to biased recommendations",
      date: "May 28, 2023",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*_43fvcNmrBuwSLHC",
      url: "https://petrosdemetrakopoulos.medium.com/greek-elections-neural-nets-and-the-echo-chamber-effect-64fb274d447c"
    },
    {
      title: "AI Generated beer? Everything is possible with GANs",
      excerpt: "Generating beer recipes using Generative AI models",
      date: "Apr 19, 2023",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*C14IhFgN0ZXPQmlv",
      url: "https://petrosdemetrakopoulos.medium.com/ai-generated-beer-everything-is-possible-with-generative-adversarial-networks-dc9804651ec7"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-800/95 backdrop-blur-md border-b border-slate-700' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-400">
              Petros Demetrakopoulos
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Blog', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Experience', 'Projects', 'Skills', 'Blog', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Petros Demetrakopoulos
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-400 mb-6 font-light">
              AI & Machine Learning Engineer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Highly motivated AI and Machine Learning Engineer with a proven track record in developing impactful software solutions. On a mission to help teams scale software incorporating AI and ML capabilities efficiently.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:petrosdem@gmail.com" className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
            <a href="https://github.com/petrosDemetrakopoulos" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 border border-slate-600 hover:bg-slate-700 rounded-lg transition-colors duration-200">
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/petros-demetrakopoulos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/petrosDemetrakopoulos" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:petrosdem@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify font-light">
                Hello! My name is Petros and I enjoy creating things that live on any silicon-powered device. My interest in software started as a hobby back in elementary school when I started learning Visual Basic with the help of my father.
                Fast-forward to today and a Master's degree in Data Science and Artificial Intelligence later, I’ve had the privilege of designing and implementing streamlined technology solutions for a variety of international clients. With an extensive experience in both freelance and corporate environments, I specialize in developing, integrating and maintianing robust AI and ML solutions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify font-light">
                My expertise spans across multiple domains including <span className="font-bold">healthcare</span>, <span className="font-bold">entertainment</span>, <span className="font-bold">marketing technology</span>, and <span className="font-bold">telecommunications</span>, where I've successfully delivered scalable ML and AI solutions that drive real business impact.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Predictive Modeling</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Statistical Analysis</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Software Architecture</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">Cross-functional Collaboration</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex justify-center mb-8">
                <img 
                  src="./icons/petros.jpg" 
                  alt="Petros Demetrakopoulos" 
                  className="rounded-full w-48 h-48 object-cover border-4 border-blue-400 shadow-lg"
                />
              </div>
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="flex items-center mb-3">
                  <MapPin className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-gray-300">Based in Athens, Greece</span>
                </div>
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-gray-300">TEDx Speaker - "Coding with my heart" <a href="https://www.youtube.com/watch?v=j5DKUMkHGRs" target="_blank" className="text-gray-300">(Watch it on YouTube) </a></span>
                </div>
                <div className="flex items-center mb-3">
                  <Calendar className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-gray-300">10+ Years of exeperience in Software development</span>
                </div>
                <div className="flex items-center mb-3">
                  <ExternalLink className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-gray-300">Multiple Satisfied International Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500/40 transition-colors duration-300 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                    <p className="text-gray-400 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center text-blue-300 text-sm bg-blue-900/30 px-3 py-1 rounded-full mt-4 lg:mt-0 w-fit">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Notable Projects
          </h2>
          
          {/* Featured Projects */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <a href='https://eukardia.gr/' target='_blank' className='no-underline'>
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-400 mr-3" />
                  <div no-underline>
                    <h4 className="text-xl font-semibold text-white no-underline">EUCARDIA</h4>
                    <p className="text-purple-300 text-sm no-underline">2023</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed no-underline text-white no-underline">
                  Personalized cardiovascular risk prediction for the Greek population using advanced AI models. A healthcare-focused ML solution with real-world impact.
                </p>
                <div className="flex flex-wrap gap-2 no-underline text-white no-underline">
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm no-underline">Python</span>
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm no-underline">Scikit-Learn</span>
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm no-underline">Healthcare AI</span>
                </div>
              </div>
              </a>

              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-lg p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <Cloud className="w-8 h-8 text-blue-400 mr-3" />
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Smart-Views
                      <a href="https://github.com/petrosDemetrakopoulos/SmartViews" target="_blank" rel="noopener noreferrer" className="github-icon">
                        <Github className="w-5 h-5 text-blue-300" />
                      </a>
                    </h4>
                    <p className="text-blue-300 text-sm">2019 - BSc Thesis</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Decentralized OLAP View Management using Blockchains. Published research work combining database optimization with blockchain technology.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">Solidity</span>
                  <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">Blockchain</span>
                  <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">Published</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI/ML Projects */}
            <div className="bg-slate-700/50 rounded-lg p-6 border border-purple-500/20">
              <div className="flex items-center mb-6">
                <Brain className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-purple-400">AI & Machine Learning</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-white">Short-term precipitation forecasting from weather radar data using Convolutional LSTM neural networks</h4>
                  <p className="text-gray-400 text-sm mb-2">Published research work (2023) - <a href="https://github.com/petrosDemetrakopoulos/LSTM-radar-precipitation-forecast" target="_blank" rel="noopener noreferrer" className="github-icon">
                      <Github className="w-4 h-4 text-purple-300" />
                    </a> | <a href="https://arxiv.org/abs/2312.01197" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200">arXiv Paper</a></p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">TensorFlow</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Keras</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">ConvLSTM</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Published</span>
                  </div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-white">
                    BeerNet
                    <a href="https://github.com/petrosDemetrakopoulos/BeerNet" target="_blank" rel="noopener noreferrer" className="github-icon">
                      <Github className="w-4 h-4 text-purple-300" />
                    </a>
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">AI-powered beer recipe generation (2023)</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">TensorFlow</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">GANs</span>
                  </div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-white">
                    Face mask detection
                    <a href="https://github.com/petrosDemetrakopoulos/face-mask-detector" target="_blank" rel="noopener noreferrer" className="github-icon">
                      <Github className="w-4 h-4 text-purple-300" />
                    </a>
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Neural networks for COVID-19 safety (2020)</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Keras</span>
                  </div>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-white">
                    Beatles lyrics generator
                    <a href="https://github.com/petrosDemetrakopoulos/RNN-Beatles-lyrics-generator" target="_blank" rel="noopener noreferrer" className="github-icon">
                      <Github className="w-4 h-4 text-purple-300" />
                    </a>
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">RNN-based text generation (2020)</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Keras</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Science Projects */}
            <div className="bg-slate-700/50 rounded-lg p-6 border border-blue-500/20">
              <div className="flex items-center mb-6">
                <Database className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-blue-400">Data Science & Analytics</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-white">
                    Car accidents prediction
                    <a href="https://github.com/petrosDemetrakopoulos/CarAccidentsVrilissia" target="_blank" rel="noopener noreferrer" className="github-icon">
                      <Github className="w-4 h-4 text-blue-300" />
                    </a>
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Data-driven safety analysis (2021)</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Data Analysis</span>
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-white">
                    Flight passengers prediction
                    <a href="https://github.com/petrosDemetrakopoulos/flight-passengers-prediction" target="_blank" rel="noopener noreferrer" className="github-icon">
                      <Github className="w-4 h-4 text-blue-300" />
                    </a>
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">ML-based demand forecasting (2019)</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Python</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Scikit-Learn</span>
                  </div>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-white">
                    SIR.js
                    <a href="https://github.com/petrosDemetrakopoulos/SIR.js" target="_blank" rel="noopener noreferrer" className="github-icon">
                      <Github className="w-4 h-4 text-blue-300" />
                    </a>
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Epidemiological modeling tool (2020)</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">JavaScript</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Modeling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Software Development Projects */}
            <div className="bg-slate-700/50 rounded-lg p-6 border border-green-500/20">
              <div className="flex items-center mb-6">
                <Code className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-green-400">Software Development</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">
                    EthAir Balloons
                    <a href="https://github.com/petrosDemetrakopoulos/ethairballoons" target="_blank" rel="noopener noreferrer" className="github-icon">
                      <Github className="w-4 h-4 text-green-300" />
                    </a>
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Blockchain-based application (2020)</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Solidity</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">JavaScript</span>
                  </div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">
                    MERN stack Contacts App
                    <a href="https://github.com/petrosDemetrakopoulos/MERN-Contacts-Demo" target="_blank" rel="noopener noreferrer" className="github-icon">
                      <Github className="w-4 h-4 text-green-300" />
                    </a>
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Full-stack web application using the Mongo-Express-React-Node.js stack (2020)</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">MongoDB</span>
                  </div>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white">
                    Beer Mania
                    <a href="https://github.com/petrosDemetrakopoulos/beer-mania" target="_blank" rel="noopener noreferrer" className="github-icon">
                      <Github className="w-4 h-4 text-green-300" />
                    </a>
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">Retro game for Atari 2600 (2022)</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">BASIC</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Assembly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
                <div className="flex items-center mb-6">
                  <div className="text-purple-400 mr-3">
                    {skillCategory.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400">{skillCategory.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <TechIcon key={skillIndex} tech={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
            Selected Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 flex flex-col">
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm mb-3 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center text-gray-400 text-xs mt-auto">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href="https://petrosdemetrakopoulos.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-white no-underline"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View All Blog Posts
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-semibold text-purple-400 mb-2">{edu.degree}</h3>
                    <p className="text-xl text-gray-300 mb-2">{edu.field}</p>
                    <p className="text-gray-400 mb-2 flex items-center">
                      {edu.institution}
                      {edu.degree.includes("Master") && (
                        <img src="icons/tue.svg" alt="TU/e" className="ml-5" style={{height: '3rem'}}/>
                      )}
                    </p>
                    <p className="text-gray-400 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center lg:text-right">
                    <p className="text-purple-300 font-semibold mb-2 flex items-center lg:justify-end">
                      <Calendar className="w-4 h-4 mr-2 lg:order-2 lg:ml-2 lg:mr-0" />
                      {edu.period}
                    </p>
                    <p className="text-purple-400 font-semibold">Grade: {edu.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            I'm always interested in new opportunities and challenging projects. Whether you need ML consulting, 
            AI solution development, or want to discuss innovative ideas, I'd love to hear from you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:petrosdem@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                petrosdem@gmail.com
              </a>
            </div>
            </div>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/petros-demetrakopoulos" target="_blank" rel="noopener noreferrer" className="bg-slate-700/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-200">
              <Linkedin className="w-6 h-6 text-purple-400" />
            </a>
            <a href="https://github.com/petrosDemetrakopoulos" target="_blank" rel="noopener noreferrer" className="bg-slate-700/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-200">
              <Github className="w-6 h-6 text-purple-400" />
            </a>
            <a href="mailto:petrosdem@gmail.com" className="bg-slate-700/50 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-200">
              <Mail className="w-6 h-6 text-purple-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Petros Demetrakopoulos. Built with React and passion for AI/ML.
          </p>
        </div>
      </footer>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Portfolio></Portfolio>)
