import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Full-Stack Authentication with 
              <span className="highlight"> Node.js & JWT</span>
            </h1>
            <p className="hero-description">
              Learn how to build secure, scalable web applications using Node.js backend 
              with JWT authentication and modern React frontend. Complete with user registration, 
              login, and protected routes.
            </p>
            <div className="hero-buttons">
              <a href="/register" className="btn btn-primary">Get Started</a>
              <a href="/login" className="btn btn-secondary">Sign In</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="tech-stack">
              <div className="tech-item">
                <div className="tech-icon">⚡</div>
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">🔐</div>
                <span>JWT</span>
              </div>
              <div className="tech-item">
                <div className="tech-icon">⚛️</div>
                <span>React</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Stack?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast & Scalable</h3>
              <p>Node.js provides exceptional performance with its event-driven, non-blocking I/O model, perfect for real-time applications.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Authentication</h3>
              <p>JWT tokens ensure stateless, secure authentication with automatic expiration and refresh capabilities.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Modern React frontend with responsive design that works seamlessly across all devices and screen sizes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>API Integration</h3>
              <p>Seamless frontend-backend connectivity with RESTful APIs and proper error handling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="workflow-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>User Registration</h3>
                <p>Users create accounts with secure password hashing using bcrypt and validation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>JWT Token Generation</h3>
                <p>Upon successful login, server generates a JWT token containing user information.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Protected Routes</h3>
                <p>Frontend validates tokens and provides access to protected dashboard features.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Secure API Calls</h3>
                <p>All API requests include authorization headers for secure data exchange.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-section">
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>Frontend</h3>
              <div className="tech-list">
                <div className="tech-badge">React 18</div>
                <div className="tech-badge">React Router</div>
                <div className="tech-badge">CSS3</div>
                <div className="tech-badge">Responsive Design</div>
              </div>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <div className="tech-list">
                <div className="tech-badge">Node.js</div>
                <div className="tech-badge">Express.js</div>
                <div className="tech-badge">JWT</div>
                <div className="tech-badge">bcrypt</div>
              </div>
            </div>
            <div className="tech-category">
              <h3>Database</h3>
              <div className="tech-list">
                <div className="tech-badge">MongoDB</div>
                <div className="tech-badge">Mongoose</div>
                <div className="tech-badge">Data Validation</div>
                <div className="tech-badge">Indexing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of developers building secure applications with our stack.</p>
            <div className="cta-buttons">
              <a href="/register" className="btn btn-primary btn-large">Create Account</a>
              <a href="/dashboard" className="btn btn-outline btn-large">View Dashboard</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
