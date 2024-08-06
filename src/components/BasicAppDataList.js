import React, { useEffect, useState } from 'react';
import { getBasicAppData } from '../Api/apiService';
import './BasicAppDataList.css';

const BasicAppDataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Ensure loading is true before starting fetch
      try {
        const result = await getBasicAppData();
        console.log('Fetched data:', result); // Log the data for debugging
        
        // Check if the result is an array
        if (Array.isArray(result)) {
          setData(result);
        } else {
          console.error('Unexpected data format:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="data-list-container">
      <h1>Basic App Data List</h1>
      {loading ? (
        <div className="loading">
          <span>Loading...</span>
        </div>
      ) : (
        <ul>
          {data.length > 0 ? (
            data.map((item) => (
              <li key={item.id}>
                <img src={item.appImageUrl} alt={item.appName} />
                <div>
                  <h2>{item.appName}</h2>
                  <p>{item.contentDescription}</p>
                </div>
              </li>
            ))
          ) : (
            <li>No data available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default BasicAppDataList;
