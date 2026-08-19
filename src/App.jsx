import React from 'react';
import { Menu, Users, Calendar, Mouse, ChevronDown, Trophy, Code2, ChevronRight } from 'lucide-react';
import './index.css';

import mobileImg from '../assets/bg-less-desktop-mobile.png';
import desktopImg from '../assets/bg-less-desktop-laptop.png';

function App() {
  return (
    <div className="app-container">
      
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
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Events</a>
          <a href="#" className="nav-link">Projects</a>
          <a href="#" className="nav-link">Team</a>
          <a href="#" className="nav-link">About Us</a>
          <a href="#" className="nav-link">Contact</a>
        </div>

        {/* Right Actions */}
        <div className="nav-actions">
          <button className="btn btn-primary nav-join-btn">
            <Users size={18} />
            Join the Club
          </button>
          <button className="menu-btn">
            <Menu size={24} color="#000" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        
        <div className="hero-content">
          <div className="pill-badge">
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

          {/* Stats Section */}
          <div className="stats-section">
            <div className="stat-item">
              <Users className="stat-icon" size={24} />
              <h3>500+</h3>
              <p>Members</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <Calendar className="stat-icon" size={24} />
              <h3>25+</h3>
              <p>Events</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <Code2 className="stat-icon" size={24} />
              <h3>12+</h3>
              <p>Projects</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <Trophy className="stat-icon" size={24} />
              <h3>10+</h3>
              <p>Workshops</p>
            </div>
          </div>
        </div>

        {/* Laptop Image */}
        <div className="hero-image-container">
          <img className="hero-image mobile-img" src={mobileImg} alt="Mobile Hero" />
          <img className="hero-image desktop-img" src={desktopImg} alt="Desktop Hero" />
        </div>

      </main>

      {/* Scroll Down (Mobile Only) */}
      <div className="scroll-down mobile-only">
        <Mouse size={24} />
        <span>Scroll Down</span>
        <ChevronDown size={20} />
      </div>

    </div>
  );
}

export default App;
