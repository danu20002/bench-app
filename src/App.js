// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import BasicAppDataList from './components/BasicAppDataList';
import './App.css'; // Import the CSS for styling
import girlImage from './Assets/girl.png'; // Import the image

function LoadingPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the next page after 10 seconds
    const timer = setTimeout(() => {
      navigate('/home'); // Replace '/home' with the route you want to navigate to
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigate]);

  return (
    <div className="loading-page">
      <div className="logo-container">
        <img src={girlImage} alt="Girl" className="logo" />
      </div>
      <div className="loading-text">
        {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((char, index) => (
          <span key={index} className="loading-letter" style={{ animationDelay: `${index * 0.2}s` }}>
            {char}
          </span>
        ))}
        <span className="dots">...</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<div className="App"><FileUpload /></div>} />
        <Route path="/" element={<LoadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
