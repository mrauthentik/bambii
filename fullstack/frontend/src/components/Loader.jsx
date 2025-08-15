import React from 'react';
import './Loader.css';

const Loader = ({ size = 'medium', color = 'primary', text = '' }) => {
  return (
    <div className={`loader-container loader-${size}`}>
      <div className={`loader loader-${color}`}>
        <div className="loader-spinner"></div>
      </div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

// Button with integrated loader
export const LoadingButton = ({ 
  children, 
  isLoading, 
  disabled, 
  className = '', 
  loadingText = 'Loading...',
  ...props 
}) => {
  return (
    <button 
      className={`loading-btn ${className} ${isLoading ? 'loading' : ''}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <div className="btn-loader">
            <div className="btn-spinner"></div>
          </div>
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Loader;
