import { useState } from 'react';
import '../Style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Password reset request for:', resetEmail);
    setResetMessage('If an account exists with this email, you will receive a password reset link shortly.');
  };

  const handleBackToLogin = () => {
    setIsForgotPassword(false);
    setResetEmail('');
    setResetMessage('');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {!isForgotPassword ? (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-btn">Login</button>
            </form>
            <div className="forgot-password-link">
              <button 
                type="button" 
                className="link-btn"
                onClick={() => setIsForgotPassword(true)}
              >
                Forgot Password?
              </button>
            </div>
          </>
        ) : (
          <>
            <h2>Reset Password</h2>
            <p className="reset-description">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleForgotPassword}>
              <div className="form-group">
                <label htmlFor="reset-email">Email:</label>
                <input
                  type="email"
                  id="reset-email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-btn">Send Reset Link</button>
            </form>
            {resetMessage && (
              <div className="reset-message">
                {resetMessage}
              </div>
            )}
            <div className="back-to-login">
              <button 
                type="button" 
                className="link-btn"
                onClick={handleBackToLogin}
              >
                Back to Login
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
