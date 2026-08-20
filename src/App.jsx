import React, { useState } from 'react';
import { Menu, Users, Calendar, Mouse, ChevronDown, Trophy, Code2, ChevronRight, Rocket, Play, ArrowUpRight, Volume2, Maximize, ArrowRight, Mic, Code, Github, Box, Monitor, X, Star, MapPin, Clock, Brain, Smartphone, Shield, Cloud, BookOpen, Settings, Folder, Map, LayoutTemplate, Server, Layers, PenTool, Database, Terminal, Cpu, Globe, Lock, ShieldCheck } from 'lucide-react';
import './index.css';

import mobileImg from '../assets/bg-less-desktop-mobile.png';
import desktopImg from '../assets/bg-less-desktop-laptop.png';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = ['Home', 'Events', 'Projects', 'Team', 'About Us', 'Contact'];

  const mobileDomains = [
    {
      id: '01',
      title: 'WEB',
      titleHighlight: 'DEVELOPMENT',
      desc: 'Turn ideas into interfaces and real products.',
      icon: <Code2 size={20} color="#65a30d" />,
      techChips: [
        { name: 'React', icon: <Code2 size={14} color="#0ea5e9"/> },
        { name: 'Node.js', icon: <Server size={14} color="#65a30d"/> },
        { name: 'MongoDB', icon: <Database size={14} color="#16a34a"/> }
      ],
      learn: [
        { name: 'Frontend', icon: <LayoutTemplate size={24} className="d-learn-icon"/> },
        { name: 'Backend', icon: <Server size={24} className="d-learn-icon"/> },
        { name: 'Full Stack', icon: <Layers size={24} className="d-learn-icon"/> },
        { name: 'UI Engineering', icon: <PenTool size={24} className="d-learn-icon"/> }
      ],
      tools: [
        { name: 'React', icon: <Code2 size={16} color="#0ea5e9"/> },
        { name: 'Node.js', icon: <Server size={16} color="#65a30d"/> },
        { name: 'MongoDB', icon: <Database size={16} color="#16a34a"/> },
        { name: 'Git', icon: <Terminal size={16} color="#ef4444"/> },
        { name: 'Tailwind', icon: <PenTool size={16} color="#0ea5e9"/> },
        { name: 'Vite', icon: <Cpu size={16} color="#8b5cf6"/> }
      ]
    },
    {
      id: '02',
      title: 'AI & MACHINE',
      titleHighlight: 'LEARNING',
      desc: 'Explore intelligent systems, ML models and practical AI.',
      icon: <Brain size={20} color="#3b82f6" />,
      techChips: [
        { name: 'Python', icon: <Terminal size={14} color="#eab308"/> },
        { name: 'TensorFlow', icon: <Cpu size={14} color="#f97316"/> },
        { name: 'PyTorch', icon: <Database size={14} color="#ef4444"/> }
      ],
      learn: [
        { name: 'Data Science', icon: <Database size={24} className="d-learn-icon"/> },
        { name: 'Neural Nets', icon: <Brain size={24} className="d-learn-icon"/> },
        { name: 'NLP', icon: <Mic size={24} className="d-learn-icon"/> },
        { name: 'Computer Vision', icon: <Monitor size={24} className="d-learn-icon"/> }
      ],
      tools: [
        { name: 'Python', icon: <Terminal size={16} color="#eab308"/> },
        { name: 'TensorFlow', icon: <Cpu size={16} color="#f97316"/> },
        { name: 'PyTorch', icon: <Database size={16} color="#ef4444"/> },
        { name: 'Pandas', icon: <LayoutTemplate size={16} color="#14b8a6"/> },
        { name: 'NumPy', icon: <Layers size={16} color="#3b82f6"/> },
        { name: 'Scikit-Learn', icon: <Settings size={16} color="#f59e0b"/> }
      ]
    },
    {
      id: '03',
      title: 'APP',
      titleHighlight: 'DEVELOPMENT',
      desc: 'Create mobile applications and real-world products.',
      icon: <Smartphone size={20} color="#a855f7" />,
      techChips: [
        { name: 'Flutter', icon: <Smartphone size={14} color="#0ea5e9"/> },
        { name: 'React Native', icon: <Code2 size={14} color="#3b82f6"/> },
        { name: 'Kotlin', icon: <Terminal size={14} color="#8b5cf6"/> }
      ],
      learn: [
        { name: 'UI/UX', icon: <PenTool size={24} className="d-learn-icon"/> },
        { name: 'Cross-platform', icon: <Layers size={24} className="d-learn-icon"/> },
        { name: 'State Mgmt', icon: <Database size={24} className="d-learn-icon"/> },
        { name: 'APIs', icon: <Globe size={24} className="d-learn-icon"/> }
      ],
      tools: [
        { name: 'Flutter', icon: <Smartphone size={16} color="#0ea5e9"/> },
        { name: 'React Native', icon: <Code2 size={16} color="#3b82f6"/> },
        { name: 'Kotlin', icon: <Terminal size={16} color="#8b5cf6"/> },
        { name: 'Swift', icon: <Cpu size={16} color="#f97316"/> },
        { name: 'Firebase', icon: <Database size={16} color="#f59e0b"/> },
        { name: 'Android Studio', icon: <Monitor size={16} color="#10b981"/> }
      ]
    },
    {
      id: '04',
      title: 'COMPETITIVE',
      titleHighlight: 'PROGRAMMING',
      desc: 'Master DSA, problem solving and coding contests.',
      icon: <Trophy size={20} color="#f59e0b" />,
      techChips: [
        { name: 'C++', icon: <Code size={14} color="#3b82f6"/> },
        { name: 'Java', icon: <Code size={14} color="#ef4444"/> },
        { name: 'Python', icon: <Terminal size={14} color="#eab308"/> }
      ],
      learn: [
        { name: 'Algorithms', icon: <Settings size={24} className="d-learn-icon"/> },
        { name: 'Data Structs', icon: <Database size={24} className="d-learn-icon"/> },
        { name: 'Logic', icon: <Brain size={24} className="d-learn-icon"/> },
        { name: 'Optimization', icon: <Cpu size={24} className="d-learn-icon"/> }
      ],
      tools: [
        { name: 'C++', icon: <Code size={16} color="#3b82f6"/> },
        { name: 'Java', icon: <Code size={16} color="#ef4444"/> },
        { name: 'Python', icon: <Terminal size={16} color="#eab308"/> },
        { name: 'LeetCode', icon: <Globe size={16} color="#f59e0b"/> },
        { name: 'Codeforces', icon: <Trophy size={16} color="#ef4444"/> },
        { name: 'VS Code', icon: <Monitor size={16} color="#0ea5e9"/> }
      ]
    },
    {
      id: '05',
      title: 'CYBER',
      titleHighlight: 'SECURITY',
      desc: 'Learn security, ethical hacking and secure systems.',
      icon: <ShieldCheck size={20} color="#14b8a6" />,
      techChips: [
        { name: 'Linux', icon: <Terminal size={14} color="#f59e0b"/> },
        { name: 'Networking', icon: <Globe size={14} color="#3b82f6"/> },
        { name: 'Cryptography', icon: <Lock size={14} color="#8b5cf6"/> }
      ],
      learn: [
        { name: 'Ethical Hacking', icon: <ShieldCheck size={24} className="d-learn-icon"/> },
        { name: 'Pen Testing', icon: <PenTool size={24} className="d-learn-icon"/> },
        { name: 'Network Sec', icon: <Globe size={24} className="d-learn-icon"/> },
        { name: 'Malware Analys', icon: <Cpu size={24} className="d-learn-icon"/> }
      ],
      tools: [
        { name: 'Kali Linux', icon: <Terminal size={16} color="#3b82f6"/> },
        { name: 'Wireshark', icon: <Globe size={16} color="#0ea5e9"/> },
        { name: 'Metasploit', icon: <ShieldCheck size={16} color="#ef4444"/> },
        { name: 'Burp Suite', icon: <Settings size={16} color="#f97316"/> },
        { name: 'Nmap', icon: <Map size={16} color="#10b981"/> },
        { name: 'Bash', icon: <Code size={16} color="#8b5cf6"/> }
      ]
    },
    {
      id: '06',
      title: 'CLOUD &',
      titleHighlight: 'DEVOPS',
      desc: 'Deploy, scale and automate modern applications.',
      icon: <Cloud size={20} color="#0ea5e9" />,
      techChips: [
        { name: 'AWS', icon: <Cloud size={14} color="#f59e0b"/> },
        { name: 'Docker', icon: <Box size={14} color="#3b82f6"/> },
        { name: 'Kubernetes', icon: <Layers size={14} color="#3b82f6"/> }
      ],
      learn: [
        { name: 'CI/CD', icon: <Settings size={24} className="d-learn-icon"/> },
        { name: 'Containers', icon: <Box size={24} className="d-learn-icon"/> },
        { name: 'Cloud Infra', icon: <Cloud size={24} className="d-learn-icon"/> },
        { name: 'Automation', icon: <Cpu size={24} className="d-learn-icon"/> }
      ],
      tools: [
        { name: 'AWS', icon: <Cloud size={16} color="#f59e0b"/> },
        { name: 'Docker', icon: <Box size={16} color="#3b82f6"/> },
        { name: 'K8s', icon: <Layers size={16} color="#3b82f6"/> },
        { name: 'Jenkins', icon: <Settings size={16} color="#ef4444"/> },
        { name: 'Terraform', icon: <LayoutTemplate size={16} color="#8b5cf6"/> },
        { name: 'Linux', icon: <Terminal size={16} color="#f59e0b"/> }
      ]
    }
  ];

  return (
    <div className="app-container">
      <div className="hero-bg-wrapper">
        {/* Navbar */}
        <nav className="navbar">
        <div className="logo-container">
          <div className="logo-icon">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-slash">/</span>
            <span className="logo-bracket green-text">&gt;</span>
          </div>
          <div className="logo-text-container">
            <span className="logo-text-bold">GAT</span>
            <span className="logo-text-light">CODING CLUB</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`nav-link ${activeTab === item ? 'active' : ''}`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="nav-actions">
          <button className="btn btn-primary nav-join-btn">
            <Users size={18} />
            Join the Club
          </button>
          <button className="menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} color="#000" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        
        <div className="hero-content">
          <div className="pill-badge">
            <div className="dot"></div>
            <span>Student Driven Tech Community</span>
          </div>

          <h1 className="hero-title">
            Build. Code.<br />
            Compete. <br className="mobile-br" />
            <span className="green-text">Create.</span>
          </h1>

          <p className="hero-subtitle">
            A student-driven community for developers,<br className="desktop-br"/>
            problem solvers and tech enthusiasts.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              <Users size={20} />
              Join the Club <ChevronRight size={18} className="desktop-only-icon" />
            </button>
            <button className="btn btn-secondary">
              <Calendar size={20} />
              Explore Events
            </button>
          </div>

        </div>

        {/* Laptop Image */}
        <div className="hero-image-container">
          <img className="hero-image mobile-img" src={mobileImg} alt="Mobile Hero" />
          <img className="hero-image desktop-img" src={desktopImg} alt="Desktop Hero" />
        </div>

        {/* Scroll Down (Mobile Only) */}
        <div className="scroll-down mobile-only">
          <Mouse size={24} />
          <span>Scroll Down</span>
          <ChevronDown size={20} className="bounce-arrow" />
        </div>

      </main>
      </div>

      {/* About Section */}
      <section className="about-section">
        
        <div className="about-left">
          {/* Top Label */}
          <div className="about-label mobile-only">
            <div className="dot"></div>
            <span>About Our Club</span>
          </div>
          <div className="about-label-desktop desktop-only">
            <span className="green-text">ABOUT</span> <span>OUR CLUB</span>
          </div>

          {/* Title & Subtitle */}
          <h2 className="about-title">
            What is <span className="green-text underline-green">GAT</span><br />
            Coding Club?
          </h2>
          
          <p className="about-subtitle mobile-only">
            A <strong>student-driven</strong> tech community where passion<br />
            for code turns <strong className="underline-green">into real-world impact.</strong>
          </p>

          <p className="about-subtitle-desktop desktop-only">
            GAT Coding Club is a student-driven tech community<br />
            that turns passion for code into <span className="green-text font-bold">real-world impact.</span>
          </p>

        {/* Features Vertical List */}
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon-box">
              <Users size={24} className="green-text" />
            </div>
            <div className="feature-text">
              <h4>For Everyone</h4>
              <p>Developers, problem solvers & tech enthusiasts<br/>from all backgrounds and levels.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon-box">
              <Code2 size={24} color="#111" />
            </div>
            <div className="feature-text">
              <h4>Hands-on Growth</h4>
              <p>Build real projects, attend events, join workshops<br/>and sharpen your skills.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-box">
              <Rocket size={24} color="#111" />
            </div>
            <div className="feature-text">
              <h4>Real Opportunities</h4>
              <p>Get mentorship, collaborate, take part in hackathons<br/>and create impact together.</p>
            </div>
          </div>
        </div>
        </div>

        <div className="about-right">
        {/* Video Placeholder */}
        <div className="video-container">
          <div className="video-placeholder">
            <span style={{color: '#fff', fontSize: '12px'}}>Video Thumbnail Missing (Upload it!)</span>
          </div>
          {/* Controls overlay */}
          <div className="play-button-overlay">
            <div className="play-btn">
              <Play size={24} fill="#9df017" color="#9df017" />
            </div>
          </div>
          <div className="video-controls">
            <Play size={16} fill="#fff" color="#fff" />
            <span className="time">0:00 / 0:30</span>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <Volume2 size={16} color="#fff" />
            <Maximize size={16} color="#fff" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-card-header">
              <Users size={20} className="green-text" />
              <ArrowUpRight size={16} color="#666" />
            </div>
            <h3>500+</h3>
            <p>Members</p>
            <div className="stat-bottom-line"></div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <Calendar size={20} className="green-text" />
              <ArrowUpRight size={16} color="#666" />
            </div>
            <h3>25+</h3>
            <p>Events</p>
            <div className="stat-bottom-line"></div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <Code2 size={20} className="green-text" />
              <ArrowUpRight size={16} color="#666" />
            </div>
            <h3>12+</h3>
            <p>Projects</p>
            <div className="stat-bottom-line"></div>
          </div>
          <div className="stat-card">
            <div className="stat-card-header">
              <Trophy size={20} className="green-text" />
              <ArrowUpRight size={16} color="#666" />
            </div>
            <h3>10+</h3>
            <p>Workshops</p>
            <div className="stat-bottom-line"></div>
          </div>
        </div>

        {/* Desktop Join Button */}
        <div className="join-desktop-container desktop-only">
          <button className="join-btn-green">Join the Club</button>
          <button className="join-btn-arrow"><ChevronRight size={20} color="#000" /></button>
        </div>

        </div>

      </section>

      {/* Domains Section (Mobile Only) */}
      <section className="domains-section mobile-only">
        <div className="domains-header">
          <div className="domains-label">
            <div className="dot" style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}></div>
            <span style={{ verticalAlign: 'middle', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px', color: '#666' }}>OUR DOMAINS</span>
          </div>

          <h2 className="domains-title">
            Explore Your<br />
            <span className="green-text underline-straight">Domain.</span> <span className="domain-icon-box"><Code size={20} className="green-text" /></span>
          </h2>

          <p className="domains-subtitle">
            Find what excites you. <span className="green-text">Learn</span> it,<br />
            <span className="green-text">build</span> with it, and <span className="green-text">grow</span><br />
            with the community.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="domains-filters">
          <button className="domain-chip active">All</button>
          <button className="domain-chip"><Code size={14} style={{ marginRight: '4px' }} /> Development</button>
          <button className="domain-chip"><Brain size={14} style={{ marginRight: '4px' }} /> AI</button>
          <button className="domain-chip"><Shield size={14} style={{ marginRight: '4px' }} /> Security</button>
          <button className="domain-chip"><Trophy size={14} style={{ marginRight: '4px' }} /> CP</button>
        </div>

        {/* Domains Grid */}
        <div className="domains-grid">
          {mobileDomains.map((domain, index) => (
            <div className="domain-card-detailed" key={domain.id}>
              <div className="d-card-top">
                <div className="d-card-header">
                  <div className="d-index">{domain.id} <span className="d-index-total">/ 06</span></div>
                  <div className="d-icon-floating">{domain.icon}</div>
                </div>
                <h3 className="d-title">{domain.title}<br/><span className="d-title-highlight">{domain.titleHighlight}</span></h3>
                <p className="d-desc">{domain.desc}</p>
                <div className="d-tech-chips">
                  {domain.techChips.map((chip, i) => (
                    <span className="d-tech-chip" key={i}>{chip.icon} {chip.name}</span>
                  ))}
                </div>
                <button className="d-explore-btn">Explore Domain <ArrowRight size={16}/></button>
              </div>
              
              <div className="d-card-bottom">
                <div className="d-action-buttons">
                  <div className="d-action-card">
                    <div className="d-action-icon"><Folder size={20}/></div>
                    <div className="d-action-content">
                      <div className="d-action-title">Projects</div>
                      <div className="d-action-desc">Build real-world apps</div>
                    </div>
                    <ArrowRight size={16} color="#9ca3af"/>
                  </div>
                  <div className="d-action-card">
                    <div className="d-action-icon"><Map size={20}/></div>
                    <div className="d-action-content">
                      <div className="d-action-title">Learning Path</div>
                      <div className="d-action-desc">Your roadmap to mastery</div>
                    </div>
                    <ArrowRight size={16} color="#9ca3af"/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & Swipe */}
        <div className="domains-pagination-container">
          <div className="domains-dots">
            <span className="domain-dot active"></span>
            <span className="domain-dot"></span>
            <span className="domain-dot"></span>
            <span className="domain-dot"></span>
            <span className="domain-dot"></span>
            <span className="domain-dot"></span>
          </div>
          <div className="swipe-instruction">
            <Mouse size={16} className="green-text" style={{ marginRight: '6px' }} /> 
            <span><span className="green-text font-bold">Swipe</span> to explore domains</span>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section (Mobile Only) */}
      <section className="events-section mobile-only">
        
        {/* Upcoming Events Header */}
        <div className="upcoming-events-header">
          <div className="upcoming-label">
            <div className="dot"></div>
            <span>UPCOMING EVENTS</span>
          </div>

          <h2 className="upcoming-title">
            Upcoming<br />
            <span className="green-text underline-straight">Events</span>
          </h2>

          <p className="upcoming-subtitle">
            Join our upcoming events, <span className="green-text font-bold">learn</span> new skills,<br />
            build amazing projects and <span className="green-text font-bold">grow</span> together.
          </p>
        </div>

        {/* Featured Event Card */}
        <div className="upcoming-featured-card">
          <div className="featured-badge">
            <Star size={14} fill="#84cc16" color="#84cc16" />
            <span>FEATURED EVENT</span>
          </div>
          
          <h3 className="featured-title">
            DEVELOPER<br />
            <span className="green-text">HACKATHON 3.0</span>
          </h3>
          
          <p className="featured-desc">
            48 Hours. Real Problems.<br />
            Real Solutions. Real Impact.
          </p>
          
          <div className="featured-meta">
            <div className="meta-item">
              <Calendar size={16} className="green-text" />
              <span>31 AUG - 01 SEP, 2025</span>
            </div>
            <div className="meta-item">
              <Clock size={16} className="green-text" />
              <span>09:00 AM</span>
            </div>
            <div className="meta-item">
              <MapPin size={16} className="green-text" />
              <span>GAT CAMPUS</span>
            </div>
          </div>
          
          <button className="register-now-btn">
            Register Now
            <ArrowRight size={20} />
          </button>
        </div>

        {/* 2x2 Events Grid */}
        <div className="upcoming-events-grid">
          
          {/* Card 1: Frontend Frenzy */}
          <div className="upcoming-small-card">
            <div className="small-card-header">
              <div className="date-box">
                <span className="date-day">24</span>
                <span className="date-month">AUG</span>
              </div>
              <div className="event-pill">WORKSHOP</div>
            </div>
            <h4 className="small-card-title">Frontend Frenzy</h4>
            <p className="small-card-desc">Learn modern UI/UX and build stunning interfaces.</p>
            <div className="small-card-footer">
              <div className="small-card-meta">
                <Clock size={12} /> 10:00 AM
                <span className="meta-dot">•</span>
                <MapPin size={12} /> GAT Campus
              </div>
              <ArrowRight size={16} className="green-text" />
            </div>
          </div>

          {/* Card 2: AI in Real World */}
          <div className="upcoming-small-card">
            <div className="small-card-header">
              <div className="date-box">
                <span className="date-day">06</span>
                <span className="date-month">SEP</span>
              </div>
              <div className="event-pill">TECH TALK</div>
            </div>
            <h4 className="small-card-title">AI in Real World</h4>
            <p className="small-card-desc">Explore how AI is solving real world problems.</p>
            <div className="small-card-footer">
              <div className="small-card-meta">
                <Clock size={12} /> 02:00 PM
                <span className="meta-dot">•</span>
                <MapPin size={12} /> Online
              </div>
              <ArrowRight size={16} className="green-text" />
            </div>
          </div>

          {/* Card 3: Code Battle */}
          <div className="upcoming-small-card">
            <div className="small-card-header">
              <div className="date-box">
                <span className="date-day">14</span>
                <span className="date-month">SEP</span>
              </div>
              <div className="event-pill">CODING CONTEST</div>
            </div>
            <h4 className="small-card-title">Code Battle</h4>
            <p className="small-card-desc">Test your skills and compete with the best.</p>
            <div className="small-card-footer">
              <div className="small-card-meta">
                <Clock size={12} /> 11:00 AM
                <span className="meta-dot">•</span>
                <MapPin size={12} /> GAT Campus
              </div>
              <ArrowRight size={16} className="green-text" />
            </div>
          </div>

          {/* Card 4: Backend Builder */}
          <div className="upcoming-small-card">
            <div className="small-card-header">
              <div className="date-box">
                <span className="date-day">20</span>
                <span className="date-month">SEP</span>
              </div>
              <div className="event-pill">WORKSHOP</div>
            </div>
            <h4 className="small-card-title">Backend Builder</h4>
            <p className="small-card-desc">Build scalable APIs and master backend development.</p>
            <div className="small-card-footer">
              <div className="small-card-meta">
                <Clock size={12} /> 10:30 AM
                <span className="meta-dot">•</span>
                <MapPin size={12} /> GAT Campus
              </div>
              <ArrowRight size={16} className="green-text" />
            </div>
          </div>

        </div>

        {/* Bottom Button & Footer */}
        <div className="upcoming-bottom">
          <button className="view-all-events-btn">
            View All Events
            <ArrowRight size={20} className="green-text" />
          </button>
          
          <div className="upcoming-footer-note">
            <Calendar size={24} className="green-text" />
            <div className="footer-note-text">
              New events every week.<br />
              <span className="font-bold">Don't miss out!</span>
            </div>
          </div>
        </div>

      </section>

      {/* Events Section (Desktop Only) */}
      <section className="events-section-desktop desktop-only">
        
        {/* Events Header Desktop */}
        <div className="events-header-desktop">
          <div className="about-label-desktop">
            <div className="dot" style={{ display: 'inline-block', marginRight: '8px', verticalAlign: 'middle' }}></div>
            <span className="green-text" style={{ verticalAlign: 'middle' }}>WHAT WE DO</span>
          </div>

          <h2 className="events-title-desktop">
            What We Do <span role="img" aria-label="rocket"></span>
          </h2>

          <p className="events-subtitle-desktop">
            We organize events and create opportunities<br />
            to help you <span className="green-text font-bold">learn, build</span> and <span className="green-text font-bold">grow.</span>
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="events-grid-desktop">
          
          {/* Workshops */}
          <div className="event-card-desktop workshop-card-desktop">
            <div className="event-card-content">
              <div className="event-icon-box-desktop">
                <Monitor size={24} className="green-text" />
              </div>
              <h3 className="event-card-title-desktop">Workshops</h3>
              <p className="event-card-desc-desktop">
                Learn technologies<br />
                through practical<br />
                sessions.
              </p>
              <div className="explore-link-desktop">
                <span>Explore Workshops</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Hackathons */}
          <div className="event-card-desktop hackathon-card-desktop">
            <div className="event-card-content">
              <div className="event-icon-box-desktop">
                <Trophy size={24} className="green-text" />
              </div>
              <h3 className="event-card-title-desktop">Hackathons</h3>
              <p className="event-card-desc-desktop">
                Build real projects<br />
                under pressure.
              </p>
              <div className="explore-link-desktop">
                <span>Explore Hackathons</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Competitive Programming */}
          <div className="event-card-desktop cp-card-desktop">
            <div className="event-card-content">
              <div className="event-icon-box-desktop">
                <Code size={24} className="green-text" />
              </div>
              <h3 className="event-card-title-desktop">Competitive<br />Programming</h3>
              <p className="event-card-desc-desktop">
                DSA, problem solving<br />
                and contests.
              </p>
              <div className="explore-link-desktop">
                <span>Explore CP</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Open Source */}
          <div className="event-card-desktop os-card-desktop">
            <div className="event-card-content">
              <div className="event-icon-box-desktop">
                <Github size={24} className="green-text" />
              </div>
              <h3 className="event-card-title-desktop">Open Source</h3>
              <p className="event-card-desc-desktop">
                Contribute to<br />
                real-world<br />
                projects.
              </p>
              <div className="explore-link-desktop">
                <span>Explore Open Source</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Tech Talks */}
          <div className="event-card-desktop talks-card-desktop">
            <div className="event-card-content">
              <div className="event-icon-box-desktop">
                <Mic size={24} className="green-text" />
              </div>
              <h3 className="event-card-title-desktop">Tech Talks</h3>
              <p className="event-card-desc-desktop">
                Learn from developers<br />
                and industry<br />
                professionals.
              </p>
              <div className="explore-link-desktop">
                <span>Explore Talks</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="event-card-desktop projects-card-desktop">
            <div className="event-card-content">
              <div className="event-icon-box-desktop">
                <Box size={24} className="green-text" />
              </div>
              <h3 className="event-card-title-desktop">Projects</h3>
              <p className="event-card-desc-desktop">
                Build products<br />
                with other<br />
                students.
              </p>
              <div className="explore-link-desktop">
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="events-footer-desktop">
          <div className="footer-label-wrapper">
            <div className="footer-line"></div>
            <span className="footer-label">BE PART OF SOMETHING BIGGER</span>
            <div className="footer-line"></div>
          </div>
          <h2 className="footer-title">
            Learn. <span className="font-bold">Build.</span> Innovate. <span className="green-text font-bold">Together.</span>
          </h2>
        </div>

      </section>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay mobile-only ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="logo-container">
              <div className="logo-icon">
                <span className="logo-bracket">&lt;</span>
                <span className="logo-slash">/</span>
                <span className="logo-bracket green-text">&gt;</span>
              </div>
              <div className="logo-text-container">
                <span className="logo-text-bold">GAT</span>
                <span className="logo-text-light">CODING CLUB</span>
              </div>
            </div>
            <button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={28} color="#111" />
            </button>
          </div>
          
          <div className="mobile-menu-links">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={activeTab === item ? 'active' : ''}
                onClick={() => {
                  setActiveTab(item);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="mobile-menu-footer">
            <button className="join-bottom-btn" style={{ maxWidth: '100%' }}>
              Join the Club
              <div className="join-icon-circle">
                <ArrowUpRight size={20} color="#000" />
              </div>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
