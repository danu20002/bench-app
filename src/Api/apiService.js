// src/apiService.js
import axios from 'axios';

const BASE_URL = 'https://androidbenchapplication-h9gmcpcna5exf3hy.eastus-01.azurewebsites.net'; 

export const uploadFile = async (file, appName, contentDescription) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('appName', appName);
  formData.append('contentDescription', contentDescription);

  try {
    const response = await axios.post(`${BASE_URL}/basicappdata/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const getBasicAppData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/basicappdata/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Add more functions as needed
