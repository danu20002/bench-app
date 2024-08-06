import React, { useState } from 'react';
import { uploadFile } from '../Api/apiService';
import './FileUpload.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [appName, setAppName] = useState('');
  const [contentDescription, setContentDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file && appName && contentDescription) {
      try {
        const result = await uploadFile(file, appName, contentDescription);
        setMessage(result);
      } catch (error) {
        setMessage('Error uploading file.');
      }
    } else {
      setMessage('Please fill out all fields and select a file.');
    }
  };

  return (
    <div className="file-upload-wrapper">
      <h1 className="welcome-text">Welcome to AndroidBench</h1>
      <div className="file-upload-container">
        <h2>Upload Data</h2>
        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            value={appName}
            onChange={(e) => setAppName(e.target.value)}
            placeholder="App Name"
          />
          <textarea
            value={contentDescription}
            onChange={(e) => setContentDescription(e.target.value)}
            placeholder="Content Description"
          ></textarea>
          
          <input type="file"  onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default FileUpload;
