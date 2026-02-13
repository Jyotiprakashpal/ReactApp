import { useState } from 'react';
import '../Style/Home.css';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleGetStarted = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Get started with email:', email);
  };

  return (
    <div className="home-container">
      {/* Floating Bubbles */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      {/* Navigation */}
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          <div className="navbar-brand-icon">RN</div>
          <span>React Native Design</span>
        </a>
        
        <div className="navbar-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#about" className="nav-link">About</a>
        </div>

        <div className="navbar-actions">
          <a href="/login" className="btn btn-outline">Login</a>
          <a href="/signup" className="btn btn-primary">Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <span>🚀</span>
          <span>Now with AI-powered design suggestions</span>
        </div>
        
        <h1 className="hero-title">
          Improve Your{' '}
          <span className="hero-title-gradient">React Native</span>{' '}
          Design Process
        </h1>
        
        <p className="hero-description">
          Enhance your React Native design process with this intuitive web app, 
          streamlining UI development and improving user experience for developers.
        </p>
        
        <div className="hero-actions">
          <form onSubmit={handleGetStarted} style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: '0.875rem 1rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                width: '250px',
                outline: 'none'
              }}
              required
            />
            <button type="submit" className="btn btn-primary btn-large">
              Get Started Free
            </button>
          </form>
          <a href="#demo" className="btn btn-outline btn-large">
            Watch Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3 className="feature-title">Intuitive Design Tools</h3>
          <p className="feature-description">
            Create beautiful React Native interfaces with our drag-and-drop builder. 
            No coding required to design stunning mobile apps.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3 className="feature-title">Fast Prototyping</h3>
          <p className="feature-description">
            Rapidly prototype your ideas and get instant previews. 
            Convert designs to React Native code in seconds.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3 className="feature-title">AI-Powered Suggestions</h3>
          <p className="feature-description">
            Get intelligent design recommendations powered by AI. 
            Improve UX with data-driven insights and best practices.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3 className="step-title">Import Your Design</h3>
            <p className="step-description">
              Upload your Figma designs or start from scratch with our intuitive builder.
            </p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3 className="step-title">Customize & Enhance</h3>
            <p className="step-description">
              Use our tools to refine your design. Add interactions, animations, and more.
            </p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3 className="step-title">Export to Code</h3>
            <p className="step-description">
              Generate production-ready React Native code with one click.
            </p>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <h3 className="step-title">Deploy & Ship</h3>
            <p className="step-description">
              Preview your app on real devices and deploy to app stores seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2 className="cta-title">Ready to Transform Your Design Workflow?</h2>
        <p className="cta-description">
          Join thousands of developers who are building better React Native apps faster.
        </p>
        <a href="/signup" className="btn btn-large">
          Start Building for Free
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 React Native Design Tool. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
